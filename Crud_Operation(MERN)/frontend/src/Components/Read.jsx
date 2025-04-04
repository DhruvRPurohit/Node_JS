import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Read = () => {
  const [data,setData]=useState([])
  const {id} =useParams();
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/crud/Read/${id}`)
    .then((res)=>setData(res.data.data))
    .catch((err)=>console.log(err))
},[])
  
  

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 py-5 rounded d-flex justify-content-center align-items-center flex-column'>
        <h4>Details of The Users </h4>
          <div className='mb-2'>
            <strong>Name: {data.name}</strong>
          </div>

          <div className='mb-2'>
            <strong>Email: {data.email}</strong>
          </div>

          <div className='mb-2'>
            <strong>Phone: {data.phone}</strong>
          </div>

          <div>
            <Link to={`/Update/${id}`} className='btn btn-success'> Edit </Link>
            <Link to={`/`} className='btn btn-primary ms-3'> Back </Link>
          </div>

      </div>
    </div>
  )
}

export default Read