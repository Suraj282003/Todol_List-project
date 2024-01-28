"use client"
import React, { useState } from 'react';

const page = () =>{
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault()
     setmaintask([...maintask, {title,desc}])
      settitle("")
      setdesc("")
  }
  let renderTask = <h1>no task available</h1>

  const deleteTask = (i) => {
    let copyTask = [...maintask]
    copyTask.splice(i,1)
    setmaintask(copyTask)
  }


  if (maintask.length>0) {
  
  renderTask = maintask.map((t,i) => {
    return(
      <li key={i} className='flex justify-between items-center m-2'>
      <div className='flex justify-between w-full'>
        <h5 className='font-bold text-2xl'>{t.title}</h5>
        <h6 className='text-2xl'>{t.desc}</h6>
        <button 
        onClick={()=>{
          deleteTask(i)
        }}
        className='bg-red-400 px-3 py-3 rounded'>Delete</button>
      </div>
      </li>
    )
  })
}
    return(
      <>
      <h1 className='bg-black text-white text-center p-6 text-3xl font-bold m-1'>Suraj's Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type = 'text'
        className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded'
        placeholder='Enter Task Here'
        value={title}
        onChange={(e) =>{
          settitle(e.target.value)
        }}
        />

<input type = 'text'
        className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded'
        placeholder='Enter description Here'
        value={desc}
        onChange={(e) =>{
          setdesc(e.target.value)
        }}
        />

        <button className='px-3 py-3 rounded bg-black text-white font-bold'>Add Task</button>
      </form>
      <hr/>
      <div className='bg-indigo-500 p-8 w-full text-white'>
          {renderTask}
      </div>
      </>
    )
}

export default page