'use client'
import React from "react";
import Card from "../card/page";
import { useEffect, useState} from "react";

const [proyectos, setProyectos] = useState([])
const getData = async () => {
    try {
      const response = await fetch(`${process.env.URI}`, { cache: "no-store" });
     setProyectos(response.json)
      return response.json();
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const GrillaProyectos = async () => {
    //const {data} = await getData()
  useEffect(()=> {
   getData() 
  }, [])
    return(
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
        {data.map((elem: any)=>(
          <>
         
          <Card data={elem}/>
          </>
        ))}
      </div>
    )
    
 
  };
  
  export default GrillaProyectos;
