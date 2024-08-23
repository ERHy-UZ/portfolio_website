'use client'

import { SiRetroarch } from "react-icons/si";
import { MdVideogameAssetOff } from "react-icons/md";
import { useEvent } from "@/hooks/useEvent";
import { motion } from "framer-motion";

//Componente que contiene las configuraciones
export default function Settings() {

    //Llamar a custom hook del context
    const { state, dispatch } = useEvent()

    const handleToggle = () => state.scanlines ? dispatch({ type: 'scanlines-off' }) : dispatch({ type: 'scanlines-on' })

    return (
        <menu className='absolute flex h-14 lg:h-28 flex-col -top-12 lg:-top-8 left-5 lg:left-4 py-1 lg:py-2 px-0 lg:px-1 bg-neutral-800 rounded-md border border-cybergreen-100 shadow-inner shadow-cyberblack'>
            <li className='relative flex justify-center items-center group'>
                <motion.button
                    onClick={handleToggle}
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 1 }}
                    className='cursor-pointer p-1 flex'>
                    <h1 className='text-base lg:text-3xl text-cybergreen-200'>{state.scanlines ? <SiRetroarch /> : <MdVideogameAssetOff />}</h1>
                </motion.button>
                <span className='hidden group-hover:flex absolute bg-cyberwhite rounded-e-lg rounded-t-xl bottom-3 lg:bottom-4 left-6 lg:left-10 px-2 pb-1'>
                    <p className='uppercase font-sf_pixelate text-xs lg:text-xl lg:font-bold tracking-wide'>scanlines</p>
                </span>
            </li>
        </menu>
    )
}
