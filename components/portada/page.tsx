'use client'
import React from 'react'

const Portada = () => {
  return (
    <div>

<div className="container my-2 mx-auto md:px-6">

  <section className="background-radial-gradient mb-20 text-center">
    
    <div className="px-6 py-12 text-center md:px-12 lg:text-left">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="mt-2 ">
            <h1 className="mb-6 text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 md:text-6xl xl:text-8xl
            animate-jump-out animate-once animate-ease-in-out animate-alternate-reverse  animate-duration-[2000ms]">
             Ivana Kowalczuk<br /><span className="text-white xl:text-3x2">Developer</span>
            </h1>
            <p className="text-lg text-[hsl(218,81%,95%)]   animate-jump-out animate-once animate-ease-in-out animate-alternate-reverse  animate-duration-[2000ms]">
             Desarrolladora Web con React.js y Next.js. 
             Apasionada por la tecnología y la programación. 
             Constantemente busco aplicar mis conocimientos 
             y seguir desarrollándome profesionalmente. 
             Actualmente estoy cursando especialización en Front End. Mi aspiración, ser una experta desarrolladora web fullstack 
             con las tecnologías más innovadoras de javascript, React, Next.js, Node.js, Express, MongoDB y MYSQL. 
            </p>
          </div>
          <div className="mb-10 ">
            <div className="flex justify-between  w-full overflow-hidden "
             >
                <img  src="/fotoPerfil2.png" alt='foto' className="relative h-75 w-75   animate-jump-out animate-once animate-ease-in-out animate-alternate-reverse  animate-duration-[2000ms]">
                </img>
            
            </div>
          </div>
        </div>
      </div>
     
    </div>
  
  </section>

</div>





    </div>
  )
}

export default Portada