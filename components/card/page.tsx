'use client'
import {  IProyecto} from '@/interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Card = ({imagen, descripción, repositorio, url, nombre }: IProyecto) => {
  return (
<div className="mx-5 h-auto max-w-md border rounded-xl shadow-md overflow-hidden md:max-w-3xl mt-20  hover:animate-wiggle animate-infinite animate-fill-backwards">
  <div className="md:flex h-full">
    <div className="bg-red-600 md:h-full  md:w-2/5">
      <Image className="h-full object-cover " src={imagen} alt='foto proyecto' width={500} height={500}/>
    </div>
    <div className="p-8 md:w-3/5">
      <div className="uppercase tracking-wide text-lg text-white-500 font-semibold">{nombre}</div>
      <Link href={url}   target="_blank" className="block mt-1 text-lg leading-tight font-medium text-blue-600 hover:underline">Ver demo</Link>
      <p className="mt-4 mb-4 text-white">{descripción}</p>
      <Link href={repositorio}  target="_blank" className="block mt-1 text-sm leading-tight font-medium text-blue-400 hover:underline">Ver repositorio</Link>
    </div>
  </div>
</div>
  )
}

export default Card