import { kanit } from '@app/font';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import productImage from '@public/product-image-futuristic.png';

function HeroSection() {
  return (
    <section className='flex flex-col gap-8 px-6 max-w-sm mx-auto min-[500px]:max-w-md md:flex-row sm:max-w-lg md:max-w-3xl lg:max-w-5xl lg:mt-8'>
      <div className='flex flex-col sm:justify-between lg:justify-center sm:gap-6 gap-4 w-full'>
        <h1
          className={`${kanit.className} text-4xl sm:text-5xl font-semibold text-foreground`}
        >
          El futuro del reciclaje en tus manos
        </h1>
        <p className='text-foreground-600'>
          ¿Te imaginas un hogar donde el reciclaje es tan fácil como tirar la
          basura? Con nuestro Tacho de Basura Inteligente, esa visión se
          convierte en realidad.
        </p>
        <Button color='primary' size='lg' className='md:w-fit'>
          Comprar ahora
        </Button>
      </div>
      <div className='flex items-center justify-center w-full'>
        <div className='relative w-full aspect-square lg:max-w-[350px]'>
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
