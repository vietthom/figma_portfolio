import { Hero, RecentPostCard, Layout, FeaturedWorkCard } from '../components'
import { postData, featuredWorkData } from '../constants'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Hero />
      <div className='w-full p-4 bg-[#EDF7FA]'>
        <Layout>
          <div className='flex justify-between my-4'>
            <h1 className='text-2xl'>Recent posts</h1>
            <Link href="/blog" className='text-[#00A8CC]'>View all</Link>
          </div>
          <ul className='flex gap-5'>
            {postData.map((posts) => (
              <li key={posts}>
                <RecentPostCard {...posts} />
              </li>
            ))}
          </ul>
        </Layout>
      </div>
      <Layout>
        <h1 className="text-[22px] pt-6">Featured Works</h1>
        <ul className='divide-y divide-gray-200 pb-[30px]'>
          {featuredWorkData.map((work) => (
            <li key={work} className="py-1">
              <FeaturedWorkCard {...work}/>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  )
}
