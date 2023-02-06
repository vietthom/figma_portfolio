import { Layout, FeaturedWorkCard } from '../components'
import { featuredWorkData } from '../constants'

const works = (props) => {
  return (
    <div>
      <Layout>
        <h1 className="text-[44px] font-black pt-6">Work</h1>
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

export default works