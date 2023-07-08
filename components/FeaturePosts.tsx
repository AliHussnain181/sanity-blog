"use client"
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanityClient';
import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url'

type Props = {}

type BlogData = {
    _id: string;
    image: string;
    title: string;
    content: string;
    categories: string;
};


const FeaturePosts = (props: Props) => {
    const [data, setData] = useState<BlogData[]>([]);
    const builder = imageUrlBuilder(client);

    useEffect(() => {
        getBlog('');
    }, []);

    const getBlog = async (category: string) => {
        const res = await client.fetch(`*[_type=="blog"${category ? ` && categories == "${category}"` : ''}]`);
        if (res && res.length > 0) {
            setData(res.slice(0, 10));
        }
    };

    function urlFor(image: string) {
        return builder.image(image);
    }

    return (
        <>
            <div className='mt-24 w-[74%] sm:w-[90%] md:w-[68%] lg:w-[88%] mx-12 md:mx-20 text-2xl font-Space font-[600]'>
                <h1>Featured Posts</h1>
                <hr />
            </div>
            <div className='w-[74%] sm:w-[90%] md:w-[68%] lg:w-[88%] mt-5 mx-12 md:mx-20 sm:grid sm:grid-cols-3 lg:grid-cols-5'>
                {data.map((d) => (
                    <Link  href={`/blog/${d._id}`} key={d._id} className='mx-1 h-[20rem] my-3 bg-gradient-to-tl from-[#f2f1ef] to-white'>
                        <div className='bg-gradient-to-tl from-[#f2f1ef] to-white py-3'>
                            <Image
                                className='object-cover object-top w-[90%] mx-auto h-[12.5rem] rounded-xl'
                                src={urlFor(d.image).url()}
                                alt="featured"
                                width={200}
                                height={200}
                            />
                        </div>
                        <h1 className='line-clamp-3 w-[92%] font-Space bg-gradient-to-tl from-[#f2f1ef] to-gray-50 leading-7 text-[1.125rem] font-[500] mx-auto'>
                            {d.title}
                        </h1>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default FeaturePosts