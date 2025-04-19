import React from "react";
import Card from "../card/page";
import { IDataProyecto, IProyecto } from "@/interface";

  const GrillaProyectos= ({proyectos}:  IDataProyecto) => {
  
    return(
      <div className="items-center min-h-screen">
     
           <h2 className="text-center  text-gray-100 font-bold  mx-auto text-4xl  md:text-4xl  animate-fade-down">
            MIS PROYECTOS
            </h2>
     
      <div className="grid grid-cols-1 w-full sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-4 p-2">
         
        { proyectos.map((proyecto: IProyecto)=>(
          <>
          <Card 
          key={proyecto.nombre} 
          imagenDestacada={proyecto.imagenDestacada} 
          nombre={proyecto.nombre} 
          descripcion={proyecto.descripcion} 
          url={proyecto.url} 
          repositorio={proyecto.repositorio} 
          _id={proyecto._id}
          imagenes={proyecto.imagenes}
              
           />
          </>
        ))}
      </div>
      </div>
    )
    
 
  };
  
  export default GrillaProyectos;
