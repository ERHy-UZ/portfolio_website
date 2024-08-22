'use client'

import { IoWarning } from "react-icons/io5";
import { useEvent } from "@/hooks/useEvent";
import { useEffect } from "react";

//Componente de advertencia en caso de no poder acceder a algún proyecto
export default function Warning() {

    //LLamar al hook del context
    const { state, dispatch } = useEvent()

    //Effect que quita la advertencia al después de 2 seg
    useEffect(() => {
        if (state.warning === true) {
            setTimeout(() => {
                dispatch({ type: 'warning-off' })
            }, 2000);
        }
    }, [state.warning])

    return (
        <div className={`${!state.warning && 'hidden'} flex items-center justify-center fixed bottom-2 lg:bottom-5 left-2 lg:left-5 bg-cyberorange/85 px-4 lg:px-7 py-1 lg:py-2 rounded-se-lg gap-1 lg:gap-3 cursor-not-allowed`}>
            <p className='text-base lg:text-2xl'><IoWarning /></p>
            <h1 className='uppercase text-sm lg:text-xl font-sf_pixelate'>No tienes permiso</h1>
            <p className='text-base lg:text-2xl'><IoWarning /></p>
        </div>
    )
}
