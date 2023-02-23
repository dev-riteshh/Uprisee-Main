import React from 'react'
import AppliedJobsList from './components/AppliedJobsList'


const Applications = () => {
  return (
    <>
    <div className="bg-white flex-1 rounded-lg p-5">
      <h1 className="m-4 text-xl font-semibold">Your Applied Jobs</h1>
      <div className='border p-2'>
        <AppliedJobsList />
      </div>
    </div>
    </>
  )
}

export default Applications