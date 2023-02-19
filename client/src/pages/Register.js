import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-7 flex flex-col gap-6 rounded-md w-[20rem] ">
        <h2 className=" text-lg font-bold">Sign in New Account</h2>
        <label className="flex flex-col">
          <span>Email</span>
          <input
            type="text"
            className=" rounded-md border-2 p-2"
            placeholder="Email"
          />
        </label>
        <label className="flex flex-col">
          <span>Password</span>
          <input
            type="text"
            className=" rounded-md border-2 p-2"
            placeholder="Password"
          />
        </label>
        <button className="rounded-md p-2 bg-indigo-600 text-white">
          Log in
        </button>
        <span className=" text-center text-base">
          Already Have Account ? <Link to={'/login'} className='text-indigo-600'>Log in</Link>
        </span>
      </div>
    </div>
  )
}

export default Register