'use client'

import { motion } from "motion/react";
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
                <h3 className="flex items-center mb-1 text-base lg:text-2xl font-inconsolata tracking-wider font-semibold text-cybergreen-200 leading-4">{title}<span className={`${isRecent ? 'block' : 'hidden'} uppercase bg-orange-300 text-[0.7rem] lg:text-sm font-dosis tracking-widest font-bold me-2 px-2.5 py-0.5 rounded text-cyberblack ms-3`}>Reciente</span>
                </h3>
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
                    title="Desarrollador Senior"
                    time="SitDigital | Enero 2025 – Actualidad"
                    content="Desarrollo y soporte de aplicaciones enterprise para clientes de consultoría. Trabajo en entornos productivos con despliegues controlados, CI/CD y uso de servicios en Azure."
                    aditional={
                        <p className="mt-2 text-xs lg:text-sm text-cybergreen-100">
                            Cliente principal: AB InBev · Stack: JavaScript, Python, Azure, Data Factory
                        </p>
                    }
                    isRecent={true}
                />
                <TimelineSegment
                    title="Desarrollador de Software"
                    time="IFREM | Agosto 2024 – Enero 2025"
                    content="Diseño y desarrollo de aplicaciones internas para optimizar procesos del instituto, así como automatización de tareas administrativas."
                    isRecent={false}
                />
                <TimelineSegment
                    title="Desarrollador Full Stack"
                    time="Softnergy Solutions | Mayo 2023 – Julio 2024 · Octubre 2025 – Actualidad"
                    content="Desarrollo de aplicaciones empresariales frontend y backend en proyectos de consultoría. Implementación de APIs y lógica de negocio."
                    aditional={
                        <p className="mt-2 text-xs lg:text-sm text-cybergreen-100">
                            Cliente: FEMSA · Stack: React, Next.js, Spring Boot
                        </p>
                    }
                    isRecent={false}
                />
                {/*Segmento de la linea de tiempo*/}
                <TimelineSegment
                    title="Ingeniería en Sistemas Computacionales"
                    time="Instituto Tecnológico de Toluca | Agosto 2018 – Junio 2024"
                    content="Formación en desarrollo de software, bases de datos, arquitectura de sistemas y resolución de problemas."
                    isRecent={false}
                />
            </>}
        </ul>
    )
}
