import React from "react";
import Card from "../card/page";



const getData = async () => {
  const url = process.env.URI + "/api/projects" || process.env.NODE_ENV;
  console.log(process.env.URI)
    try {
      const response = await fetch(url, { cache: "no-store" });
  
      return response.json();
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const GrillaProyectos = async () => {
    const {data} = await getData()

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
