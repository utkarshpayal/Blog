import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage, status}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-green-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                            className='rounded-xl object-cover w-64 h-40' // Set your desired width and height here
                            />

            </div>
            <h2
            className='font-bold text-black'
            >{title}</h2>
            <h1
            className='font-bold text-black'
            >{status}</h1>
        </div>
    </Link>
  )
}


export default PostCard