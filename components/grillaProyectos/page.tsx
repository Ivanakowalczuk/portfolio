import React from "react";
import Card from "../card/page";
import { IDataProyecto, IProyecto } from "@/interface";

  const GrillaProyectos= ({proyectos}:  IDataProyecto) => {
  
    return(
      <div>
     
           <h2 className="text-center text-white font-bold  mx-auto text-5xl  md:text-6xl xl:text-7xl animate-rotate-x animate-thrice">
            MIS PROYECTOS
            </h2>
     
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
         
        { proyectos.map((proyecto: IProyecto)=>(
          <>
          <Card 
          key={proyecto._id} 
          imagen={proyecto.imagen} 
          nombre={proyecto.nombre} 
          descripción={proyecto.descripción} 
          url={proyecto.url} 
          repositorio={proyecto.repositorio} 
     
           />
          </>
        ))}
      </article>
      </div>
    )
    
 
  };
  
  export default GrillaProyectos;
