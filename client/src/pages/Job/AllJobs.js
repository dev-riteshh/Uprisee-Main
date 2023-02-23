import React from 'react'
 

const AllJobs = () => {
  return (
    <>
    <div className="bg-white flex-1 rounded-lg p-5">
    <div className='rounded-md p-2 flex gap-7'>
        <lable className='flex-1'>
          <input value={''} placeholder='Search investor' className='p-2 w-[16.4rem] border-2 rounded-md'/>  
          <button className='bg-indigo-600 p-2 mx-1 rounded-md text-white'>Search</button>
        </lable>

        <select className='border rounded-md p-2 w-20 flex-1'>
          <option>Angle Investor</option>
          <option>Accelarator</option>
          <option>Incubalator</option>
        </select>

        <select className='border rounded-md p-2 w-20 flex-1'>
          <option>Technology</option>
          <option>Education</option>
          <option>Finance</option>
        </select>
      </div>

      
    </div>
    </>
  )
}

export default AllJobs