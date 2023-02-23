import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='flex mb-3 pb-2 '>
      <div className='w-[14rem]'>
        <h1 className='text-center text-[2rem] font-black text-indigo-600'>Uprisee</h1>
      </div>
      <div className='flex justify-between items-center flex-1 mx-5 pb-4 pt-2 border-gray-300 border-b-2'>
        <h1 className='font-semibold text-lg'>Job seeker/dashboard</h1>
      </div>
    </div>
  )
}

export default DashboardHeader