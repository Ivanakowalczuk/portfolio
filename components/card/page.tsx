'use client'
import {  IProyecto} from '@/interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Card = ({imagenDestacada, descripcion, repositorio, url, nombre, _id }: IProyecto) => {
  return (
<div className="mx-5 h-auto min-w-[260px]  border rounded-xl shadow-md shadow-gray-600/50 overflow-hidden mt-20  transition-transform transform hover:scale-105 ">
  <div className="flex flex-col h-full">
    <Link href={`/${_id}`}>
    <div className="h-48 ">
      <Image className="h-full w-full object-cover " src={imagenDestacada} alt='foto proyecto' width={400} height={400}/>
    </div>
    </Link>
    <div className="p-8">
      <div className="uppercase tracking-wide text-lg text-gray-100 font-semibold">{nombre}</div>
     
    </div>
  </div>
</div>
  )
}

export default Card