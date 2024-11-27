'use client'
import Link from 'next/link'
import { navigationData } from '@/data/data'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react';

type NavbarProps = {
  closeDrawer?: () => void;
};

const Menu =({ closeDrawer }: NavbarProps)  => {
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const handleDropdownToggle = () => {
  setIsDropdownOpen((prev) => !prev);
};

  return (        
      <nav className='text-white md:mx-auto md:bg-gray-800/20 md:rounded-2xl md:mb-6' >
      <ul className="flex flex-col justify-between items-start gap-2 p-1 lg:gap-6 md:border md:border-gray-700 rounded-2xl md:flex-row  ">
        {navigationData.navigation.map((item, index) => (
          <li key={index} 
          className="relative group "
          onMouseEnter={() => item.subItem && handleDropdownToggle()} 
          onMouseLeave={() => item.subItem && handleDropdownToggle()} 
          >
            <Link
              className="flex items-center justify-center gap-2  cursor-pointer  hover:bg-gray-600/20 rounded-xl p-2"
              href={item.href}
              onClick={closeDrawer}
              target={item.target}            >
              {item.icon}
             <p>{item.name}</p>
              {item.subItem && (
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  aria-hidden="true"
                />
              )}
            </Link>

            {/* Dropdown */}
            {item.subItem && isDropdownOpen && (
              <div 
              className="absolute left-28  w-[200px] md:left-0  p-1 md:w-[250px]  text-white z-10 ">
                <ul className="grid  md:grid-cols-2 p-1 mt-[-20px] md:mt-2  rounded-xl border bg-gray-900 border-gray-700 ">
                  {item.subItem.map((subItem, subIndex) => (
                    <li key={subIndex} >
                      <Link
                        href={subItem.href}
                        className="block px-2 py-1 hover:bg-gray-600/20  rounded-xl cursor-pointer"
                        onClick={closeDrawer}
                      >
                        {subItem.type}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      </nav>
    
  );
}


export default Menu
