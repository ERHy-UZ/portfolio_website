'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectType } from "@/types";
import { useEvent } from "@/hooks/useEvent";
import { useRouter } from 'next/navigation'
import { Projects as proyectos } from "@/db/projects";

//Componente que muestra los proyectos que he realizado, se muestran en cards o en lista dependiendo del tamaño de la pantalla
export default function Projects() {

  //LLamar al hook del context
  const { state, dispatch } = useEvent()

  //enrutador
  const router = useRouter()

  //Componente que muestra un solo card o lista de acuerdo a los props
  const ProjectCard = ({ image, title, descripciones: descripciones, techs, link }: ProjectType) => {

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
          <article className='h-[68%] lg:h-[59%] lg:mt-3 max-lg:p-4 lg:px-4 space-y-1 lg:space-y-3 scrollbar-thin scrollbar-thumb-cybergreen-300 scrollbar-track-transparent overflow-y-auto'>
            <h3 className='uppercase tracking-wider lg:tracking-[5px] font-w95f4 font-bold text-lg lg:text-2xl text-cybergreen-200'>{title}</h3>
            {descripciones.map((descripción, index) => (
              <p key={index} className='text-cyberwhite text-sm lg:text-xl font-inconsolata font-semibold tracking-wider text-pretty'>{descripción}</p>
            ))}
          </article>
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
    <>
      <div id='proyectos' className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5'>
        {proyectos.map((proyecto, index) => (
          index < 6 &&
          <ProjectCard
            key={index}
            image={proyecto.image}
            title={proyecto.title}
            descripciones={proyecto.descripciones}
            techs={proyecto.techs}
            link={proyecto.link}
          />
        ))}
      </div>
      <div className='w-full flex justify-end px-1 lg:px-4 items-center pt-4 lg:pt-8'>
        <motion.button
          type="button"
          onClick={() => router.push('/my_projects')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className={`uppercase bg-cybergreen-200 text-cyberblack font-sf_pixelate font-bold text-base md:text-lg lg:text-xl tracking-wider px-2 lg:px-3 lg:py-1 rounded-[4px]`}>{'ver más >>'}</motion.button>
      </div>
    </>
  )
}
