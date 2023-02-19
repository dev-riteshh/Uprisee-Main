import React from 'react'
import PostJobForm from './PostJobForm'
import PostedJob from './PostedJob'


const PostJob = () => {
  return (
    <div className='bg-white flex-1 rounded-lg p-5'>
      <PostJobForm />
      <PostedJob />
    </div>
  )
}

export default PostJob