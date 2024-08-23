import ScanLines from "@/components/effects/ScanLines";
import SingleProject from "@/components/utils/SingleProject";
import { Projects } from "@/db/projects";

export default function My_Projects() {
    return (
        <>
            <ScanLines /> {/*<== EFECTO SCAN LINE*/}
            <main className='flex flex-col justify-center items-center m-5 blur-[0.5px] lg:blur-[0.7px]'>
                <h1 className='bg-cybergreen-300 px-16 md:px-25 py-5 md:py-7 uppercase text-xl md:text-2xl lg:text-3xl text-cyberwhite font-sf_pixelate rounded-sm border-2 border-cybergreen-100'>Mis proyectos</h1>
                <section className='w-[90%] mt-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5'>
                    {Projects.map((project, index) => (
                        <SingleProject
                            key={index}
                            image={project.image}
                            title={project.title}
                            descripciones={project.descripciones}
                            techs={project.techs}
                            link={project.link}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}
