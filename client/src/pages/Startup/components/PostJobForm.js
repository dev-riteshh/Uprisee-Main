import React, { useState } from 'react'
// import axios from 'axios'

const PostJobForm = () => {
  // const [data,setData] =useState({})
  const [Form,setForm] = useState({})

  const handleForm = (e)=>{
    console.log(e.target.value,e.target.name);

    setForm({
      ...Form,
      [e.target.name ]: e.target.value,
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
  }

  // const fetch = axios.get('http://localhost:5050/api/job')
  // .then(response => {
  //   setData(response.data);
  // })
  // .catch(error => {
  //   console.log(error);
  // });

  // useEffect(() => {
  //   fetch()
  // })
  

  return (
    <div className='m-2 border p2 rounded-md'>
      <form className='grid grid-cols-3 p-4' onSubmit={handleSubmit}>
        <div className='input-form'>
          <label>Job-Title</label>
          <input name='jobTitle' onChange={handleForm} type="text" ></input>
        </div>
        <div className='input-form'>
          <label>Job-Description</label>
          <input onChange={handleForm} type="text" name='jobDescription'></input>
        </div>
        <div className='input-form'>
          <label>Location</label>
          <input onChange={handleForm} type="text" name='location'></input>
        </div>
        <div className='input-form'>
          <label>Salary</label>
          <input onChange={handleForm} type="text" name='salary'></input>
        </div>
        <div className='input-form'>
          <label>Period</label>
          <select onChange={handleForm} name="jobTime" className='border p-1 rounded-md'>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Remote</option>
          </select>
        </div>
        <button className='text-white bg-indigo-600 self-end justify-self-start px-5 m-2 p-2 rounded-md'>Post Job</button>
      </form>

      <p>{JSON.stringify(Form)}</p>
    </div>
  )
}

export default PostJobForm