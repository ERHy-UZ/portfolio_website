import { IoWarning } from "react-icons/io5";

//Componente de advertencia en caso de no poder acceder a algún proyecto
export default function Warning() {
    return (
        <aside className='flex items-center justify-center fixed bottom-2 lg:bottom-5 left-2 lg:left-5 bg-cyberorange/85 px-4 lg:px-7 py-1 lg:py-2 rounded-se-lg gap-1 lg:gap-3'>
            <p className='text-base lg:text-2xl'><IoWarning /></p>
            <h1 className='uppercase text-sm lg:text-xl font-sf_pixelate'>No tienes permiso</h1>
            <p className='text-base lg:text-2xl'><IoWarning /></p>
        </aside>
    )
}
