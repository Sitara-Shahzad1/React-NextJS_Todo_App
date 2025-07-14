"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [date, setDate] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) =>{
 e.preventDefault()
 console.log(title);
 console.log(date);
 setMainTask([...mainTask, {title,date}])
 settitle("")
 setDate("")
 
  }

  const deleteHandler =(i)=>{
   let copyTask = [...mainTask];
   copyTask.splice(i,1)
   setMainTask(copyTask)
  }
let renderTask= "No Task Available"
if(mainTask.length>0){

  renderTask = mainTask.map(function(t,i){
    return <li key={i}  >
   <div className='flex justify-evenly text-center ' >
    
    <h5 className='text-center font-bold p-3 ' >{t.title}</h5>
    <h6 className='text-center font-bold p-3 '>{t.date}</h6>
    <button className='bg-red-900 px-5 py-2 text-white font-bold text-1xl border-2 border-black rounded-2xl' onClick={()=>{
      deleteHandler(i)
    }} >Delete</button>
  </div>
 </li>
})
}
  return (
   <>
   <h1 className='bg-black text-white py-4 text-center font-bold text-3xl '>STAR'S To Do List</h1>

   <form className='text-center gap-4' onSubmit={submitHandler}>

   <input 
    
    value={title}
    type='text' 
    className=' m-5 px-4 py-1 border-2 rounded-2xl text-1xl border-zinc-900' 
    placeholder='Enter your Task' 
    onChange={(e)=>{
      settitle(e.target.value);
    }}/>

   <input 
    type='date'
    value={date}
    className=' m-5 px-4 py-1 border-2 rounded-2xl text-1xl border-zinc-900' 
    placeholder='Enter your Title' 
    onChange={(e)=>{
       setDate(e.target.value);
    }}  
    />

    <button type='submit'   className='bg-black text-white px-5 py-1.5  font-bold rounded-2xl '    > Add Task </button>

   </form>

  <hr /> 

  <div className='bg-cyan-950 px-4 py-5 text-green-50 m-3 font-bold '>
 {renderTask}
  </div>
   </>
  )
}

export default page