'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Portada = () => {
  return (
    <div>

<div className="container  my-2 mx-auto md:px-6 portada ">
  <section className="text-center animate-jump-out animate-once animate-ease-in-out animate-alternate-reverse  animate-duration-[2000ms]">
        <div className="px-4 py-10 md:px-6 lg:text-left text-center">
          <div className="grid gap-8 lg:grid-cols-2 ">
          <div >
            <h1 className="mb-6 text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 md:text-6xl xl:text-8xl ">
             Ivana Kowalczuk<br /><span className="text-white xl:text-3x2">Developer</span>
            </h1>
            <p className="text-lg text-[hsl(218,81%,95%)] ">
             Desarrolladora Web con React.js y Next.js. 
             Apasionada por la tecnología y la programación. 
             Constantemente busco aplicar mis conocimientos 
             y seguir desarrollándome profesionalmente. 
             Actualmente estoy cursando la Especialización en Front End en Digital House. Mi aspiración, ser una experta desarrolladora web fullstack 
             con las tecnologías más innovadoras de javascript, React, Next.js, Node.js, Express, MongoDB y MYSQL. 
            </p>
            <Link href='/proyectos'><h2 className='text-blue-600 text-lg font-bold underline mb-6 mt-10 '>Ver Proyectos</h2></Link>
          </div>
          <Image  src="/fotoPerfil2.png" width='400' height='400' alt='foto'/>    
        </div>    
    </div>
  </section>

</div>





    </div>
  )
}

export default Portada