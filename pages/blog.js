import { Layout } from '../components'
import { blogPosts } from '../constants'

const blog = () => {
  return (
    <Layout>
      <h1 className="font-bold text-5xl">Blog</h1>
      <ul className='divide-y divide-gray-200 pb-[30px]'>
          {blogPosts.map((blogs) => (
            <li key={blogs} className="py-1">
              
            </li>
          ))}
        </ul>

    </Layout>
  )
}

export default blog