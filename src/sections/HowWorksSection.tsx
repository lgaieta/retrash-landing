import HowWorksStep from '@components/HowWorksStep';
import Image from 'next/image';

function HowWorksSection() {
  return (
    <section className='max-w-sections mx-auto w-full px-6'>
      <div className='flex flex-col gap-8'>
        <h2 className='text-2xl font-bold'>
          ¿Cómo funciona la separación automática?
        </h2>
        <ul className='flex flex-col gap-8'>
          <HowWorksStep
            title='Captura de datos con sensores'
            description='Sensores avanzados recopilan datos detallados sobre cada residuo, incluyendo forma, tamaño y composición.'
            iconSrc=''
          />
          <HowWorksStep
            title='Inteligencia artificial para clasificar'
            description='La inteligencia artificial analiza los datos, clasificando de manera precisa cada elemento como reciclable o no reciclable.'
            iconSrc=''
          />
          <HowWorksStep
            title='Separación con compuertas y motores'
            description='Motores y compuertas internas se activan para separar automáticamente los residuos según corresponda.'
            iconSrc=''
          />
        </ul>
      </div>
      <Image
        src=''
        alt='Imagen de ReTrash en una casa'
        className='rounded-2xl object-cover'
        fill
        priority
      />
    </section>
  );
}

export default HowWorksSection;
