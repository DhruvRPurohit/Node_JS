import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
  const [data,setData]=useState({
    name:"",
    email:"",
    phone:""
  })
  
  const handlechange=(e)=>{
    e.preventDefault();
    const {name,value} = e.target
    setData({
      ...data,
      [name]:value
    })
  } 

  const navigate = useNavigate()
  const handelSubmit=async(e)=>{
    try{
      console.log(data)
      const response = await fetch('http://localhost:5000/api/crud/create',{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify(data),
      });
    }
    catch(err){
      console.log(err)
    }
    setData({
      name:"",
      email:"",
      phone:"" 
    })
    navigate('/')
  }

  return (
    <div  >
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'> 

          <div className='w-50 border bg-white shadow px-5 pt-5 pb-5 rounded'>
            <h1>Add a user</h1>
            <div className='mb-2'>
              <label htmlFor="name">Name:</label>
              <input type="text" name='name' className='form-control' placeholder='Enater your Name' value={data.name} onChange={handlechange} />
            </div>

            <div className='mb-2'>
              <label htmlFor="Email">Eamil:</label>
              <input type="text" name='email' className='form-control' placeholder='Enater Email Address' value={data.email} onChange={handlechange} />
            </div>

            <div className='mb-2'>
              <label htmlFor="Phone">Phone: </label>
              <input type="text" name='phone' className='form-control' placeholder='Enater Phone number' value={data.phone} onChange={handlechange} />
            </div> 
            <button className='btn btn-success' onClick={handelSubmit}>Submit</button>
            <Link to="/" className='btn btn-primary ms-3'>Back</Link>
          </div>

      </div>
    </div>
  )
}

export default Create