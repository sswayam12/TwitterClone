import React from 'react'

export const CreatePost = () => {
  return (
    <div>
      <div className='flex item-center justify-around text-white text-lg'>
        <div className='hover:bg-white hover:text-black w-[100%]'>
          <h1 className='font-bold cursor-pointer'>For You</h1>
        </div>
        <div className='hover:bg-white hover:text-black w-[100%]'>
          <h1 className='font-bold cursor-pointer'>Following</h1>
        </div>
      </div>
      <div></div>
    </div>
  )
}
