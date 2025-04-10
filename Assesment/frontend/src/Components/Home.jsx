import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {
  const [data,setData]=useState([])
  //Fetchig Data from api
  useEffect(()=>{
    axios.get("http://localhost:3000/Student/Data/Display")
      .then((res)=>setData(res.data.Student_data))
      .catch((err)=>console.log(err))
  },[])

  // TO Handle Deleting Record 
  const HandleDelete = async (id)=>{
    let confirm = window.confirm("Are you Want to Delete this Student Record ?")
    if(confirm){
      try{
        const response = await fetch(`http://localhost:3000/Student/Data/Delete/${id}`,{
          method:"GET",
        })
      }
      catch{
        console.log(err)
      }
      window.location.reload()
    }
  }

  return (
    <div className='p-5 h-screen bg-gray-100 flex flex-col'>
      <div className='w-full h-auto flex justify-center items-center'>
        <h1 className='text-4xl mb-5 text-bold font-semibold'>Student Register </h1>
      </div>
      <div className='w-full h-auto flex justify-end items-center'>
          <Link to={'/Create'} className='border-2 px-8 py-2 border-green-500 hover:text-white hover:bg-green-500'>Add +</Link>
      </div>

      <div className='overflow-auto rounded-lg shadow'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b-2 border-bg-gray-200'>
            <tr>
              <th className='p-3 text-sm font-semibold-tracking-wide text-left'>NO.</th>
              <th className='p-3 text-sm font-semibold-tracking-wide text-left'>Name</th>
              <th className='p-3 text-sm font-semibold-tracking-wide text-left'>Email</th>
              <th className='p-3 text-sm font-semibold-tracking-wide text-left'>Birth Date</th>
              <th className='p-3 text-sm font-semibold-tracking-wide text-left'>Action</th>
            </tr>
          </thead>

          {/* Dispaly data */}
          <tbody className='divide-y divide-gray-100'>
            {
              data.map((i,index)=>{
                return(
                <tr key={index} className={index % 2 == 0 ? 'bg-white' : 'bg-gray-100'}  >
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{index+1}</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{i.stud_name}</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{i.stud_email}</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{i.stud_birthdate}</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <Link to={`/Read/${i._id}`} className='border-2 border-blue-500 rounded-md px-4 py-1 mx-2 hover:text-white hover:bg-blue-500'>Read</Link>
                    <button className='border-2 border-red-500 rounded-md px-4 py-1 hover:bg-red-500 hover:text-white' onClick={()=>HandleDelete(i._id)}>Delete</button>
                    <Link to={`/Edit/${i._id}`} className='border-2 border-green-500 rounded-md px-4 py-1 mx-2 hover:text-white hover:bg-green-500'>Edit</Link>
                  </td>
                </tr>
                )
                
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home