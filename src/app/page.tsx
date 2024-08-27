import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import ButtonSocial from "@/components/utils/ButtonSocial";
import Projects from "@/components/Projects";
import Section from "@/components/utils/Section";
import Warning from "@/components/utils/Warning";
import Image from "next/image";
import Link from "next/link";
import ScanLines from "@/components/effects/ScanLines";
import Settings from "@/components/utils/Settings";
import FlickerMain from "@/components/effects/FlickerMain";
import MoreInfo from "@/components/MoreInfo";

//Vista Principal
export default function Home() {

  return (
    <>
      <ScanLines /> {/*<== EFECTO SCAN LINE*/}
      <FlickerMain> {/*<== Etiqueta 'main' con efecto FLICKER*/}
        {/*Barra superior con navegación*/}
        <header className='blur-[0.5px] lg:blur-[0.7px] bg-cyberblack shadow-xl shadow-cyberblack flex justify-between fixed top-0 left-0 right-0 py-5 pl-5 z-30'>
          <Link href={'/gimikode'} className='h-7 w-7 lg:h-10 lg:w-10'>
            <Image className='h-7 w-7 lg:h-10 lg:w-10' draggable='false' src={`/Logo_Gimikode.svg`} alt='Logo' width={30} height={30} priority />
          </Link>
          <nav className='flex w-[50%] justify-end items-center mr-5 space-x-1 lg:space-x-2'>
            <div className='flex relative justify-center items-center px-4 lg:px-7 hover:bg-cyberblue-100 cursor-pointer before:absolute before:h-[150%] before:w-[110%] before:hover:bg-cyberblue-100 before:blur-sm before:-z-10'>
              <a href='#inicio' className='uppercase text-cyberwhite text-xs lg:text-lg'>Inicio_</a>
            </div>
            <div className='flex relative justify-center items-center px-4 lg:px-7 hover:bg-cyberblue-100 cursor-pointer before:absolute before:h-[150%] before:w-[110%] before:hover:bg-cyberblue-100 before:blur-sm before:-z-10'>
              <a href='#proyectos' className='uppercase text-cyberwhite text-xs lg:text-lg'>Proyectos_</a>
            </div>
          </nav>
        </header>
        {/*Sobrevista de mí persona más información de contacto*/}
        <section id='inicio' className='blur-[0.5px] lg:blur-[0.7px] pb-16 pt-20'>
          <header className='relative mt-16 flex flex-col justify-center items-center w-full mb-14 lg:mb-20'>
            <Settings /> {/*<-- Herramientas*/}
            <h1 className='uppercase text-cybergreen-100 text-lg lg:text-2xl font-inconsolata font-bold tracking-widest'>JOSÉ ANTONIO</h1>
            <section className='h-[200px] w-[150px] lg:h-[300px] lg:w-[250px] opacity-60 mt-3 shadow-md shadow-cybergreen-100 relative'>
              <Image className='absolute object-cover h-[200px] w-[150px] lg:h-[300px] lg:w-[250px] rounded-sm pointer-events-none' src={'/mine/Photo2.jpg'} alt='Mi Persona' width={250} height={300} priority />
              <div className='flex absolute h-full w-full items-end justify-center p-3'>
                <span className='uppercase font-sf_pixelate font-bold tracking-widest text-cybergreen-100 text-xs lg:text-lg'>{`< Front-End >`}</span>
              </div>
            </section>
            <ButtonSocial /> {/*<--Botones de contacto*/}
          </header>
          {/*Las secciones que componen mí información*/}
          <div className='space-y-4 lg:space-y-8'>
            <Section title='Sobre mí' content={<AboutMe />} /> {/*Sección que habla sobre mí*/}
            <Section title='Experiencia' content={<Experience />} /> {/*Sección que muestra mí experiencia */}
            <Section title='Proyectos' content={<Projects />} /> {/*Sección que muestra mis proyectos realizados*/}
            <Section title='Información adicional' content={<MoreInfo />} /> {/*Sección sobre información menos relevante*/}
          </div>
        </section>
        <footer className='flex items-center h-24 bg-cybergreen-300/30'>
          <p className='font-sf_pixelate text-cyberwhite uppercase text-xs lg:text-base w-[90%] lg:w-3/5 mx-auto'>© 2024 GIMIKODE. Derechos reservados sobre nombre, logotipo y eslogan.</p>
        </footer>
      </FlickerMain>
      {/*Advertencia que se muestra si no tiene permiso de acceder a un proyecto por confidencialidad*/}
      <Warning />
    </>
  );
}
