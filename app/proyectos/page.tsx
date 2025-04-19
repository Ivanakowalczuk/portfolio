'use client'
import React, { FC, useEffect } from 'react'
import GrillaProyectos from '@/components/grillaProyectos/GrillaProyectos'
import { IProyecto } from '@/interface';

const Proyectos:FC = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
    cache: "no-store", // Evitar cacheo para datos actualizados
});

if (!res.ok) {
    throw new Error("Error al obtener los proyectos");
}

const data = await res.json();
const projects: IProyecto[] = data.projects;

  
  return (
    
    <div>
        <GrillaProyectos proyectos={projects} />
    </div>
  )
}

export default Proyectos