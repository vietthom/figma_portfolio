import { Layout, BlogCard } from '../components'
import { blogPosts } from '../constants'

const blog = () => {
  return (
    <Layout>
      <h1 className="font-bold text-5xl pt-[160px] pb-[55px]">Blog</h1>
      <ul className='divide-y divide-gray-200 pb-[30px]'>
          {blogPosts.map((blogs) => (
            <li key={blogs} className="py-4">
              <BlogCard {...blogs}/>
            </li>
          ))}
        </ul>

    </Layout>
  )
}

export default blog