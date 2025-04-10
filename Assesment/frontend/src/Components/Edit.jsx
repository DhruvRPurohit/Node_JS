import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'


const Edit = () => {
    const {id} = useParams()
    const [data,setData]=useState([])
    //Fetching Data of ON ID
    useEffect(()=>{
        axios.get(`http://localhost:3000/Student/Data/Display/${id}`)
        .then((res)=>setData(res.data.userdata))
        .catch((err)=>console.log(err))
    },[id])

    const nav = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:3000/Student/Data/Update/${id}`,data)
            .then((res)=>console.log("Data Submitted Sucessfully..",res))
            .catch((err)=>console.log(err))
        
        nav('/')
    }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-100 p-6'>
    <form action="" className='bg-white p-6 rounded-lg shadow-md w-full max-w-md' method='post' onSubmit={handleSubmit}>
      <div className='flex flex-col space-4'>
        <input type="text" placeholder='Full Name' className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full h-12 text-lg text-gray-700' value={data.stud_name} onChange={(e)=>setData({...data,stud_name:e.target.value})} />
        <input type="text" placeholder='Email Address' className='mt-5 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focu ring-blue-300 w-full h-12 text-lg text-gray-700' value={data.stud_email} onChange={(e)=>setData({...data,stud_email:e.target.value})} />

        <input type="date" className='mt-5 w-full  border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 h-12 text-lg text-gray-700' value={data.stud_birthdate} onChange={(e)=>setData({...data,stud_birthdate:e.target.value})} />

        <div className='flex mt-5'>
          <button type='submit' className='mx-1 bg-blue-500 rounded-lg w-[50%] h-12 text-lg text-white hover:bg-blue-600'>Submit</button>
          <Link to='/' className='mx-1 w-[50%] h-12 bg-green-500 rounded-lg flex justify-center items-center text-white hover:bg-green-600 '>Back</Link>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Edit