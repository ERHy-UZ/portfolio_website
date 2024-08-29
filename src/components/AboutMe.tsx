import { Projects } from "@/db/projects"

//Componente que muestra quien soy, experiencia y proyectos realizados
export default function AboutMe() {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6'>
            <article className='col-span-2 bg-gradient-to-b from-cyberblue-100 to-cyberblue-200 p-3 lg:p-6 rounded-sm border-t border-t-cybergreen-200'>
                <h3 className='uppercase text-cybergreen-200 font-w95f4 text-base lg:text-2xl tracking-widest mb-3 lg:mb-5'>José Antonio Trejo Moreno</h3>
                <p className='text-cyberwhite text-sm lg:text-xl font-inconsolata font-semibold lg:font-bold tracking-wide lg:tracking-widest mb-2 lg:mb-3'><span className='italic text-cybergreen-100'>Ingeniero en Sistemas Computacionales</span> de nacionalidad mexicana.</p>
                <p className='text-cyberwhite text-sm lg:text-xl font-inconsolata font-semibold lg:font-bold tracking-wide lg:tracking-widest mb-2 lg:mb-3'>Enfocado principalmente en Front-End, con conocimientos en otras áreas.</p>
            </article>
            <aside className='h-[7rem] lg:h-auto flex flex-col justify-center items-center bg-gradient-to-b from-cyberblue-200 to-cyberblue-300 rounded-sm border-t border-t-cybergreen-100 space-y-1'>
                <h3 className='text-5xl lg:text-8xl text-cyberwhite font-w95f4'>1</h3>
                <h4 className='uppercase text-xs lg:text-xl text-cybergreen-100 font-inconsolata tracking-widest font-semibold'>Experiencia</h4>
                <p className='absolute text-xs lg:text-xl font-sf_pixelate font-semibold text-cybergreen-200 uppercase translate-x-6 lg:translate-x-12 -translate-y-6 lg:-translate-y-12'>AÑO</p>
            </aside>
            <aside className='flex flex-col justify-center items-center bg-gradient-to-b from-cyberblue-200 to-cyberblue-300 rounded-sm border-t border-t-cybergreen-100 space-y-1'>
                <h3 className='text-5xl lg:text-8xl text-cyberwhite font-w95f4'>{Projects.length}</h3>
                <h4 className='uppercase text-xs lg:text-xl text-cybergreen-100 font-inconsolata tracking-widest font-semibold'>Proyectos</h4>
            </aside>
        </div>
    )
}
