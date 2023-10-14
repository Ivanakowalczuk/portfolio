'use client'
import React, { useEffect } from 'react'
import GrillaProyectos from '@/components/grillaProyectos/page'
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/store';
import { GET_PROJECTS } from '@/store/projects/thunk';

const proyectos= () => {
    const url = "/api/projects"

  const { proyectos} = useSelector(
    (state: RootState) => state.proyectos
  );
  
  const dispatch = useAppDispatch();
 
  useEffect(()=>{
   dispatch(GET_PROJECTS(url))
 
  }, [])
  
  
  return (
    <div>
        <GrillaProyectos proyectos={proyectos}/>
    </div>
  )
}

export default proyectos