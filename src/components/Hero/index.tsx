import React from 'react'
import Biscuit from '../Biscuit'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='container mt-[150px] px-[30px] md:px-0'>
        <main className='flex gap-10 flex-col md:flex-row items-center justify-center md:px-[100px]'>
            <div className="flex flex-col gap-5 md:max-w-[50%] ">
                <Biscuit text='Transform your home with Timeless Furniture' subText='Discover Elegance and Comfort in Every Piece' />
                <button className='bg-gray-700 mt-3 rounded-lg px-4 py-2 md:w-[30%] text-white hover:bg-gray-500'>Shop now</button>
            </div>
            <div className="flex items-center justify-center">
                <Image src={'/chair.png'} width={700} height={700} alt="hero" />
            </div>
        </main>
    </div>
  )
}

export default Hero