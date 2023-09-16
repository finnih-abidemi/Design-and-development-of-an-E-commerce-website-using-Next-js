"use client"
import React, {useContext} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import { UserContext } from '@/context/context'

const Header = () => {
    const {cartItem, user} = useContext(UserContext);
    const {push } = useRouter() 
    const handleLogin = () => {
        push("/login")
    }

    // console.log(user)
  return (
    <nav className='flex md:px-10 h-[80px] bg-[whitesmoke] shadow-lg  w-full items-center justify-between fixed top-0 left-0 z-[1000]'>
        <Image src='/logo_first.png' width={100} height={100} alt="logo" onClick={() => push("/")} className='cursor-pointer'/>
        <div className="flex gap-1 invisible md:visible">
            <div className="relative mr-10">
            <Image src={'/search.svg'} width={20} height={20} alt="search" className='absolute right-[20px] top-[25%] cursor-pointer'/>
            <input type="text" placeholder='What are you looking for...' className='border w-[400px] rounded-md border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-400' />
            </div>
            <div className="flex gap-2  hover:bg-gray-200 rounded-md cursor-pointer px-3" onClick={handleLogin}>
                <Image src={'/user.svg'} width={20} height={20} alt="user" />
                <p className='text-[14px]'>
                    {
                        user ? `${user.firstName}  ${user.lastName}` : 'Login'
                    }
                </p>
            </div>
            {/* <div className="flex gap-1 items-center hover:bg-gray-200 rounded-md cursor-pointer px-3">
                <Image src={'/help.svg'} width={20} height={20} alt="cart" />
                <p className='text-[14px]'>Help</p>
            </div> */}
            <div className="flex relative gap-2  hover:bg-gray-200 rounded-md cursor-pointer px-3"  onClick={() => push("/cart")}>
                <Image src={'/cart.svg'} width={20} height={20} alt="cart" />
                <p className='text-[14px]'>Cart</p>
                {
                    cartItem.length > 0 && (
                        <div className="absolute -right-2 top-[-5px] bg-red-500 rounded-full w-[20px] h-[20px] flex justify-center items-center">
                            <p className='text-[12px] text-white'>{cartItem.length}</p>
                        </div>
                    )
                }
            </div>
        </div>
    </nav>
  )
}

export default Header