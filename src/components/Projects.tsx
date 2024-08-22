'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import type { FooterTechs } from "@/types";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { CgFramer } from "react-icons/cg";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { useEvent } from "@/hooks/useEvent";
import { SiMui } from "react-icons/si";

//Types
type ProjectCardProps = {
  image: string
  title: string
  descripciones: string[]
  techs: FooterTechs[]
  link?: string
}

//Componente que muestra los proyectos que he realizado, se muestran en cards o en lista dependiendo del tamaño de la pantalla
export default function Projects() {

  //LLamar al hook del context
  const { state, dispatch } = useEvent()

  //Componente que muestra un solo card o lista de acuerdo a los props
  const ProjectCard = ({ image, title, descripciones: descripciones, techs, link }: ProjectCardProps) => {

    //Manejador que muestra la advertencia en caso de no tener un link
    const handleEnableWarning = () => {
      if (!link && !state.warning) {
        dispatch({ type: "warning-on" })
      }
    }

    return (
      <motion.a
        href={link}
        onClick={handleEnableWarning}
        referrerPolicy='no-referrer'
        target='_blank'
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
      </motion.a>
    )
  }

  return (
    <section id='proyectos' className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5'>
      {/*Proyecto de Facturar*/}
      <ProjectCard
        image='/facturar.jpg'
        title='Facturador web'
        descripciones={['Creación del Front-End para una aplicación web para facturar.', '[PROYECTO DE EMPRESA]']}
        techs={[{ logo: <RiNextjsFill />, nombre: 'Next' }, { logo: <BiLogoJavascript />, nombre: 'JavaScript' }, { logo: <RiTailwindCssFill />, nombre: 'Tailwind' }]}
      />
      {/*Proyecto de Ecommerce de farmacia*/}
      <ProjectCard
        image='/farmacia.jpg'
        title='E-commerce farmacia'
        descripciones={['Front-End para un E-commerce de una farmacia.', '[PROYECTO DE EMPRESA]']}
        techs={[{ logo: <RiReactjsFill />, nombre: 'React' }, { logo: <BiLogoJavascript />, nombre: 'JavaScript' }, { logo: <FaCss3Alt />, nombre: 'Css' }]}
      />
      {/*Proyecto de Nutrilife*/}
      <ProjectCard
        image='/nutri.jpg'
        title='NutriLife'
        descripciones={['Front-End para aplicación para nutriólogos.', 'Se creó tanto el sitio web como la aplicación móvil.', '[PROYECTO DE EMPRESA]']}
        techs={[{ logo: <RiNextjsFill />, nombre: 'Next' }, { logo: <RiReactjsFill />, nombre: 'Native' }, { logo: <BiLogoJavascript />, nombre: 'JavaScript' }, { logo: <FaCss3Alt />, nombre: 'Css' }, { logo: <SiMui />, nombre: 'MUI'}]}
      />
      {/*Proyecto de Calculadora de Consumo y Propinas*/}
      <ProjectCard
        image='/propinas.jpg'
        title='Calculadora de consumo y propinas'
        descripciones={['Mini proyecto que te da el precio de lo que consumió y la propina.', 'En este se usaron conceptos como Hooks (useState y useMemo para mejora de performance), así como el uso de un Custom Hook para escalabilidad.']}
        techs={[{ logo: <RiReactjsFill />, nombre: 'React' }, { logo: <BiLogoTypescript />, nombre: 'TypeScript' }, { logo: <RiTailwindCssFill />, nombre: 'Tailwind' }, { logo: <SiMui />, nombre: 'MUI'}]}
        link='https://calculadora-consumo-propina-gimikode.netlify.app/'
      />
      {/*Proyecto de Calculadora de Contador de Calorías*/}
      <ProjectCard
        image='/calorias.jpg'
        title='Contador de calorías'
        descripciones={['Mini proyecto que cuenta las calorías que se queman y consumen.', 'Se puso en práctica los Hooks de React en específico useState, useEffect, useMemo(Para mejora de rendimiento) y useReducer(Para almacenar los datos).']}
        techs={[{ logo: <RiReactjsFill />, nombre: 'React' }, { logo: <BiLogoTypescript />, nombre: 'TypeScript' }, { logo: <RiTailwindCssFill />, nombre: 'Tailwind' }, { logo: <CgFramer />, nombre: 'Framer_Motion' }]}
        link='https://contador-calorias-gimikode.netlify.app/'
      />
    </section>
  )
}
