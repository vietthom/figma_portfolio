import React from 'react'

const RecentPostCard = (props) => {
  return (
    <div className='bg-white w-[418px] h-[295px] rounded shadow-md p-5 mb-8'>
      <h1 className='text-2xl font-bold mb-4'>{props.title}</h1>
      <div className='flex space-x-4 text-lg mb-3'>
        <p>{props.date}</p>
        <p>|</p>
        <p>{props.tags}</p>
      </div>
      <p>{props.summary}</p>
    </div>
  )
}

export default RecentPostCard