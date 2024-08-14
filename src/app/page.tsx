import DefaultComponent from "@/components/DefaultComponent";

export default function Home() {

  const NAME_ = 'Gimikode'

  return (
    <>
      <div className="scanlines z-50"/>
      <main className='opacity-60 blur-[0.8px]'>
        <header className='p-5 w-full'>
          <p className='uppercase text-5xl font-sf_pixelate font-bold text-cybergreen-200 tracking-widest'>{NAME_}</p>
          <DefaultComponent/>
        </header>
      </main>
    </>
  );
}
