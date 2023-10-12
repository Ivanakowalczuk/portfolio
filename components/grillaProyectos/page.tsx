import React, { FC, useEffect, useState } from "react";
import Card from "../card/page";
import { IDataProyecto, IProyecto } from "@/interface";



  const GrillaProyectos= ({proyectos}:  IDataProyecto) => {
  
    return(
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
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
    )
    
 
  };
  
  export default GrillaProyectos;
