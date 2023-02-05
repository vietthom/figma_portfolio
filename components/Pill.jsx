import React from 'react'

const Pill = (props) => {
  return (
    <button className='rounded-full bg-[#142850] px-[10px] text-lg font-black text-white'>{props.date}</button>
  )
}

export default Pill