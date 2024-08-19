import { FaReact, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiCss3, SiFramer } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { ReactNode } from "react";

type RecuadroTechProps = {
    nombre: string
    icono: ReactNode
}

export default function Tecnologias() {

    const RecuadroTech = ({ nombre, icono }: RecuadroTechProps) => {
        return (
            <div className='bg-cyberblue rounded-md'>
                {icono}
                <h1>{nombre}</h1>
            </div>
        )
    }

    return (
        <div className=''>
            <RecuadroTech nombre='React' icono={<FaReact />} />
        </div>
    )
}
