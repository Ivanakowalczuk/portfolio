import React from 'react'
import Menu from './menu'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='hidden md:flex justify-between items-center p-4'>
     <Link href='/' className="self-start  rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
      <Image
          className="h-12 w-12 rounded-full"
          src='/24.svg'
          width={100}
          height={100}
          alt="logo"
          aria-label="logo"
          id="Button logo"
        />
     </Link>
      <Menu/>  
   </div>
  )
}

export default Header