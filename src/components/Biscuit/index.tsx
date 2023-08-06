import React from 'react';

type BiscuitProps = {
  text: string;
  subText: string;
};

const Biscuit = ({ text, subText}: BiscuitProps) => {
  return (
    <div>
      <h1 className='text-[42px] text-gray-800 font-bold'>{text}</h1>
      <p className='text-gray-400'>{subText}</p>
    </div>
  );
};

export default Biscuit;
