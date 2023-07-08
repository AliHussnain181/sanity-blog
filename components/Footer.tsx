import React from 'react'
import Link from 'next/link'
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai"

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='w-[66%] mx-auto mt-12 font-Space lg:w-[100%] lg:flex lg:justify-between mb-5 '>
            <div>
                <h1 className='text-3xl font-bold text-center'>BlogVerse</h1>
                <p className='text-xs text-inherit opacity-50 py-2 font-bold text-center lg:pl-24'>© BRANCH - PUBLISHED WITH GHOST</p>
            </div>
            <div className='py-7 text-[13px] space-x-4 text-center lg:pr-24 lg:font-bold'>
                <Link href="">MEMBERSHIP</Link>
                <Link href="">SIGNIN</Link>
                <Link href="">SIGNUP</Link>
            </div>
            <div className='flex items-center justify-center space-x-3 text-xl cursor-pointer lg:pr-24'>
                <AiFillFacebook />
                <AiOutlineTwitter />
            </div>
        </div>
    )
}

export default Footer