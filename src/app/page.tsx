import ButtonSocial from "@/components/ButtonSocial";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none scanlines z-50" />
      <main className='blur-[0.5px] lg:blur-[0.7px] pb-10'>
        <section className='bg-cyberblack shadow-xl shadow-cyberblack flex justify-between sticky top-0 py-5 pl-5 z-40'>
          <div className='h-7 w-7 lg:h-10 lg:w-10'>
            <Link href={'/gimikode'}>
              <Image className='h-7 w-7 lg:h-10 lg:w-10' draggable='false' src={`/Logo_Gimikode.svg`} alt='Logo' width={30} height={30} priority />
            </Link>
          </div>
          <div className='flex w-[50%] justify-end items-center mr-5 space-x-1 lg:space-x-2'>
            <div className='flex justify-center items-center px-4 lg:px-7 hover:bg-cyberblue cursor-pointer'>
              <a className='uppercase text-cyberwhite text-xs lg:text-lg'>Inicio_</a>
            </div>
            <div className='flex justify-center items-center px-4 lg:px-7 hover:bg-cyberblue cursor-pointer'>
              <a className='uppercase text-cyberwhite text-xs lg:text-lg'>Proyectos_</a>
            </div>
          </div>
        </section>
        <header className='mt-16 flex flex-col justify-center items-center w-full'>
          <h1 className='uppercase text-cybergreen-100 text-lg lg:text-2xl font-inconsolata font-bold tracking-widest'>JOSÉ ANTONIO</h1>
          <div className='h-[200px] w-[150px] lg:h-[300px] lg:w-[250px] opacity-60 mt-3 shadow-md shadow-cybergreen-100 relative'>
            <Image className='absolute object-cover h-[200px] w-[150px] lg:h-[300px] lg:w-[250px] rounded-sm pointer-events-none' src={'/mine/Photo2.jpg'} alt='Mi Persona' width={250} height={300} priority />
            <div className='flex absolute h-full w-full items-end justify-center p-3'>
              <p className='uppercase font-sf_pixelate font-bold tracking-widest text-cybergreen-100 text-xs lg:text-lg'>{`< Front-End >`}</p>
            </div>
          </div>
          <ButtonSocial />
        </header>
        <section className='w-[90%] lg:w-3/5 mx-auto mt-14 lg:mt-20'>
          <h2 className='uppercase text-lg lg:text-3xl text-cybergreen-100 font-sf_pixelate'>sobre mí</h2>
          <div className='flex justify-between'>
            <div className='bg-cyberblue mt-3 w-[49%] p-3'>
              <p className='text-justify text-cyberwhite text-xs lg:text-xl font-inconsolata font-bold tracking-widest'>Soy un desarrollador front-end con una pasión por crear interfaces de usuario intuitivas y atractivas</p>
            </div>
            <div className='bg-cyberblue mt-3 w-[49%] p-3'>

            </div>
          </div>
        </section><section className='w-[90%] lg:w-3/5 mx-auto mt-14 lg:mt-20'>
          <h2 className='uppercase text-lg lg:text-3xl text-cybergreen-100 font-sf_pixelate'>tecnologías</h2>
          <div className='flex justify-between'>
            <div className='bg-cyberblue mt-3 w-[49%] p-3'>

            </div>
            <div className='bg-cyberblue mt-3 w-[49%] p-3'>
              <p className='text-justify text-cyberwhite text-xs lg:text-xl font-inconsolata font-bold tracking-widest'>Soy un desarrollador front-end con una pasión por crear interfaces de usuario intuitivas y atractivas</p>
            </div>
          </div>
        </section><section className='w-[90%] lg:w-3/5 mx-auto mt-14 lg:mt-20'>
          <h2 className='uppercase text-lg lg:text-3xl text-cybergreen-100 font-sf_pixelate'>proyectos</h2>
          <div className='flex justify-between'>
            <div className='bg-cyberblue mt-3 w-[49%] p-3'>
              <p className='text-justify text-cyberwhite text-xs lg:text-xl font-inconsolata font-bold tracking-widest'>Soy un desarrollador front-end con una pasión por crear interfaces de usuario intuitivas y atractivas</p>
            </div>
            <div className='bg-cyberblue mt-3 w-[49%] p-3'>

            </div>
          </div>
        </section><section className='w-[90%] lg:w-3/5 mx-auto mt-14 lg:mt-20'>
          <h2 className='uppercase text-lg lg:text-3xl text-cybergreen-100 font-sf_pixelate'>información adicional</h2>
          <div className='flex justify-between'>
            <div className='bg-cyberblue mt-3 w-[49%] p-3'>

            </div>
            <div className='bg-cyberblue mt-3 w-[49%] p-3'>
              <p className='text-justify text-cyberwhite text-xs lg:text-xl font-inconsolata font-bold tracking-widest'>Soy un desarrollador front-end con una pasión por crear interfaces de usuario intuitivas y atractivas</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
