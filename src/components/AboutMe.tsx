
export default function AboutMe() {
    return (
        <div className='flex justify-between'>
            <div className='bg-gradient-to-b from-cyberblue-100 to-cyberblue-200 w-[48.6%] p-6 rounded-sm border-t border-t-cybergreen-200'>
                <h1 className='uppercase text-cybergreen-200 font-w95f4 text-2xl tracking-widest mb-5'>José Antonio Trejo Moreno</h1>
                <p className='text-cyberwhite text-xs lg:text-xl font-inconsolata font-bold tracking-widest mb-3'>Desarrollador front-end con una pasión por crear interfaces de usuario intuitivas y atractivas.</p>
                <p className='text-cyberwhite text-xs lg:text-xl font-inconsolata font-bold tracking-widest'>Mi objetivo es transformar ideas en productos digitales de alta calidad.</p>
            </div>
            <div className='flex justify-between w-[48.6%]'>
                <div className='flex flex-col justify-center items-center w-[48%] bg-gradient-to-b from-cyberblue-200 to-cyberblue-300 rounded-sm border-t border-t-cybergreen-100 space-y-1'>
                    <h1 className='text-8xl text-cyberwhite font-w95f4'>1</h1>
                    <h2 className='uppercase text-xl text-cybergreen-100 font-inconsolata tracking-widest font-semibold'>Experiencia</h2>
                    <p className='absolute text-xl font-sf_pixelate font-semibold text-cybergreen-200 uppercase translate-x-12 -translate-y-12'>AÑO</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[48%] bg-gradient-to-b from-cyberblue-200 to-cyberblue-300 rounded-sm border-t border-t-cybergreen-100 space-y-1'>
                    <h1 className='text-8xl text-cyberwhite font-w95f4'>6</h1>
                    <h2 className='uppercase text-xl text-cybergreen-100 font-inconsolata tracking-widest font-semibold'>Proyectos</h2>
                </div>
            </div>
        </div>
    )
}
