import React from 'react'


const PostJobForm = () => {
  return (
    <div className='m-2 border p2 rounded-md'>
      <form className='grid grid-cols-3 p-4'>
        <div className='input-form'>
          <label>Job-Title</label>
          <input></input>
        </div>
        <div className='input-form'>
          <label>Job-Description</label>
          <input></input>
        </div>
        <div className='input-form'>
          <label>Location</label>
          <input></input>
        </div>
        <div className='input-form'>
          <label>Salary</label>
          <input></input>
        </div>
        <div className='input-form'>
          <label>Period</label>
          <select className='border p-1 rounded-md'>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Remote</option>
          </select>
        </div>
        <button className='text-white bg-indigo-600 self-end justify-self-start px-5 m-2 p-2 rounded-md'>Post Job</button>
      </form>
    </div>
  )
}

export default PostJobForm