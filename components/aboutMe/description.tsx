import Image from 'next/image'
import React from 'react'

const Description = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
    {/* Imagen */}
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
      <Image
        src="https://raw.githubusercontent.com/Ivanakowalczuk/portfolio/refs/heads/master/public/fotoPerfilFondoGris.png" 
        alt="Profile Picture"
        layout="fill"
        objectFit="cover"
        objectPosition='top'
        className="animate-[fadeIn_3.5s_ease-out_forwards] rounded-lg"
      />
    </div>

    {/* Descripción personal */}
    <div className="space-y-6 text-gray-100 text-lg">
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