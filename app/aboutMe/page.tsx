import React from 'react';
import TechnicalSkills from '@/components/aboutMe/technicalSkills';
import Introduction from '@/components/aboutMe/introduction';
import Description from '@/components/aboutMe/description';


const AboutMe = () => {
    
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-5xl mx-auto p-4   shadow-lg rounded-lg">
           
           <Introduction/>
            {/* Sección de la imagen y descripción */}
            <Description/>
            {/* Sección de habilidades */}
            <TechnicalSkills/>
          </div>
        </div>
      );
    };
    
  


export default AboutMe 