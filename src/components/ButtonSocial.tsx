'use client'

import { ReactNode } from "react"
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from "react-icons/fa";

type ButtonProps = {
    nombre: string
    icon: ReactNode
    colorI: string
    link: string
}

export default function ButtonSocial() {

    const Button = ({ nombre, icon, colorI, link }: ButtonProps) => (
        <motion.a 
            whileHover={{scale: 1.04}}
            whileTap={{scale: 0.93}}
            href={link} className={`flex justify-evenly items-center w-[100px] h-9 lg:w-[150px] lg:h-12 ${colorI} hover:${colorI} text-white rounded-sm`}>
            {icon}
            <p className='font-sf_pixelate text-xs lg:text-xl tracking-wide'>{nombre}</p>
        </motion.a>
    )

    return (
        <div className='flex justify-center space-x-7 mt-12'>
            <Button
                nombre='LinkedIn'
                icon={<FaLinkedin size={20} />}
                colorI='bg-blue-600'
                link='https://www.linkedin.com/in/antonio-trejo-moreno/'
            />
            <Button
                nombre='Github'
                icon={<FaGithub size={20} />}
                colorI='bg-purple-600'
                link='https://github.com/ERHy-UZ'
            />
        </div>

    )
}
