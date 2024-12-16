'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { ChevronRight } from 'lucide-react'

const Portada = () => {
  return (
 
  <section className="w-full mt-4 flex flex-col  md:text-left text-center md:ml-20 animate-fade-right ">
            <div >
                <h1 className="mb-6 text-3xl font-bold   text-gray-50 md:text-6xl xl:text-7xl ">
                Fullstack Developer<br /><span className="text-gray-50 xl:text-4xl">Front End Specialist</span>
                </h1>
                <p className="mx-auto lg:w-[700px] text-sm  md:text-md text-gray-50 my-10  md:mx-0 ">
                Soy fullstack developer, especialista en Front End.  
                Diseño y desarrollo aplicaciones web con las tecnologías de React.js, Next.js, Mongo DB, SQL, Node.js y Express. 
                Brindo servicios para diferentes clientes y ayudo a profesionales en su presencia en la web y en la gestión digital de sus negocios.
                </p>
              <div className='flex justify-center gap-8 mb-6 md:justify-start'>
                <Link href='/aboutMe' className='flex items-center  gap-4 rounded-3xl  border border-gray-700 py-1 px-1 text-base font-medium text-white  hover:bg-gray-900/40 '>
                  <Avatar className='w-[35px] h-[35px]'>
                    <AvatarImage src='/fotoPerfil.png'/>
                  </Avatar>
                  <p className='text-md '> Sobre mí </p>
                  <ChevronRight size={24} strokeWidth={0.5} />
                </Link>
              </div>
          </div>
   </section>
  
  )
}

export default Portada