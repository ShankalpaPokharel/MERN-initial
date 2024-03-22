import React from 'react'

import appwritService from "../appwrite/config"
import {Link} from 'react-router-dom'

//$ is by appwrite requirement
const PostCard = ({$id,title,featureImage}) => {
  console.log("PostCard got",$id,title,featureImage)
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
               <img src={appwritService.getFilePreview(featureImage)} alt={title} className='rounded-xl' />

            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard