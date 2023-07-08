import React from 'react';

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-white text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Our Blog</h1>
          <p className="text-lg mb-8">
            Welcome to our blog! We are passionate about sharing knowledge, inspiring others, and creating a community
            of like-minded individuals. Our goal is to provide valuable and engaging content that enriches the lives of
            our readers.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-6">
            At our blog, we strive to empower our readers by delivering high-quality articles across a wide range of
            topics. Whether you&apos;re interested in technology, health and wellness, travel, or personal development,
            we&apos;ve got you covered. Our team of experienced writers is dedicated to delivering informative and
            well-researched content that resonates with our audience.
          </p>
          <h2 className="text-2xl font-bold mb-4">What Sets Us Apart</h2>
          <p className="mb-6">
            We believe in the power of storytelling and the impact it can have on people&apos;s lives. Our blog goes
            beyond mere information-sharing; we aim to create a captivating reading experience that sparks inspiration
            and encourages personal growth. With a focus on quality, creativity, and authenticity, we aim to stand out
            from the crowd and provide a refreshing perspective in the online world.
          </p>
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6">
            We value the input and engagement of our readers. Feel free to leave comments, ask questions, and share
            your thoughts on our articles. We&apos;re here to foster a supportive and inclusive community where
            everyone&apos;s voice is heard and respected.
          </p>
          <p>
            Thank you for being a part of our journey. Together, let&apos;s explore, learn, and inspire!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
