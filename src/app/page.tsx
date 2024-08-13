'use client';

import Image from "next/image"
import { useGlitch, GlitchHandle } from 'react-powerglitch'

export default function Home() {

  const NAME_ = 'Gimikode'
  const LOGO_ = 'Gimikode'

  const glitch: GlitchHandle = useGlitch({ playMode: 'manual', slice: { hueRotate: false }, glitchTimeSpan: false })

  return (
    <main className='w-screen h-screen overflow-auto'>
      <header className='bg-cyberblack p-5 w-full z-30'>
        <p className='uppercase text-5xl font-sf_pixelate font-bold text-cybergreen-200 tracking-widest'>{NAME_}</p>
      </header>
      <section className='flex h-[53rem] justify-center items-center'>
        <Image className='cursor-pointer' src={`/Logo_${LOGO_}.svg`} alt='Logo' width={300} height={300} ref={glitch.ref} onMouseEnter={glitch.startGlitch} onMouseLeave={glitch.stopGlitch} />
      </section>
    </main>
  );
}
