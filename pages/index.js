import { Hero, RecentPostCard } from '../components'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Hero />
      <div className='w-full p-4 bg-[#EDF7FA]'>
        <div className='container mx-auto w-[856px]'>
          <div className='flex justify-between mb-4'>
            <h1 className='text-2xl'>Recent posts</h1>
            <Link href="/blog" className='text-[#00A8CC]'>View all</Link>
          </div>
          <RecentPostCard />
        </div>
      </div>
    </div>
  )
}
