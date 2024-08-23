'use client';

import Image from "next/image"
import { useState } from "react";
import { useGlitch, GlitchHandle } from 'react-powerglitch'

//Componte de pagina en desarrollo
export default function DefaultComponent() {

    const NAME_ = 'Gimikode'
    const LOGO_ = ['Gimikode', 'Gimi']
    const TITLE_ = ['Gimmicks in Code, Magic in Results', 'Esta página web no está disponible']

    //Estado para almacenar el un valor numérico para cambiar el logo y texto que se muestra
    const [toggleState, setToggleState] = useState(0)

    //Efecto glitch para logo
    const glitch: GlitchHandle = useGlitch({ playMode: 'always', slice: { hueRotate: false, count: 10 }, glitchTimeSpan: { start: .5, end: .7 } })

    //Cambia el estado, dependiendo el estado mostrara una variación en el logo y el texto
    const handleChangeWords = () => {
        setToggleState(toggleState === 0 ? 1 : 0)
    }

    return (
        <>
            <h1 className='uppercase text-2xl lg:text-5xl font-sf_pixelate font-bold text-cybergreen-200 tracking-widest'>{NAME_}</h1>
            <section className='flex flex-col space-y-5 h-[54rem] justify-center items-center'>
                <Image className='cursor-pointer h-[150px] w-[150px] lg:h-[300px] lg:w-[300px]' draggable='false' src={`/Logo_${LOGO_[toggleState]}.svg`} alt='Logo' width={300} height={300} ref={glitch.ref} onClick={handleChangeWords} priority />
                <h2 className='text-cybergreen-100 lg:text-xl font-w95f4 tracking-widest pointer-events-none'>{TITLE_[toggleState]}</h2>
            </section>
        </>

    )
}
