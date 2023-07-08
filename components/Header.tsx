"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi"
import { RxHamburgerMenu } from "react-icons/rx"

type Props = {}

const Header = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div className='flex justify-between items-center h-20 mx-12 md:mx-20 lg:mx-24'>
            <h1 className='text-4xl font-bold font-Space'>BlogVerse</h1>
            <div className='flex items-center space-x-4 text-2xl cursor-pointer'>
                <div>
                    <FiSearch onClick={toggleSearch} />
                    {isSearchOpen && (
                        <div className='absolute top-28 right-0 left-0 flex items-center justify-center  mx-auto bg-opacity-50 '>
                            <div className='bg-white w-[84vw]  rounded-md border-black border-[1px]'>
                                <p onClick={toggleSearch} className='bg-white absolute right-9 md:right-32 mt-5 text-sm cursor-pointer'>cancel</p>
                                <input type="text" placeholder="        Search posts,tags and authors " className='w-[90%] px-12 outline-0 h-[3.8rem] bg-white text-[17px]' />
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <RxHamburgerMenu onClick={toggleMenu} />
                    {isMenuOpen && (
                        <div onClick={toggleMenu}  className='imp flex flex-col text-sm rounded-md absolute w-[11.4rem] h-80 top-16 right-12 lg:right-24 bg-black py-3'>
                            <Link className='bg-black text-white my-2 text-right mx-6' href="/">HOME</Link>
                            <Link className='bg-black text-white my-2 text-right mx-6' href="/about">ABOUT</Link>
                            <Link className='bg-black text-white my-2 text-right mx-6' href="#author">AUTHORS</Link>
                            <Link className='bg-black text-white my-2 text-right mx-6' href="#blog">Blog</Link>
                            <Link className='bg-black text-white my-2 text-right mx-6' href="/">CONTACT</Link>
                            <Link className='bg-black text-white my-2 text-right mx-6' href="/">LOG IN</Link>
                            <Link className='bg-black text-white my-2 text-right mx-6' href="#sub">SUBSCRIBE</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
