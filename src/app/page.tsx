import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import ButtonSocial from "@/components/framermotion/ButtonSocial";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Tecnologias from "@/components/Tecnologias";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none scanlines z-50" />
      <main>
        <section className='blur-[0.5px] lg:blur-[0.7px] bg-cyberblack shadow-xl shadow-cyberblack flex justify-between fixed top-0 left-0 right-0 py-5 pl-5 z-30'>
          <div className='h-7 w-7 lg:h-10 lg:w-10'>
            <Link href={'/gimikode'}>
              <Image className='h-7 w-7 lg:h-10 lg:w-10' draggable='false' src={`/Logo_Gimikode.svg`} alt='Logo' width={30} height={30} priority />
            </Link>
          </div>
          <div className='flex w-[50%] justify-end items-center mr-5 space-x-1 lg:space-x-2'>
            <div className='flex relative justify-center items-center px-4 lg:px-7 hover:bg-cyberblue-100 cursor-pointer before:absolute before:h-[150%] before:w-[110%] before:hover:bg-cyberblue-100 before:blur-sm before:-z-10'>
              <a href='' className='uppercase text-cyberwhite text-xs lg:text-lg'>Inicio_</a>
            </div>
            <div className='flex relative justify-center items-center px-4 lg:px-7 hover:bg-cyberblue-100 cursor-pointer before:absolute before:h-[150%] before:w-[110%] before:hover:bg-cyberblue-100 before:blur-sm before:-z-10'>
              <a className='uppercase text-cyberwhite text-xs lg:text-lg'>Proyectos_</a>
            </div>
          </div>
        </section>
        <section className='blur-[0.5px] lg:blur-[0.7px] pb-16 pt-20'>
          <header className='mt-16 flex flex-col justify-center items-center w-full mb-14 lg:mb-20'>
            <h1 className='uppercase text-cybergreen-100 text-lg lg:text-2xl font-inconsolata font-bold tracking-widest'>JOSÉ ANTONIO</h1>
            <div className='h-[200px] w-[150px] lg:h-[300px] lg:w-[250px] opacity-60 mt-3 shadow-md shadow-cybergreen-100 relative'>
              <Image className='absolute object-cover h-[200px] w-[150px] lg:h-[300px] lg:w-[250px] rounded-sm pointer-events-none' src={'/mine/Photo2.jpg'} alt='Mi Persona' width={250} height={300} priority />
              <div className='flex absolute h-full w-full items-end justify-center p-3'>
                <p className='uppercase font-sf_pixelate font-bold tracking-widest text-cybergreen-100 text-xs lg:text-lg'>{`< Front-End >`}</p>
              </div>
            </div>
            <ButtonSocial />
          </header>
          <div className='space-y-4 lg:space-y-8'>
            <Section title='Sobre mí' content={<AboutMe />} />
            <Section title='Experiencia' content={<Experience />} />
            <Section title='Tecnologías' content={<Tecnologias />} />
            <Section title='Proyectos' content={<Projects />} />
            <Section title='Información adicional' content={<></>} />
          </div>
        </section>
      </main>
    </>
  );
}
