import mongoose, { ObjectId } from 'mongoose';
import { ReactNode } from 'react';

export interface IProyecto {
    _id?: mongoose.Types.ObjectId;
    nombre: string,
    url: string,
    descripcion: string,
    repositorio: string,
    imagenDestacada: string,
    imagenes: string[],
 
}

export interface IDataProyecto {
    proyectos: IProyecto[]
}

export interface ISubItemMenu {
    type: string;
    href: string;
  }
  
export interface INavigationItem {
    name: string;
    href: string;
    current: boolean;
    target?: string;
    icon: ReactNode; 
    subItem?: ISubItemMenu[]; 

}

export interface INavigationMenu {
    navigation: INavigationItem[]
}
