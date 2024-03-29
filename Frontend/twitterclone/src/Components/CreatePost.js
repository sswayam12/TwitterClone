import React from 'react'
import Avatar from "react-avatar"
import { FcImageFile } from "react-icons/fc";

export const CreatePost = () => {
  return (
    <div>
      <div>
      <div className='flex item-center justify-evenly text-white text-lg text-center'>
        <div className='hover:bg-white hover:text-black w-[100%] px-4 py-3 border-b border-gray-700'>
          <h1 className='font-bold cursor-pointer'>For You</h1>
        </div>
        <div className='hover:bg-white hover:text-black w-[100%] text-center px-4 py-3 border-b border-gray-700'>
          <h1 className='font-bold cursor-pointer'>Following</h1>
        </div>
      </div>
      <div>
        <div className='flex items-center p-4'>
          <div><Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU' size="40"  round={true}
          /></div>
          <input type='text' placeholder='What is Happening??'className='bg-black text-white w-full outline-none border-none text-lg ml-2'/>
        </div>
        <div className='flex item-center justify-between p-4 border-b border-gray-700'>
          <div>
          <FcImageFile className='w-10 mt-3' />
          </div>
          <button className='bg-[#1D9BF0] px-4 py-1 text-lg text-white border-none rounded-full'>Post</button>
        </div>
      </div>
      </div>
      
    </div>
  )
}
