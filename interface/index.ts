import { ReactNode } from 'react';

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
