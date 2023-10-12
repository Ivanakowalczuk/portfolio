export interface IProyecto {

    _id?: number,
    nombre: string,
    url: string,
    descripción: string,
    repositorio: string,
    imagen: string,
 
}


export interface IDataProyecto {
    proyectos: IProyecto[]

}