import React from 'react'
import Biscuit from '../Biscuit'
import Image from 'next/image'

const Deals = () => {
  return (
   <div className='bg-gray-200'>
    <div className='container mt-[80px'>
        <main className='flex gap-10 items-center justify-center'>
            <div className="flex flex-col gap-8 max-w-[50%]">
                <Biscuit text='Deals of the day' subText='Celebrate the holidays in style with our special deals on home decor and furniture. Transform your place into a winter wonderland without stretching your budget.' />
                <div className="flex gap-6">
                    <div className="flex flex-col bg-white py-4 px-5 rounded-md text-center gap-3">
                        <span className='font-bold text-[24px]'>24</span>
                        <small className='text-[15px]'>Days</small>
                    </div>
                    <div className="flex flex-col bg-white py-4 px-5 rounded-md text-center gap-3">
                        <span className='font-bold text-[24px]'>08</span>
                        <small className='text-[15px]'>Hours</small>
                    </div>
                    <div className="flex flex-col bg-white py-4 px-5 rounded-md text-center gap-3">
                        <span className='font-bold text-[24px]'>02</span>
                        <small className='text-[15px]'>Min</small>
                    </div>
                </div>
                <button className='bg-gray-700 mt-3 rounded-md px-4 py-3 w-[30%] text-white hover:bg-gray-500'>Shop now</button>
            </div>
            <div className="flex items-center justify-center">
                <Image src={'/chair.png'} width={500} height={500} alt="deals" />
            </div>
        </main>
    </div>
   </div>
  )
}

export default Deals