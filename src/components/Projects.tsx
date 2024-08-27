'use client'

import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'
import SingleProject from "./utils/SingleProject";
import { Projects as proyectos } from "@/db/projects";

//Componente que muestra 6 proyectos que se han realizado
export default function Projects() {

  //Enrutador
  const router = useRouter()

  return (
    <>
      <div id='proyectos' className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5'>
        {proyectos.map((proyecto, index) => (
          index < 3 &&
          <SingleProject
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
          className={`uppercase bg-cybergreen-200 text-cyberblack font-sf_pixelate font-bold text-sm md:text-lg lg:text-xl tracking-wider px-2 lg:px-3 lg:py-1 rounded-[4px]`}>{'ver más >>'}</motion.button>
      </div>
    </>
  )
}
