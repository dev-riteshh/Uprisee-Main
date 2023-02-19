import React from 'react'

const PostedJob = () => {
  return (
    <div className='m-2 border p2 rounded-md'>
     <h1 className='m-2  pt-3 pl-3 text-lg font-semibold'> Posted Jobs</h1>
     <div className='m-2 p-4 border rounded-md'>
        <h1>Job Title :</h1>
        <h1>Job description :</h1>
        <h1>Location :</h1>
        <h1>Salary :</h1>
        <h1>created at :</h1>
     </div>
    </div>
  )
}

export default PostedJob