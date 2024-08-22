'use client'

import { useEvent } from "@/hooks/useEvent"

//Componente que muestra las scan lines en toda la vista
export default function ScanLines() {

    //Llamar a custom hook del context
    const { state } = useEvent()

    return (
        <>
            {state.scanlines &&
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none scanlines z-50" />
            }
        </>
    )
}
