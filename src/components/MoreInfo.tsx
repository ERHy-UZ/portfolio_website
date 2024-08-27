import Image from 'next/image'
import React from 'react'

export default function MoreInfo() {
  return (
    <>
      <p className='text-sm lg:text-lg xl:text-2xl font-w95f4 tracking-wider text-cyberwhite'>Soy egresado del <strong className='text-cybergreen-200'>Instituto Tecnológico de Toluca</strong> de la carrera de <strong className='text-cybergreen-200'>Ingeniería en Sistemas Computacionales</strong>, donde adquirí conocimientos en temas como POO, Bases de Datos SQL/NoSQL, Redes, Programación Web, e Inteligencia Artificial. Durante mi formación, trabajé con lenguajes como C++, Java, Python, y tecnologías web como HTML.</p>
      <section className='grid lg:grid-cols-2 mt-2 lg:mt-4'>
        <div>
          <p className='text-sm lg:text-lg xl:text-2xl font-w95f4 tracking-wider text-cyberwhite 2xl:text-justify'>Actualmente, estoy enfocado en mejorar mis habilidades en tecnologías modernas como <strong className='text-cybergreen-200'>React, Next.js, y React Native</strong>, y también he comenzado a explorar <strong className='text-cybergreen-200 uppercase'>Appian</strong> para desarrollar aplicaciones empresariales. Me gusta crear interfaces de usuario, y me esfuerzo por mantenerme al día con las tendencias y mejores prácticas.</p>
          <p className='text-sm lg:text-lg xl:text-2xl font-w95f4 tracking-wider text-cyberwhite mt-2 lg:mt-4 2xl:text-justify'>A lo largo de mi carrera, he trabajado en varios proyectos que han fortalecido mis competencias y mi capacidad de resolver problemas complejos.</p>
        </div>
        <div className='flex justify-center items-center'>
          <Image className='flex justify-center items-center text-cyberwhite font-w95f4 text-2xl tracking-wider' loading='lazy' src={''} alt='Imagen de José Antonio con su titulo' width={350} height={250} />
        </div>
      </section>
    </>
  )
}
