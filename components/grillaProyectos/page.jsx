import React from "react";
import Card from "../card/page";

const getData = async () => {
    try {
      const response = await fetch(`${process.env.URI}`, { cache: "no-store" });
    
      return response.json();
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const GrillaProyectos = async () => {
    const {data} = await getData()
  console.log(data)
    return(
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
        {data.map((elem)=>(
          <>
         
          <Card data={elem}/>
          </>
        ))}
      </div>
    )
    
 
  };
  
  export default GrillaProyectos;