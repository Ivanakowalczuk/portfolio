import { INavigationMenu } from "@/interface"
import {Briefcase,  FileUser, Github, Home , Linkedin, Mail, UserCircle} from 'lucide-react'

export const navigationData: INavigationMenu = {
  navigation: [
    {
      name: 'Inicio',
      href: '/',
      current: true,
      icon: <Home size={16} color='white' /> 
    },
    {
      name: 'Sobre mí',
      href: '/aboutMe',
      current: false,
      icon: <UserCircle size={16} color='white' /> 
    },
    {
      name: 'Proyectos',
      href: '/proyectos',
      current: true,
      icon: <Briefcase strokeWidth={2} size={16} color='white' />,
      // subItem: [
      //   { type: 'Figma', href: '/' },
      //   { type: 'Frontend', href: '/' },
      //   { type: 'Fullstack', href: '/' },
      //   { type: 'Todos', href: '/' }
      //       ]
     },
    
     { name: 'Linkedin', 
       href: 'https://www.linkedin.com/in/ivanakowalczuk/',    
       target:'_blank', 
       current: false, 
       icon:<Linkedin strokeWidth={2} size={16} color='white'/>
      },
      { name: 'Github', 
        href: 'https://github.com/Ivanakowalczuk',    
        target:'_blank', 
        current: false, 
        icon:<Github  size={16} color='white'/>
       },
     { name: 'Contacto', 
       href: '/contact',  
       current: false, 
       icon:<Mail size={16} color='white'/> },
             
  ] 
}; 

 