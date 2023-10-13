import { IDataProyecto } from "@/interface";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const GET_PROJECTS = createAsyncThunk(
    'projects/GET_PROJECTS',
    async (url: string): Promise<IDataProyecto> => {
            
            try {
                    const resp = await fetch(url);
                    const data = await resp.json();
                    const resultsProjects = {
                            proyectos: data.data
                    }
                
                    return resultsProjects;
                  } catch (error) {
                    console.error('Error fetching data:', error);
                    throw error;
                  }
                 
    }
  );
