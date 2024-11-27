'use client'
import {  IProyecto} from '@/interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Card = ({imagen, descripción, repositorio, url, nombre }: IProyecto) => {
  return (
<div className="mx-5 h-auto min-w-[260px]  border rounded-xl shadow-md shadow-gray-600/50 overflow-hidden mt-20  transition-transform transform hover:scale-105 ">
  <div className="flex flex-col h-full">
    <div className="h-48 ">
      <Image className="h-full w-full object-cover " src={imagen} alt='foto proyecto' width={400} height={400}/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-lg text-gray-100 font-semibold">{nombre}</div>
      <Link href={url}   target="_blank" className="block mt-1 text-lg leading-tight font-medium text-blue-500 hover:underline">Ver demo</Link>
      <p className="mt-4 mb-4 text-white">{descripción}</p>
      <Link href={repositorio}  target="_blank" className="block mt-1 text-sm leading-tight font-medium text-blue-300 hover:underline">Ver repositorio</Link>
    </div>
  </div>
</div>
  )
}

export default Card