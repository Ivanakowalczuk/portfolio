import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className='flex flex-col  gap-2 justify-between items-center  py-2 border-t border-gray-900 px-20 text-gray-100 mt-24 md:flex-row '>
      
      <p >@{currentYear } Ivana kowalczuk. </p>
      <p>Todos los derechos reservados</p>
      <div className='flex gap-6'>
       <Link   href='https://www.linkedin.com/in/frontend-javascript-react-ivana-kowalczuk/' target='_blank'>
          <Linkedin size={16} color='white'/>
        </Link>
        <Link   href='https://github.com/Ivanakowalczuk' target='_blank'>
          <Github size={16} color='white'/>
        </Link>
        <a   href='mailto: ivanakowalczuk@gmail.com'  target='_blank'>
          <Mail size={16} color='white'/>
        </a>
      </div>
    
    </div>
  )
}

export default Footer


