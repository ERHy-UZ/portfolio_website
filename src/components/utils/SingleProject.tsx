'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { useEvent } from "@/hooks/useEvent";

import { ProjectType } from "@/types";
import { memo } from "react";

//Componente que muestra un solo proyecto de acuerdo a los props, se muestran en cards o en lista dependiendo del tamaño de la pantalla
const SingleProject = memo(({ image, title, descripciones: descripciones, techs, link }: ProjectType) => { {/*<-- memo se utiliza como useMemo, se renderiza si los props cambian*/}

    //LLamar al hook del context
    const { state, dispatch } = useEvent()

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
})

export default SingleProject