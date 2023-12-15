import { kanit } from '@app/font';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import productImage from '@public/product-image-futuristic.png';

function HeroSection() {
  return (
    <section className='max-w-sections mx-auto flex flex-col gap-8 px-6 pb-20 pt-4 md:mt-4 md:flex-row lg:mt-8 lg:min-h-[80vh]'>
      <div className='flex w-full flex-col gap-4 sm:justify-between sm:gap-6 lg:justify-center'>
        <h1
          className={`${kanit.className} text-4xl font-semibold text-foreground sm:text-5xl`}
        >
          El futuro del reciclaje en tus manos
        </h1>
        <p className='text-foreground-600'>
          ¿Te imaginas un hogar donde el reciclaje es tan fácil como tirar la
          basura? Con nuestro Tacho de Basura Inteligente, esa visión se
          convierte en realidad.
        </p>
        <Button
          color='primary'
          size='lg'
          variant='shadow'
          className='font-bold md:w-fit'
        >
          Comprar ahora
        </Button>
      </div>
      <div className='flex w-full items-center justify-center'>
        <div className='relative aspect-square w-full lg:max-w-[350px]'>
          <Image
            src={productImage}
            alt='Imagen sobre el tacho de basura reciclable llamado ReTrash'
            className='rounded-2xl object-cover'
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
