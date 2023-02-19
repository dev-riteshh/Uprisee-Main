import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='flex mb-3 pb-2 '>
      <div className='w-[14rem]'>
        <h1 className='text-center text-[2rem] font-black text-indigo-600'>Uprisee</h1>
      </div>
      <div className='flex justify-between items-center flex-1 mx-5 pb-4 border-gray-300 border-b-2'>
        <h1 className='font-semibold text-lg'>Startup/dashboard</h1>
        <div className='rounded-full h-10 w-10 bg-slate-500'></div>
      </div>
    </div>
  )
}

export default DashboardHeader