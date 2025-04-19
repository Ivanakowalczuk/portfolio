'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Types } from 'mongoose';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'; // ← ya no importa los controles

interface ProjectCardProps {
  id: Types.ObjectId;
  name: string;
  description: string;
  url: string;
  imageDestacada: string;
  imagenes: string[];
}

const ProjectCardId: React.FC<ProjectCardProps> = ({
  name,
  description,
  imagenes,
  url,
}) => {
  return (
  
    <div className="flex flex-col md:flex-row max-w-[1200px] min-h-[400px] mx-auto md:pl-[45px] gap-4 rounded-2xl border border-white shadow-[0_0_25px_rgba(255,255,255,0.2)] bg-[#0A0F18] text-white p-6">


      {/* Contenido textual */}
      <div className="flex flex-col justify-center p-4 w-full md:w-1/2">
        <h2 className="text-xl font-bold text-white">{name}</h2>
        <p className="text-gray-200">{description}</p>
      
      </div>

      {/* Carrusel sin flechas */}
      <div className="w-full md:w-4/5 ">
        <Carousel
          opts={{ align: 'start' }}
          plugins={[Autoplay({ delay: 4000 })]}
        >
          <CarouselContent>
            {imagenes?.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden group">
                  <Image
                    src={src}
                    alt={`Imagen ${index + 1} de ${name}`}
                    fill
                    className="object-cover object-top-center transition-transform duration-300 group-hover:scale-105 rounded-xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectCardId;
