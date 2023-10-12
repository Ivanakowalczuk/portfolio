import { IDataProyecto, IProyecto } from "@/interface";
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GET_PROJECTS } from "./thunk";

type initialState={
        proyectos: IProyecto[],
        isLoading: boolean,
        isError: string | null,   
}
const initialState: initialState = {
    proyectos:[],
    isLoading: false,
    isError: null,   
}

export const proyectosSlice = createSlice({
    name : 'proyectos',
    initialState,
    reducers : {},
    extraReducers: (builder) => {
      builder.addCase(GET_PROJECTS.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(GET_PROJECTS.fulfilled, (state, action : PayloadAction<IDataProyecto>) => {
        state.proyectos = action.payload.proyectos;
        state.isLoading = false;
      });
      builder.addCase(GET_PROJECTS.rejected, (state, action)=> {
        state.isLoading = false;
        state.isError = action.error.message ?? 'Ha ocurrido un error';
      });

    }
          
    
})

const projectReducer = proyectosSlice.reducer;
export const {} = proyectosSlice.actions;
export default projectReducer;