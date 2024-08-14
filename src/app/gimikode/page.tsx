import DefaultComponent from "@/components/DefaultComponent";

export default function Gimikode() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none scanlines z-50" />
            <main className='m-5 blur-[0.5px] lg:blur-[0.7px]'>
                <DefaultComponent />
            </main>
        </>
    )
}
