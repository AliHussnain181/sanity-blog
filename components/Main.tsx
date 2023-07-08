import React from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';

type Props = {};

const Main = (props: Props) => {
  return (
    <div className='w-[84%] mx-12 py-24 sm:w-[78%] md:mx-20 lg:w-[80%] lg:mx-24'>
      <div className='text-4xl font-Space font-bold tracking-wide sm:text-6xl'>
        <h1>I enjoy crafting minimalistic designs with vibrant, daring color schemes.</h1>
      </div>
      <div className='text-lg font-Roboto font-bold opacity-30 py-2 w-[95%] lg:w-[52%]'>
        <p>For me, there&apos;s something truly captivating about the simplicity of minimalism, and I love to incorporate that aesthetic into my designs.</p>
      </div>
      <div className='flex items-center space-x-2 my-6 mx-3'>
        <BsArrowReturnRight className='text-4xl' />
        <button className='text-white bg-black hover:bg-[#FF1A75] font-inter text-xs tracking-widest font-medium py-[1.1rem] px-9 rounded-lg'>
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Main;
