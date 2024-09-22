'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Portada = () => {
  return (
 
  <section className="mx-auto w-full my-8 justify-items-center items-center flex flex-col lg:flex-row lg:text-left text-center animate-jump-out animate-once animate-ease-in-out animate-alternate-reverse  animate-duration-[2000ms]">
            <div className='justify-items-center items-center w-full'>
                <h1 className="mb-6 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 md:text-6xl xl:text-7xl ">
                Ivana Kowalczuk<br /><span className="text-white xl:text-3x2">Developer</span>
                </h1>
                <div  className='flex justify-center lg:hidden'>
                <Image  src="/fotoPerfil.png" width='300' height='300' alt='foto de perfil' />    
                </div>
                <p className="text-lg text-[hsl(218,81%,95%)] my-10 sm:mx-20 lg:mx-0 lg:mr-20">
                Front End Specialist. Técnica en programación. 
                Diseño y desarrollo de aplicaciones web con las tecnologías de React.js, Next.js, Mongo DB, SQL, Node.js y Express. 
                Gestión de marketing para negocios con google Ads, Google Analitic y Google Tag Manager. Diseño de interfaces con Figma. Testing manual y automatizado con Java y Selenium, Jest, 
                React Testing Library. Administración de Cloud Server en AWS y otros.
                Actualmente trabajo freelance para profesionales interesados en hacer conocer su marca creando sitios web responsivos y administrando los servicios de marketing. 
                También, brindo servicios a GOINGADS para diferentes clientes que requieren de mis conocimientos en sus proyectos. 
                </p>
                <div className='flex justify-center gap-8 mb-6 lg:justify-start'>
                <Link href='/proyectos' className='rounded-md bg-[#A63860] border-4 border-[#A63860] py-3 px-8 text-base font-medium text-white outline-none hover:bg-gradient-to-r hover:from-blue-600/80 hover:to-red-600/80 '>
                 Proyectos académicos
                 </Link>

                 <Link href='/enConstruccionPage' className='rounded-md border-4 border-blue-600 py-3 px-8 text-base font-semibold text-white outline-none hover:bg-gradient-to-r hover:from-blue-600/80 hover:to-red-600/80 '>
                 Proyectos laborales
                 </Link>
                 </div>
          </div>
          <div  className='hidden lg:flex'>
          <Image  src="/fotoPerfil.png" width='600' height='600' alt='foto de perfil' />    
          </div>

  </section>







   
  )
}

export default Portada