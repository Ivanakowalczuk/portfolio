'use client'
import GrillaProyectos from "@/components/grillaProyectos/page";
import Portada from "@/components/portada/page";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { GET_PROJECTS } from "@/store/projects/thunk";
import { useEffect } from "react";
import { useSelector } from "react-redux";



export default function Home() {

  const url = "/api/projects"

  const { proyectos} = useSelector(
    (state: RootState) => state.proyectos
  );

  const dispatch = useAppDispatch();
 
  useEffect(()=>{
   dispatch(GET_PROJECTS(url))
 
  }, [])
  return (
    <main className='flex-auto'>
      <Portada/>
      
    
      </main>
  )
}
