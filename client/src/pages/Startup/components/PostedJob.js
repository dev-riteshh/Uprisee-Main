import React from 'react'
import { HiTrash } from "react-icons/hi2";


const PostedJob = () => {
  return (
    <>
     <div className='m-2 p-4 border rounded-md relative'>
        <h1>Job Title :</h1>
        <h1>Job description :</h1>
        <h1>Location :</h1>
        <h1>Salary :</h1>
        <h1>created at :</h1>
        <button className='p-2 bg-slate-300 hover:bg-red-600 text-white rounded-md absolute top-0 right-0 mr-3 mt-3'>
            <HiTrash className='icon'/>
        </button>
     </div>
    </>
  )
}

export default PostedJob