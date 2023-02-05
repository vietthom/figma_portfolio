import Image from "next/image"
import { Pill } from '../components'

const FeaturedWorkCard = (props) => {
  return (
    <div className="flex items-center">
        <div className="relative w-[400px] h-[180px]">
          <Image 
            src={props.imgUrl} 
            alt="image" 
            sizes="100vw" 
            fill 
            style={{objectFit: "contain"}}
          />
        </div>
      <div className="ml-[18px]">
        <h1 className="text-3xl font-bold mb-5">{props.title}</h1>
        <div className="flex align-center mb-5">
          <Pill {...props}/>
          <p className="ml-[26px] text-xl text-[#8695A4]">{props.tag}</p>
        </div>
        <p className="mb-2">{props.summary}</p>
      </div>
    </div>
  )
}

export default FeaturedWorkCard