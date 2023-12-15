import Image from 'next/image';

function BenefitsSection() {
  return (
    <section className='w-full bg-foreground-50'>
      <div className='max-w-sections mx-auto flex flex-col gap-12 px-6 py-20 lg:py-32'>
        <div className='flex items-center justify-center gap-4'>
          <h2 className='text-center text-3xl font-bold text-foreground md:text-4xl'>
            Beneficios
          </h2>
        </div>
        <div className='flex flex-col justify-between pt-6 md:flex-row'>
          <div className='my-3 flex w-full justify-between px-0'>
            <Image
              src='/recycle-icon.png'
              width={32}
              height={32}
              alt='Recycle icon'
              className='h-8 w-8'
            />
            <div className='px-4'>
              <h3 className='pb-3 text-lg font-semibold'>
                Reciclaje sin esfuerzo
              </h3>
              <p className='text-foreground-600'>
                ReTrash utiliza tecnología avanzada para separar automáticamente
                los residuos reciclables y no reciclables.
              </p>
            </div>
          </div>
          <div className='my-3 flex w-full justify-between px-0'>
            <Image
              src='/clock-icon.png'
              width={32}
              height={32}
              alt='Recycle icon'
              className='h-8 w-8'
            />
            <div className='px-4'>
              <h3 className='pb-3 text-lg font-semibold'>
                Ahorro de tiempo y energía
              </h3>
              <p className='text-foreground-600'>
                Con la clasificación automática, reducirás el tiempo y el
                esfuerzo dedicado a decidir qué va a cada contenedor.
              </p>
            </div>
          </div>
          <div className='my-3 flex w-full justify-between px-0'>
            <Image
              src='/suit-icon.png'
              width={32}
              height={32}
              alt='Recycle icon'
              className='h-8 w-8'
            />
            <div className='px-4'>
              <h3 className='pb-3 text-lg font-semibold'>
                Diseño elegante y adaptable
              </h3>
              <p className='text-foreground-600'>
                Su diseño moderno y adaptable se integra perfectamente en
                cualquier entorno hogareño, complementando tu estilo de vida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
