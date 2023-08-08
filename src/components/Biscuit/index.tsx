import React from 'react';

type BiscuitProps = {
  text: string;
  subText: string;
};

const Biscuit = ({ text, subText}: BiscuitProps) => {
  return (
    <div>
      <h1 className='md:text-[42px] text-[32px] text-gray-800 font-bold leading-none md:leading-[50px] mb-2'>{text}</h1>
      <p className='text-gray-400 text-[14px] md:text-[16px]'>{subText}</p>
    </div>
  );
};

export default Biscuit;
