import Avatar from '../public/avatar.png'
import Image from 'next/image'
const Hero = () => {
return (
    <div className="container mx-auto w-[856px] h-full mt-[140px] mb-[70px]">
        <div className='flex'>
            <div>
                <h1 className="mb-[40px] text-5xl font-bold">Hi, I am John,<br/>Creative Technologist</h1>
                <p className="mb-[40px] text-base flex-shrink-1 w-[497px] h-[66px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className="bg-primary text-white px-[20px] py-[10px]">Download Resume</button>
            </div>
            <div className='ml-[115px]'>
                <Image src={Avatar} alt="profile picture"/>
            </div>
        </div>
    </div>
)
}

export default Hero