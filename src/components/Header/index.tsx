import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className='flex px-10 h-[80px] bg-[whitesmoke] shadow-lg  w-full items-center justify-between fixed top-0 left-0 z-10'>
        <Image src='/logo_first.png' width={100} height={100} alt="logo"/>
        <div className="flex gap-1 ">
            <div className="relative mr-3">
            <Image src={'/search.svg'} width={20} height={20} alt="search" className='absolute right-[20px] top-[25%] cursor-pointer'/>
            <input type="text" placeholder='What are you looking for...' className='border w-[400px] rounded-md border-gray-400 px-3 py-2 text-sm focus:outline-none' />
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-200 rounded-md cursor-pointer px-3">
                <Image src={'/user.svg'} width={20} height={20} alt="user" />
                <p>Hi, Adebayo</p>
            </div>
            <div className="flex gap-1 items-center hover:bg-gray-200 rounded-md cursor-pointer px-3">
                <Image src={'/help.svg'} width={20} height={20} alt="cart" />
                <p>Help</p>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-200 rounded-md cursor-pointer px-3">
                <Image src={'/cart.svg'} width={20} height={20} alt="cart" />
                <p>Cart</p>
            </div>
        </div>
    </nav>
  )
}

export default Header