import ScanLines from "@/components/effects/ScanLines";

export default function My_Projects() {
    return (
        <>
            <ScanLines /> {/*<== EFECTO SCAN LINE*/}
            <main className='flex justify-center items-center h-[55rem] m-5 blur-[0.5px] lg:blur-[0.7px]'>
                <h1 className='bg-cybergreen-300 px-16 md:px-40 py-5 md:py-10 uppercase text-xl md:text-3xl lg:text-4xl text-cyberwhite font-sf_pixelate rounded-sm border-2 border-cybergreen-100'>Mis proyectos</h1>
            </main>
        </>
    )
}
