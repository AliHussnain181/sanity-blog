"use client"
import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/lib/sanityClient';
import Image from 'next/image';

type Props = {};

const BlogDetail = ({ params }: any) => {

  const { id } = params;

  const [data, setData] = useState<any>(null);
  const builder = imageUrlBuilder(client);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "blog" && _id == $id][0] {
            title,
            content,
            publicationDate,
            image,
            categories
          }`,
          { id }
        );
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div className="center">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>;
  }

  function urlFor(image: string) {
    return builder.image(image);
  }

  const { title, content, publicationDate, image, categories } = data;

  const formattedPublicationDate = new Date(publicationDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-gray-100 font-Roboto">
      <div className="container mx-auto py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md">
          <Image
            src={urlFor(image).url()} alt="Blog"
            className="w-full rounded-t-lg"
            width={500}
            height={500}
          />
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 text-sm">Published on {formattedPublicationDate}</p>
            <p className="text-gray-800 mt-4">{content}</p>
            <p className="text-gray-600 text-sm text-right font-bold">Category {categories}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
