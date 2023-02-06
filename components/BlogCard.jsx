'use client'

const BlogCard = (props) => {
  return (
    <div>
      <h1 className='text-3xl font-medium mb-4'>{props.title}</h1>
      <div className='flex space-x-4 text-lg mb-3'>
        <p>{props.date}</p>
        <p>|</p>
        <p className="text-[#8695A4]">{props.tag}</p>
      </div>
      <p>{props.summary}</p>
    </div>
  )
}

export default BlogCard