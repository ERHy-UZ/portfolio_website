'use client'

import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { CgFramer } from "react-icons/cg";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

type RecuadroTechProps = {
    icono: ReactNode
    color: string
    pos: string
}

export default function Tecnologias() {
    const constraintsRef = useRef(null)

    const RecuadroTech = ({ icono, color, pos }: RecuadroTechProps) => {

        const [isGrabbing, setGrab] = useState(false)

        const handleGrab = () => {
            setGrab(true)
        }

        const handleRelease = () => {
            setGrab(false)
        }

        return (
            <motion.section
                onDrag={handleGrab}
                onDragEnd={handleRelease}
                drag
                dragConstraints={constraintsRef}
                className={`flex justify-center items-center ${pos}  ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}>
                <h2 className={`text-4xl lg:text-7xl ${color}`}>{icono}</h2>
            </motion.section>
        )
    }

    return (
        <section
            ref={constraintsRef}
            className='z-10 w-full mx-auto bg-gradient-to-b from-cyberblue-200 via-cyberblue-300 border-t-2 border-cyan-900 overflow-hidden'>
            <div className='grid grid-cols-6 gap-y-3 lg:gap-y-5 gap-x-2 lg:gap-x-4 w-[80%] lg:w-[50%] mx-auto py-5 lg:py-10'>
                <RecuadroTech icono={<FaHtml5 />} color='text-orange-500' pos='col-start-2' />
                <RecuadroTech icono={<FaCss3Alt />} color='text-blue-700' pos='col-start-5' />
                <RecuadroTech icono={<RiReactjsFill />} color='text-cyan-500' pos='col-start-6' />
                <RecuadroTech icono={<RiNextjsFill />} color='text-white' pos='col-start-1' />
                <RecuadroTech icono={<RiTailwindCssFill />} color='text-cyan-400' pos='col-start-3' />
                <RecuadroTech icono={<BiLogoJavascript />} color='text-yellow-500' pos='col-start-4' />
                <RecuadroTech icono={<BiLogoTypescript />} color='text-sky-500' pos='col-start-6' />
                <RecuadroTech icono={<CgFramer />} color='text-purple-600' pos='col-start-3' />
            </div>
        </section>
    )
}
