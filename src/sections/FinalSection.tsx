import { Button } from '@nextui-org/button';

function FinalSection() {
  return (
    <section className='max-w-sections mx-auto flex w-full flex-col items-center gap-16 px-2 py-20 lg:py-32'>
      <div className='w-full md:w-1/2'>
        <h2 className='text-center text-3xl font-bold md:text-4xl '>
          No esperes más y unite al futuro del reciclaje
        </h2>
        <p className='my-5 text-center text-foreground-600'>
          Haz clic en &quot;Comprar ahora&quot; y descubre cómo ReTrash puede
          transformar tu hogar y contribuir al bienestar del planeta.
          ¡Simplifica, contribuye y sé parte del cambio hoy!
        </p>
        <div className='flex justify-center'>
          <Button
            color='primary'
            size='lg'
            variant='shadow'
            className='font-bold md:w-fit'
          >
            Comprar ahora
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FinalSection;
