import React from "react";
import Card from "../card/page";
import { IDataProyecto, IProyecto } from "@/interface";

  const GrillaProyectos= ({proyectos}:  IDataProyecto) => {
  
    return(
      <div className="items-center min-h-screen">
     
           <h2 className="text-center  text-gray-100 font-bold  mx-auto text-5xl  md:text-6xl xl:text-7xl animate-fade-down">
            MIS PROYECTOS
            </h2>
     
      <div className="grid grid-cols-1 w-full sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-4 p-2">
         
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
      </div>
      </div>
    )
    
 
  };
  
  export default GrillaProyectos;
