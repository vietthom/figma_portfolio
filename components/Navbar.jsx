'use client'
import Link from "next/link";
import { AiOutlineMenu, AiOulineClose } from 'react-icons/ai';

const Navbar = () => (
        <div className="container mx-auto flex justify-end items-center py-8">
            <ul className="flex gap-[33px] text-[20px] font-medium">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Works</Link>
                </li>
                <li>
                    <Link href="/">Blog</Link>
                </li>
                <li>
                    <Link href="/">Contact</Link>
                </li>
            </ul>
        </div>
);

export default Navbar