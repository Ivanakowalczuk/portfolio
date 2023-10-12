'use client'
import GrillaProyectos from "@/components/grillaProyectos/page";
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
  console.log(proyectos)
  useEffect(()=>{
   dispatch(GET_PROJECTS(url))
 
  }, [])
  return (
    <main className='flex-auto'>
    <GrillaProyectos proyectos={proyectos}/>
    
      </main>
  )
}
