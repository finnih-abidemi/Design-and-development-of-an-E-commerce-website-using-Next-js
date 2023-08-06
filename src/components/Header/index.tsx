import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className='flex px-4 h-[80px] bg-[whitesmoke] shadow-lg  w-full items-center justify-between'>
        <Image src='/logo_first.png' width={100} height={100} alt="logo"/>
        <div className="flex gap-4 ">
            <input type="text" placeholder='What are you looking for...' className='border rounded-md border-gray-400 px-3 py-2 text-sm focus:outline-none focus:border-none' />
        </div>
    </nav>
  )
}

export default Header