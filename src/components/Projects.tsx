'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import type { FooterTechs } from "@/types";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { CgFramer } from "react-icons/cg";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { useGlitch, GlitchHandle } from 'react-powerglitch'

type ProjectCardProps = {
  image: string
  title: string
  descripciones: string[]
  techs: FooterTechs[]
}

export default function Projects() {

  const ProjectCard = ({ image, title, descripciones: descripciones, techs }: ProjectCardProps) => {
    const glitch: GlitchHandle = useGlitch({ playMode: 'click', slice: { hueRotate: false, count: 10 }, glitchTimeSpan: { start: .5, end: .7 } })

    return (
      <motion.div
        whileHover={{ scale: 1.06 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.2
        }}
        className='flex lg:flex-col max-lg:rounded-s-2xl lg:rounded-t-2xl h-[10rem] lg:h-[35rem] bg-cybergray border border-cyberblue-100 hover:border-cybergreen-100 hover:shadow-md hover:shadow-cybergreen-100 cursor-pointer'>
        <Image className='w-[40%] lg:w-[93%] h-full lg:h-[50%] lg:mt-4 mx-auto object-cover max-lg:rounded-s-2xl lg:rounded-t-2xl pointer-events-none' src={image} alt='Imagen del proyecto' about='Proyecto' loading='lazy' width={168} height={168} />
        <div className='flex flex-col h-full lg:h-[50%] w-[60%] lg:w-full'>
          <header className='h-[68%] lg:h-[59%] lg:mt-3 max-lg:p-4 lg:px-4 space-y-1 lg:space-y-3 scrollbar-thin scrollbar-thumb-cybergreen-300 scrollbar-track-transparent overflow-y-auto'>
            <h3 className='uppercase tracking-wider lg:tracking-[5px] font-w95f4 font-bold text-lg lg:text-2xl text-cybergreen-200'>{title}</h3>
            {descripciones.map((descripción, index) => (
              <p key={index} className='text-cyberwhite text-sm lg:text-xl font-inconsolata font-semibold tracking-wider text-pretty'>{descripción}</p>
            ))}
          </header>
          <footer className='h-[32%] lg:h-[41%] mt-2 lg:mt-3 border-t-2 lg:border-t-8 border-dashed lg:border-dotted border-cyberblack relative'>
            <div className='h-full w-full flex items-center overflow-y-auto gap-1 lg:gap-3 scrollbar-thin scrollbar-thumb-cybergreen-300 scrollbar-track-transparent px-2 lg:px-4'>
              {techs.map((tech, index) => (
                <p key={index} className='flex items-center uppercase bg-cybergreen-100 text-blue-800 text-xs lg:text-lg font-sf_pixelate px-2.5 py-0.5 rounded'><span className='text-sm lg:text-2xl me-1'>{tech.logo}</span>{tech.nombre}</p>
              ))}
            </div>
          </footer>
        </div>
      </motion.div>
    )
  }

  return (
    <section id='proyectos' className='grid md:grid-cols-2 2xl:grid-cols-3 gap-5'>
      <ProjectCard
        image='/facturar.jpg'
        title='Facturador web'
        descripciones={['Creación del Front-End para una aplicación web para facturar.']}
        techs={[{ logo: <RiNextjsFill />, nombre: 'Next' }, { logo: <RiTailwindCssFill />, nombre: 'Tailwind' }, { logo: <BiLogoJavascript />, nombre: 'Javascript' }]}
      />
      <ProjectCard
        image='/farmacia.jpg'
        title='Ecommerce para farmacia'
        descripciones={['Front-End para un Ecommerce de una farmacia.']}
        techs={[{ logo: <RiReactjsFill />, nombre: 'React' }, { logo: <FaCss3Alt />, nombre: 'Css' }, { logo: <BiLogoJavascript />, nombre: 'Javascript' }]}
      />
      <ProjectCard
        image='/nutri.jpg'
        title='NutriLife Web'
        descripciones={['Front-End para aplicación para nutriólogos.', 'Se creo tanto el sitio web como la aplicación móvil.']}
        techs={[{ logo: <RiNextjsFill />, nombre: 'Next' }, { logo: <RiReactjsFill />, nombre: 'Native' } ,{ logo: <FaCss3Alt />, nombre: 'Css' }, { logo: <BiLogoJavascript />, nombre: 'Javascript' }]}
      />
    </section>
  )
}
