import Image from 'next/image'
import React from 'react'

const Description = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center h-full">
    {/* Imagen */}
    <div className="relative m-auto w-72 h-72 sm:w-full sm:h-full shadow-lg">
      <Image
        src="https://raw.githubusercontent.com/Ivanakowalczuk/portfolio/refs/heads/master/public/fotoPerfilFondoGris.png" 
        alt="Profile Picture"
        fill
        className="animate-[fadeIn_3.5s_ease-out_forwards] rounded-full sm:rounded-lg object-cover object-top"
      />
    </div>

    {/* Descripción personal */}
    <div className="space-y-6 text-gray-100 text-md mx-6 sm:mx-0">
    <p>
      ¡Hola! Mi nombre es Ivana Kowalczuk, y me especializo en la creación de aplicaciones web con un enfoque en el rendimiento, la escalabilidad y una experiencia de usuario fluida. He trabajado con varios frameworks y bibliotecas, pero mi experiencia principal radica en tecnologías basadas en JavaScript y React.
    </p>
    <p>
      Estoy en constante aprendizaje. Creo en el crecimiento continuo y siempre busco nuevos desafíos que impulsen mis habilidades.
    </p>
    <p>
      Cuando no estoy programando, puedes encontrarme explorando la naturaleza, leyendo un buen libro o estudiando nuevos framework o lenguajes. ¡No dudes en contactarme si te gustaría que trabajemos juntos en algo interesante!
    </p>

    </div>
  </div>
  )
}

export default Description