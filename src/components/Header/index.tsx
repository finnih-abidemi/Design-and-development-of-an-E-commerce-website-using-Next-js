"use client"
import React, {useContext} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import { UserContext } from '@/context/context'

const Header = () => {
    const [show, setShow] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [showNav, setShowNav] = React.useState(false)

    const {cartItem, user, setUser, setCartItem, allProducts, setSearchResult} = useContext(UserContext);
    const {push } = useRouter() 
    const handleLogin = () => {
        setShowNav(false)
        push("/login")
    }

    const handleSearch = (e) => {
        if(e.key === "Enter"){
            const searchResult = allProducts.filter((item) => { 
                return item.name.toLowerCase().includes(searchQuery.toLowerCase())
            })
            setSearchResult(searchResult);
            push(`/search/${searchQuery}`);
        }
    }

    const handleShowNav = () => {
        setShowNav(!showNav)
    }
  return (
    <nav className='flex md:px-10 h-[80px]  bg-[whitesmoke] shadow-lg  w-full items-center justify-between fixed top-0 left-0 z-[1000]'>
        <Image src='/logo_first.png' width={100} height={100} alt="logo" onClick={() => push("/")} className='cursor-pointer'/>

        <section onClick={handleShowNav} className="flex  mr-10 w-[38px] h-[38px]  hover:bg-slate-100 p-2 rounded-full md:hidden "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="bar"><g data-name="Layer 2"><path d="M12 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1zm7 8a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1zM5 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z" data-name="bar-chart"></path></g></svg></section>

        {
            showNav && (
        <section className="flex flex-col w-[200px]  bg-white py-8 top-20 absolute right-0 md:hidden gap-2 items-left">
            <div className="flex gap-4 items-center py-3 relative capitalize  hover:bg-gray-200 rounded-md cursor-pointer px-5" onClick={handleLogin} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false) } >
                <Image src={'/user.svg'} width={20} height={20} alt="user" />
                {
                        user ? `${user.firstName}  ${user.lastName}` : 'Login'
                    }
            </div>
            <div className="flex gap-4 items-center relative mt-4 py-3 hover:bg-gray-200 rounded-md cursor-pointer px-5"  onClick={() => push("/cart")} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false) } >
            <Image src={'/cart.svg'} width={20} height={20} alt="cart" />
                Cart
                {
                    cartItem.length > 0 && (
                        <div className="absolute left-20 top-[-2px] bg-red-500 rounded-full w-[20px] h-[20px] flex justify-center items-center">
                            <p className='text-[12px] text-white'>{cartItem.length}</p>
                        </div>
                    )
                }
            </div>
        </section>
            )
        }
        <div className=" gap-1 hidden md:flex">
            <div className="relative mr-10">
            <Image src={'/search.svg'} width={20} height={20} alt="search" className='absolute right-[20px] top-[25%] cursor-pointer'  />
            <input type="text" placeholder='What are you looking for...' className='border w-[400px] rounded-md border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-400' onKeyPress={handleSearch} value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
            </div>
            <div className="flex gap-2 items-center relative  hover:bg-gray-200 rounded-md cursor-pointer px-3" onClick={handleLogin} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false) } >
                <Image src={'/user.svg'} width={20} height={20} alt="user" />
                <p className='text-[14px] capitalize'>
                    {
                        user ? `${user.firstName}  ${user.lastName}` : 'Login'
                    }
                </p>
                {
                    show && user && (
                        <div className="absolute -right-5 top-[30px] py-4 bg-white rounded-md w-[150px] shadow-md flex flex-col justify-center items-center" onClick={e => e.stopPropagation()} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                            <div className="flex flex-col gap-4">
                            <p className='text-[13.3px] text-gray-500 hove:text-gray-800 hover:border-b border-gray-400 pb-[0.2rem]'>My Account</p>
                            <p className='text-[13.3px] text-gray-500 hove:text-gray-800 hover:border-b border-gray-400 pb-[0.2rem]'>My Orders</p>
                            <p className='text-[13.3px] text-gray-500 hove:text-gray-800 hover:border-b border-gray-400 pb-[0.2rem] font-bold' onClick={() => {
                                localStorage.removeItem("Alloy_user")
                                setCartItem([])
                                setUser(null)
                                push("/")
                            }  } >Log out</p>
                            </div>
                        </div>
                    )
                }
            </div>
            {/* <div className="flex gap-1 items-center hover:bg-gray-200 rounded-md cursor-pointer px-3">
                <Image src={'/help.svg'} width={20} height={20} alt="cart" />
                <p className='text-[14px]'>Help</p>
            </div> */}
            <div className="flex relative items-center gap-2  hover:bg-gray-200 rounded-md cursor-pointer px-3"  onClick={() => push("/cart")}>
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