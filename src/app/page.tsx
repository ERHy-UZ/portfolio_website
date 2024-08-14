import ButtonSocial from "@/components/ButtonSocial";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none scanlines z-50" />
      <main className='blur-[0.5px] lg:blur-[0.7px]'>
        <section className='p-5'>
          <div className='h-7 w-7 lg:h-10 lg:w-10'>
            <Link href={'/gimikode'}>
              <Image className='h-7 w-7 lg:h-10 lg:w-10' draggable='false' src={`/Logo_Gimikode.svg`} alt='Logo' width={30} height={30} priority />
            </Link>
          </div>
        </section>
        <header className='mt-16 flex flex-col justify-center items-center w-full'>
          <h1 className='text-cybergreen-100 text-lg lg:text-2xl font-inconsolata font-bold tracking-widest mb-3'>JOSÉ ANTONIO</h1>
          <div className='h-[200px] w-[150px] lg:h-[300px] lg:w-[250px] opacity-60 mb-8'>
            <Image className='flex object-cover h-[200px] w-[150px] lg:h-[300px] lg:w-[250px] rounded-sm pointer-events-none' src={'/mine/Photo2.jpg'} alt='Mi Persona' width={250} height={300} priority />
          </div>
          <div className='lg:w-2/5'>
            <p className='text-center text-cyberwhite text-xs lg:text-xl font-inconsolata font-bold tracking-widest'>Soy un desarrollador front-end con una pasión por crear interfaces de usuario intuitivas y atractivas</p>
            <ButtonSocial />
          </div>
        </header>
      </main>
    </>
  );
}
