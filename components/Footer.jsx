import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Layout } from '../components';

const Footer = () => (
    <div className='py-[50px]'>
        <div className="flex justify-center gap-9">
            <FaFacebookSquare className="w-[30px] h-[30px]"/>
            <FaInstagram className="w-[30px] h-[30px]"/>
            <FaTwitter className="w-[30px] h-[30px]"/>
            <FaLinkedin className="w-[30px] h-[30px]"/>
        </div>
        <div className='flex justify-center pt-6'>
            <p className="text-sm">Copyright ©2020 All rights reserved </p>
        </div>
    </div>
);

export default Footer