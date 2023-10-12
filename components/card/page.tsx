'use client'
import { IDataProyecto, IProyecto} from '@/interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Card = ({imagen, descripción, repositorio, url, nombre }: IProyecto) => {
  return (
<div className="max-w-md mx-auto border rounded-xl shadow-md overflow-hidden md:max-w-3xl mt-20">
  <div className="md:flex">
    <div className="md:shrink-0">
      <Image className="h-48 w-full object-cover md:h-full md:w-48" src={imagen} alt='foto proyecto' width={500} height={500}/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-lg text-white-500 font-semibold">{nombre}</div>
      <Link href={url} className="block mt-1 text-lg leading-tight font-medium text-blue-600 hover:underline">Ver demo</Link>
      <p className="mt-4 mb-4 text-white">{descripción}</p>
      <Link href={repositorio} className="block mt-1 text-sm leading-tight font-medium text-blue-400 hover:underline">Ver repositorio</Link>
    </div>
  </div>
</div>
  )
}

export default Card