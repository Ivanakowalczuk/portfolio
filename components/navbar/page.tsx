'use client'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Mis Proyectos', href: '/proyectos', current: true },
  { name: 'Mi CV', href: '/IVANA_KOWALCZUK.pdf', current: false, target:'_blank' },
  { name: 'Github', href: 'https://github.com/Ivanakowalczuk',   target:'_blank', current: false },
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/frontend-javascript-react-ivana-kowalczuk/',    target:'_blank', current: false },
   { name: 'Contacto', href: '/contact',  current: false },

]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="px-4 py-2 mb-10">
      {({ open }) => (
        <>
          <div >
            <div className="relative flex h-16 w-100 items-center justify-between mx-4">
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">          
              <div>
                <Link href='/' className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
              </div>
              <div>
            <p className='relative flex text-white ml-5  w-60 text-sm hidden md:block'>La perseverancia es el secreto de todos los triunfos</p>
          </div>      
          </div>
        
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button aria-label='menu' className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  items-center justify-between sm:items-stretch sm:justify-center ">
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 mr-20 mt-5">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        target={item.target}
                        aria-label={item.name}
                        id={`button${item.name}`}                     
                        className={classNames(
                          item.current ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-lg font-medium text-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel aria-label="menú" className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-label={item.name}
                  id={`button${item.name}`}  
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
