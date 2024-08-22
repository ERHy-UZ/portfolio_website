import DefaultComponent from "@/components/DefaultComponent";
import ScanLines from "@/components/ScanLines";

//Pagina de GIMIKODE [EN DESARROLLO]
export default function Gimikode() {
    return (
        <>
            <ScanLines /> {/*<== EFECTO SCAN LINE*/}
            <main className='m-5 blur-[0.5px] lg:blur-[0.7px]'>
                {/*Componente por defecto*/}
                <DefaultComponent />
            </main>
        </>
    )
}
