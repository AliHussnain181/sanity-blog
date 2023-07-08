import React from 'react'

type Props = {}

const Subscribe = (props: Props) => {
    return (
        <div id='sub' className="w-[90%] mx-auto mt-20 h-56 sm:h-52 md:h-40 lg:h-32 lg:w-[70%] xl:w-[66%] rounded-2xl md:mx-20 lg:mx-auto md:flex lg:justify-around  bg-[url('https://branch.trexthemes.com/content/images/2023/05/47.-Whisper.jpg')] bg-cover bg-center">
            <div className='bg-transparent mx-auto text-center pt-9  xl:mx-12 md:text-left'>
                <h1 className='bg-transparent text-3xl text-white font-bold font-Space '>SUBSCRIBE</h1>
                <p className='bg-transparent text-white text-sm mx-auto w-[70%] md:w-[100%]'>Join our community and be the first to know, subscribe now!</p>
            </div>
            <div className=' text-center bg-transparent py-5 md:my-auto md:mx-10 xl:ml-16'>
                <button className=' px-8  py-5 bg-black text-white text-xs rounded-md tracking-[3px] hover:bg-[#FF1A75]'>SUBSCRIBE NOW</button>
            </div>
        </div>
    )
}

export default Subscribe