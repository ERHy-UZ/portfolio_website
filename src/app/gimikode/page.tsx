import DefaultComponent from "@/components/utils/DefaultComponent";
import ScanLines from "@/components/effects/ScanLines";
import FlickerMain from "@/components/effects/FlickerMain";

//Pagina de GIMIKODE [EN DESARROLLO]
export default function Gimikode() {
    return (
        <>
            <ScanLines /> {/*<== EFECTO SCAN LINE*/}
            <FlickerMain classes='m-5 blur-[0.5px] lg:blur-[0.7px]'> {/*<== Etiqueta 'main' con efecto FLICKER*/}
                {/*Componente por defecto*/}
                <DefaultComponent />
            </FlickerMain>
        </>
    )
}
