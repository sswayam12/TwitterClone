import React from 'react'
import Avatar from 'react-avatar'

const Tweet = () => {
  return (
    <div>
      <div className='flex p-4'>
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU' size="40"  round={true}/>
        <div className='ml-2'>
        <div className='flex item-center ml-2'>
            <h1 className='font-bold text-white'>Carloss Sainz</h1>
            <p className='text-sm ml-2 text-white'>@CarlossSainssz</p>

        </div>
        <div>
            <p>Hello developers lets connect and grow together</p>
        </div>
        <div className='flex justify between'>
          <div></div>
          <div></div>
          <div></div>
        </div>

        </div>
       
      </div>
    </div>
  )
}

export default Tweet
