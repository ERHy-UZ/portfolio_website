import { ReactNode } from "react"

//Types
type SectionProps = {
    title: string
    content: ReactNode
}

//Componente padre de las secciones, muestra solamente el titulo y renderiza el componente del contenido
export default function Section({ title, content }: SectionProps) {
    return (
        <section className='w-[90%] lg:w-3/5 mx-auto'>
            <h2 className='uppercase text-lg lg:text-3xl text-cybergreen-100 font-sf_pixelate mb-3'>{title}</h2>
            {content}
        </section>
    )
}
