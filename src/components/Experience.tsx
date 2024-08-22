'use client'

import { motion } from "framer-motion"
import { ReactNode } from "react"

//Types
type TimelineSegmentProps = {
    title: string
    time: string
    content: string
    aditional?: ReactNode
    isRecent: boolean
}

//Componente que muestra la experiencia en forma de linea de tiempo
export default function Experience() {

    //Componente que muestra un segmento de la linea de tiempo de acuerdo a los props
    const TimelineSegment = ({ title, time, content, aditional, isRecent }: TimelineSegmentProps) => (
        <li className="ms-3 lg:ms-6">
            <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                    type: "keyframes",
                    ease: 'easeInOut',
                    repeat: Infinity,
                    duration: 1.5
                }}
                className="absolute flex items-center justify-center w-4 lg:w-6 h-4 lg:h-6 bg-blue-100 -start-2 lg:-start-3 ring-8 dark:ring-cybergreen-100/30 dark:bg-cybergreen-200" />
            <div className='ml-3 mb-3 lg:mb-4'>
                <h2 className="flex items-center mb-1 text-base lg:text-2xl font-inconsolata tracking-wider font-semibold text-cybergreen-200 leading-4">{title}<span className={`${isRecent ? 'block' : 'hidden'} uppercase bg-orange-300 text-[0.7rem] lg:text-sm font-dosis tracking-widest font-bold me-2 px-2.5 py-0.5 rounded text-cyberblack ms-3`}>Reciente</span>
                </h2>
                <time className="block mb-3 lg:mb-2 text-[0.6rem] lg:text-sm tracking-widest leading-none text-cybergreen-100 lg:-translate-y-1">{time}</time>
                <p className="text-sm lg:text-lg leading-5 font-inconsolata font-normal text-cyberwhite">{content}</p>
                {aditional}
            </div>
        </li>
    )

    return (
        <ul className="relative border-s border-cybergreen-100 mt-6 w-[96%] mx-auto">
            {<>
                {/*Segmento de la linea de tiempo más actual*/}
                <TimelineSegment
                    title='Desarrollador Front-End.'
                    time='Softnergysolutions | Enero 2024 - Junio 2024'
                    content='Desarrollé interfaces con React.js, Next.js y React Native, usando CSS, Tailwind y Styled Components. Colaboré con Back-End y diseñadores para asegurar funcionalidad y coherencia visual.'
                    isRecent={true}
                />
                {/*Segmento de la linea de tiempo*/}
                <TimelineSegment
                    title='Terminación de estudios.'
                    time='Agosto 2018 - Junio 2024'
                    content='Terminé la carrera de Ingeniería en Sistemas Computacionales en el Tecnológico de Toluca.'
                    isRecent={false}
                />
            </>}
        </ul>
    )
}
