import Image from 'next/image'
import React from 'react'

export default function MoreInfo() {
  return (
    <>
        <p className='text-2xl font-w95f4 tracking-wider text-cyberwhite'>Soy egresado del <span className='text-cybergreen-200'>Instituto Tecnológico de Toluca</span> de la carrera de <span className='text-cybergreen-200'>Ingeniería en Sistemas Computacionales</span>, en donde aprendí temas como POO, Bases de Datos SQL/NoSQL, Redes, Programación Web, Inteligencia Artificial, entre otros. Mientras me apoyaba de C++, Java, Python o HTML.</p>
        <div className='grid lg:grid-cols-2 mt-4'>
            <p className='text-2xl font-w95f4 tracking-wider text-cyberwhite'></p>
            <Image loading='lazy' src={''} alt='Imagen de José Antonio con su titulo'  width={300} height={300} />
        </div>
    </>
  )
}
