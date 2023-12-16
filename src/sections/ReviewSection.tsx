import photoSrc from '@public/review-photo.png';
import Image from 'next/image';

function ReviewSection() {
  return (
    <section className='w-full bg-foreground-50'>
      <div className='max-w-sections mx-auto flex flex-col items-center gap-9 px-6 py-20 text-center lg:py-28'>
        <Image
          src={photoSrc}
          className='aspect-square w-16 rounded-full'
          alt='Foto de una clienta satisfecha de ReTrash'
        />
        <p className='max-w-3xl text-xl leading-relaxed md:text-2xl'>
          &quot;ReTrash ha transformado por completo nuestra rutina de reciclaje
          en casa. La separación automática es increíblemente eficiente, y ahora
          contribuir al medio ambiente es tan fácil como tirar la basura. ¡Muy
          recomendado!&quot;
        </p>
        <p className='text-xl font-bold'>Sophie Carter</p>
        <p className='text-foreground-600'>Desde Monte Grande, Buenos Aires</p>
      </div>
    </section>
  );
}

export default ReviewSection;
