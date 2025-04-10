import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams ,Link} from 'react-router-dom'

const Read = () => {
  const {id}=useParams()
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3000/Student/Data/Display/${id}`)
      .then((res)=>setData(res.data.userdata))
      .catch((err)=>console.log(err))
  },[])
  return (
    <div className='h-screen w-full flex justify-center items-center '>
       <div className='w-50 border-2 shadow rounded-xl px-5 py-5'>
        
          <table className='mb-5 flex flex-col'>
              <tr>
                <th colSpan={2} className='text-xl pb-4'>Studet Data</th>
              </tr>
              <tr>
                <td  className='font-bold text-left'>Student Name :</td>
                <td> {data.stud_name}</td>

              </tr>
              <tr>
                <td  className='font-bold text-left'>Student Email  :</td>
                <td>{data.stud_email}</td>
              </tr>
              <tr>
                <td  className='font-bold'>Student's Birthdate :</td>
                <td>{data.stud_birthdate}</td>
              </tr>
          </table>

          <Link to="/" className='border-2 border-blue-500 px-5 py-2 rounded-md hover:text-white hover:bg-blue-500 '>Back</Link>

       </div>
    </div>
  )
}

export default Read