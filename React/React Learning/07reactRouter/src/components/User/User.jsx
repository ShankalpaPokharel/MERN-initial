import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-gray-600 text-white text-3xl text-center'>User : {userid}</div>
  )
}

export default User