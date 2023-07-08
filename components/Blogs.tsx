"use client"
import { client } from '@/lib/sanityClient';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';

type Props = {};

type BlogData = {
    _id: string;
    image: string;
    title: string;
    content: string;
    categories: string;
};

const Blogs = (props: Props) => {
    const [data, setData] = useState<BlogData[]>([]);
    const builder = imageUrlBuilder(client);

    useEffect(() => {
        getBlog('');
    }, []);

    const getBlog = async (category: string) => {
        const res = await client.fetch(`*[_type=="blog"${category ? ` && categories == "${category}"` : ''}]`);
        if (res && res.length > 0) {
            setData(res.slice(0, 3));
        }
    };

    function urlFor(image: string) {
        return builder.image(image);
    }

    const Categories = [
        "BEAUTY",
        "HOME",
        "FAMILY",
        "HANDBAGS"
    ]

    return (
        <>
            <div id='blog' className='w-[80%] sm:w-[90%] md:w-[90%] mx-12 md:mx-20 lg:mx-auto font-[600] font-Space'>
                <div className='grid grid-rows-1 md:flex md:justify-between  mx-auto'>
                    <h1 className='text-3xl'>Latest stories by category</h1>
                    <div className='flex'>
                        {Categories.map((item) => (
                            <div key={item} className='text-[13px]  space-x-6 py-3 cursor-pointer'>
                                <span onClick={() => getBlog(item)} className='px-5'>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 w-[80%] sm:w-[90%] md:w-[90%] mx-12 md:mx-20'>
                {data.map((blog) => (
                    <div
                        key={blog._id}
                        className='h-[31.3rem] lg:h-[40rem] mx-auto rounded-2xl my-6 bg-gradient-to-tl from-[#f2f1ef] to-white sm:mx-3'
                    >
                        <div className='py-4 rounded-xl bg-gradient-to-tl from-[#f2f1ef] to-white'>
                            <Image
                                className='h-[16rem] w-[86%] lg:h-[24rem] rounded-xl mx-auto object-cover object-top'
                                src={urlFor(blog.image).url()}
                                width={400}
                                height={400}
                                alt='blog'
                            />
                        </div>
                        <p className='w-[86%] bg-gradient-to-l from-[#f2f1ef] to-gray-50 mx-auto line-clamp-2 font-medium leading-7 bg-no-repeat font-Space text-[25px]'>
                            {blog.title}
                        </p>
                        <p className='w-[86%] bg-gradient-to-l from-[#f2f1ef] to-gray-50 tracking-[1px] text-[#aaa] text-[1rem] leading-6 mx-auto pt-2 line-clamp-3'>
                            {blog.content}
                        </p>
                        <div className='bg-grad bg-gradient-to-l from-[#f2f1ef] to-gray-50 mx-auto w-[86%] flex xl:justify-between items-center pt-10'>
                            <Link href={`/blog/${blog._id}`} className='bg-gradient-to-l from-[#f2f1ef] to-gray-50 text-[13px] underline'>READ MORE</Link>
                            <p className='bg-gradient-to-l from-[#f2f1ef] to-gray-50 text-xs opacity-40'>
                                MAY 14, 2023 - 3 MIN READ
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Blogs;
