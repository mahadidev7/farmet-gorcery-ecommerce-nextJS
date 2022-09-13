import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Search from '../components/shared/Search'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

const Header = () => {
  return (
    <header className='bg-white py-7 border-b'>
        <div className="container ">
          {/* Header top area  */}
          <div className="flex justify-between items-center">
            {/* Logo  */}
            <div className=' relative w-[160px] h-[55px]'> 
            <Link href="/">
              <a>
                <Image 
                  src="/images/logo.svg"
                  alt='logo'
                  layout='fill'
                  width={160}
                  height={55}
                  objectFit='contain'
                />
              </a>
            </Link>
              
            </div>
            {/* Search  */}
            <Search />
            {/* Contact  */}
            <div className='lg:flex flex-col hidden '>
              <span className='text-xl font-bold'> 8 800 332 65-66 </span>
              <p className='self-end text-grayColor'> Support 24</p>  
            </div>
            {/* Icons  */}
            <div className=' flex items-center gap-5 '>
              <Link href='/my-account'>
                <a>
                  <AiOutlineUser className='text-3xl text-titleColor' />
                </a>
              </Link>
              <Link href='/cart'>
                <a className='flex items-center gap-5'>
                  <div className='relative'>
                    <AiOutlineShoppingCart className='text-3xl text-titleColor' />
                    <span className='bg-primaryColor rounded text-center absolute px-2 py-1 text-sm -right-3 -top-4 font-semibold'>0</span>
                  </div>
                  <div className='hidden lg:block'>
                    <span className='text-grayColor text-sm'>Your Cart</span>
                    <p className='text-titleColor font-bold text-lg '>$0.00</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header