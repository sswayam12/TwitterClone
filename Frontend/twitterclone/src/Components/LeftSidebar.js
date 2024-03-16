import React from 'react'
import {CiHome} from "react-icons/ci";
import { FaHashtag } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";


export const LeftSidebar = () => {
  return (
    <><div>
        <div>
            <img className='ml-4 mt-6' width={"60px"} src='https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png' alt='twitter-logo'/>
        </div>
        <div className='my-4 mt-4'>
        <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer text-white hover:text-black'>
        <div><CiHome size="24px"/></div>
        <h1 className='font-bold text-lg ml-2'>Home</h1>
       </div>
        </div>
        <div className='my-4'>
        <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer text-white hover:text-black'>
        <div><FaHashtag size="24px"/></div>
        <h1 className='font-bold text-lg ml-2'>Explore</h1>
       </div>
        </div>
        <div className='my-4'>
        <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer text-white hover:text-black'>
        <div><GrNotification size="24px"/></div>
        <h1 className='font-bold text-lg ml-2'>Notification</h1>
       </div>
        </div>
        <div className='my-4'>
        <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer text-white hover:text-black'>
        <div><CiHome size="24px"/></div>
        <h1 className='font-bold text-lg ml-2'>Message</h1>
       </div>
        </div>
        <div className='my-4'>
        <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer text-white hover:text-black'>
        <div><CiUser size="24px"/></div>
        <h1 className='font-bold text-lg ml-2'>Profile</h1>
       </div>
        </div>
        <div className='my-4'>
        <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer text-white hover:text-black'>
        <div><CiBookmark size="24px"/></div>
        <h1 className='font-bold text-lg ml-2'>Bookmark</h1>
       </div>
        </div>
        <div className='my-4'>
        <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer text-white hover:text-black'>
        <div><CiLogout size="24px"/></div>
        <h1 className='font-bold text-lg ml-2'>Logout</h1>
       </div>
       </div>
       <button className='px-4 py-2 border-none text-md bg-[#1D98F0] w-full rounded-full text-white font-bold'>POST</button>
        
    </div></>
  )
}
