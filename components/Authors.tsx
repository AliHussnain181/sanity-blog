import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Authors = (props: Props) => {

    const authors = [
        {
            "name": "John Doe",
            "image": "https://branch.trexthemes.com/content/images/size/w600/2023/05/candice-picard-MP0IUfwrn0A-unsplash.jpg",
            "post_count": 10
        },
        {
            "name": "Jane Smith",
            "image": "https://branch.trexthemes.com/content/images/size/w600/2023/05/Screenshot-2023-05-14-at-12.08.35.png",
            "post_count": 5
        },
        {
            "name": "David Johnson",
            "image": "https://branch.trexthemes.com/content/images/size/w600/2023/05/Screenshot-2023-05-14-at-11.56.53.png",
            "post_count": 3
        },
        {
            "name": "Emily Brown",
            "image": "https://branch.trexthemes.com/content/images/size/w600/2023/05/photo-1552374196-c4e7ffc6e126.png",
            "post_count": 7
        },
        {
            "name": "Michael Wilson",
            "image": "https://branch.trexthemes.com/content/images/size/w600/2023/05/Screenshot-2023-05-14-at-17.03.54.png",
            "post_count": 12
        },
        {
            "name": "Emily Brown",
            "image": "https://branch.trexthemes.com/content/images/size/w600/2023/05/Screenshot-2023-05-14-at-16.59.42.png",
            "post_count": 7
        },
        
    ]

    return (
        <>
            <div id='author' className='w-[85%] lg:w-[90%]  mx-auto'>
                <div className='text-4xl font-bold font-Space mt-20 w-[90%]'>
                    <p>Meet our best authors</p>
                    <hr />
                </div>
            </div>
            <div className='w-[85%] lg:w-[90%] mx-auto lg:h-[10rem] lg:flex lg:flex-row lg:gap-x-5 overflow-x-auto'>
                {authors.map((p,index) =>
                    <Link key={index} className='flex my-4  h-[4.5rem] mx-auto lg:h-[5.6rem] lg:px-2 bg-gray-50 rounded-2xl hover:bg-[#FF1A75] hover:text-white ck' href="/">
                        <Image className='w-14 h-14 lg:w-10 lg:h-10 rounded-full bg-gray-50 my-auto mx-3' src={p.image} width={100} height={100} alt='' />
                        <div className='bg-transparent my-auto hover:bg-[#FF175]'>
                            <p className='bg-transparent text-lg font-[600] text-inher font-Space line-clamp-2 lg:leading-5'>{p.name}</p>
                            <p className='bg-transparent lg:py-1 text-sm lg:text-xs font-Space font-[600]  lg:leading-tight'>{p.post_count}{' '}POSTS</p>
                        </div>
                    </Link>
                )}
            </div>
        </>
    )
}

export default Authors