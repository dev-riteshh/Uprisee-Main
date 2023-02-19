import React from 'react'
import InvestorList from './components/InvestorList'

const Investor = () => {
  return (
    <div className='bg-white flex-1 rounded-lg p-5'>
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
      
      {/* here is the list of investora */}

      <div className="mt-5">
      <div class="relative overflow-x-auto sm:rounded-lg border">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                Investor name
              </th>
              <th scope="col" class="px-6 py-3">
                Company
              </th>
              <th scope="col" class="px-6 py-3">
                Location
              </th>
              <th scope="col" class="px-6 py-3">
                Industry
              </th>
              <th scope="col" class="px-6 py-3">
                Stage
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Proposal
              </th>
            </tr>
          </thead>
          <tbody>
            <InvestorList />
            <InvestorList />
            <InvestorList />
            <InvestorList />
            <InvestorList />
            <InvestorList />
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Investor