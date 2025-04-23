'use client'
import React, { useState } from 'react'
import { Menu as MenuIcon } from 'lucide-react'
import Menu from './menu'
import Link from 'next/link'
import Image from 'next/image'
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'


const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };
  return (
    <div className='flex justify-between items-center w-full  gap-4 p-6 md:hidden border-red-400' >
    <Drawer direction="left" open={isOpen} onClose={closeDrawer}  >
    <DrawerTitle>
    <Link href='/' className="justify-self-start  rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
      <Image
          className="h-14 w-14 rounded-full"
          src='/24.svg'
          width={100}
          height={100}
          alt="logo"
          aria-label="logo"
          id="Button logo"
        />
     </Link>
    </DrawerTitle>
    <DrawerTrigger  onClick={toggleDrawer}  aria-label='Button Menú' className='w-1/5 flex justify-end'>
        <MenuIcon size={48} color='white' />
     </DrawerTrigger>
    <DrawerContent aria-describedby='menú de navegación' className='flex flex-col flex-start h-full bg-gradient-to-tr  from-black  via-gray-900  to-red-950 rounded-none p-10 gap-6'>
    <Menu  closeDrawer={closeDrawer}/>      
    </DrawerContent>
    </Drawer>
    </div>


  )
}

export default HeaderMobile