import Image from 'next/image'
import React from 'react'

import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react"

import {useRouter} from "next/router"
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'


function Header() {

  const router = useRouter();
  const { data: session } = useSession()

  const items = useSelector(selectItems)
  return (
    <header >
       <div className='flex items-center bg-amazon_blue p-1 flew-grow py-2'>
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image 
             onClick={() => router.push("/")}
            src="https://links.papareact.com/f90" 
            width={150}
            height={40}
            objectFit='contain'
            className="cursor-pointer"
            />
        </div>

        <div className= ' hidden  sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  bg-yellow-400 hover:bg-yellow-500 '>
          <input type="text" className='p-2 h-full w-6 flex-grow  flex-shrink rounded-l-md focus:outline-none px-4 ' />
          <SearchIcon className='h-12 p-4 '/>
          </div>

          <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap '>
          
            <div className="link cursor-pointer "
             onClick={!session ? signIn : signOut}>
            {session ? `Hello, ${session.user.name}` : "SignIn"}
            <p className='text-heade'>Account & List</p>
            </div>
            <div className="link ">
              <p>Returns</p>
              <p className='text-heade'>Orders</p>
            </div>
            <div onClick={()=>router.push('/Checkout')} className=" relative link flex items-center ">
               <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold '>{items.length}</span>
              <ShoppingCartIcon className='h-10'/>
              <p className= 'hidden md:inline text-heade mt-2 '>Basket</p>
            </div>
          </div>
       </div>

       <div className='flex items-center space-x-3 bg-amazon_blue-light text-white text-sm '>
         <p className="link flex items-center  ">
          <MenuIcon className="h-6 mr-1" />
          All
         </p>

         <p className='link'>Prime Video</p>
         <p className='link'>Amazon Business</p>
         <p className='link'>Today's Deals</p>
         <p className='hidden link lg:inline-flex'>Electronics</p> 
         <p className='hidden link lg:inline-flex'>Food & Grocery</p>
         <p className='hidden link lg:inline-flex'>Prime</p>
         <p className='hidden link lg:inline-flex'>Buy Again</p>
         <p className='hidden link lg:inline-flex'>Shopper Toolkit</p>
         <p className='hidden link lg:inline-flex'>Health & Personal Care</p>

       </div>
    </header>
  )
}

export default Header