import React from 'react'
import { CreatePost } from './CreatePost'
import Tweet from './Tweet'

export const Feed = () => {
  return (
    <div className='w-[50%] border border-gray-600 ml-5 '>
      <div>
        <CreatePost/>
        <Tweet/>
      </div>
    </div>
  )
}
