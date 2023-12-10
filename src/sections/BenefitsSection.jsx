import Inter from '@app/font';

function BenefitsSection() {
  return (
    <section className='p-6'>
      <div className='flex justify-start items-center '>
        <div className='px-3'>
          <div className='w-10 bg-black p-px'></div>
        </div>
        <div>
          <h2 className='text-[#161616] ${inter.className} text-4xl  font-bold'>
            Beneficios
          </h2>
        </div>
      </div>
      <div className='flex justify-between  py-10'>
        <div className='flex justify-between px-6'>
          <img src='public/icon-recycle.png' alt='recycle icon' />
          <div className='px-6'>
            <h3 className='color-[#161616] ${inter.className} text-xl font-semibold py-3'>
              Reciclaje sin esfuerzo
            </h3>
            <p className='text-foreground-500'>
              ReTrash utiliza tecnología avanzada para separar automáticamente
              los residuos reciclables y no reciclables.
            </p>
          </div>
        </div>
        <div className='flex justify-between px-6'>
          <img src='public/clock-icon.png' alt='' />
          <div className='px-6'>
            <h3 className='color-[#161616] ${inter.className} text-xl font-semibold py-3'>
              Ahorro de tiempo y energía
            </h3>
            <p className='text-foreground-500'>
              Con la clasificación automática, reducirás el tiempo y el esfuerzo
              dedicado a decidir qué va a cada contenedor.
            </p>
          </div>
        </div>
        <div className='flex justify-between px-6'>
          <img src='public/suit-icon.png' alt='' />
          <div className='px-6'>
            <h3 className='color-[#161616] ${inter.className} text-xl font-semibold py-3'>
              Diseño elegante y adaptable
            </h3>
            <p className='text-foreground-500'>
              Su diseño moderno y adaptable se integra perfectamente en
              cualquier entorno hogareño, complementando tu estilo de vida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
