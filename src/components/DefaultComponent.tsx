'use client';

import Image from "next/image"
import { useState } from "react";
import { useGlitch, GlitchHandle } from 'react-powerglitch'

export default function DefaultComponent() {

    const LOGO_ = ['Gimikode', 'Gimi']
    const TITLE_ = ['Gimmicks in Code, Magic in Results', 'Sitio aún no disponible']

    const [toggleState, setToggleState] = useState(0)
    const glitch: GlitchHandle = useGlitch({ playMode: 'always', slice: { hueRotate: false, count: 10 }, glitchTimeSpan: {start: .5, end: .7}})

    const handleChangeWords = () => {
        setToggleState(toggleState === 0 ? 1 : 0)
    }

    return (
        <section className='flex flex-col space-y-5 h-[54rem] justify-center items-center'>
            <Image className='cursor-pointer h-[150px] w-[150px] lg:h-[300px] lg:w-[300px]' src={`/Logo_${LOGO_[toggleState]}.svg`} alt='Logo' width={300} height={300} ref={glitch.ref} onClick={handleChangeWords} />
            <p className='text-cybergreen-100 lg:text-xl font-w95f4 tracking-widest pointer-events-none'>{TITLE_[toggleState]}</p>
        </section>
    )
}
