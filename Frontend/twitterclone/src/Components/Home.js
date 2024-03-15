import React from 'react'
import { LeftSidebar } from './LeftSidebar'
import { Feed } from './Feed'
import { RightSidebar } from './RightSidebar'

export const Home = () => {
  return (
    <>
    <div className='flex justify-between w-[80%] mx-[auto]'>
    <LeftSidebar/>
    <Feed/>
    <RightSidebar/>
    </div>
    </>
  )
}
