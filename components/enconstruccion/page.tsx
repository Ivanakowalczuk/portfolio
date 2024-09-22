import Link from 'next/link'
import React from 'react'

const EnConstruccion = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">🚧 Página en Construcción 🚧</h1>
    <p className="text-lg md:text-xl">
      Estoy trabajando para brindarte una mejor experiencia. ¡Vuelve pronto para ver mis proyectos laborales!
    </p>
    <Link href='/' className='rounded-md bg-gradient-to-r from-blue-600 to-red-600 my-6 py-3 px-8 text-base font-semibold text-white outline-none hover:bg-gradient-to-r hover:from-blue-600/80 hover:to-red-600/80 '>
       Ir a Inicio
     </Link>
  </div>
  )
}

export default EnConstruccion