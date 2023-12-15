import HowWorksStep from '@components/HowWorksStep';
import Image from 'next/image';
import cameraIconSrc from '@public/camera-icon.svg';
import bulbIconSrc from '@public/bulb-icon.svg';
import cogIconSrc from '@public/cog-icon.svg';

function HowWorksSection() {
  return (
    <section className='max-w-sections mx-auto flex w-full flex-col gap-16 px-6 py-20'>
      <h2 className='text-center text-3xl font-bold'>
        ¿Cómo funciona la separación automática?
      </h2>
      <ul className='relative flex flex-col items-center gap-16'>
        <div
          className='absolute h-full w-1'
          style={{
            background:
              'repeating-linear-gradient(to bottom, transparent, transparent 10px, #161616 10px, #161616 20px);',
          }}
        ></div>
        <HowWorksStep
          title='Captura de datos con sensores'
          description='Sensores avanzados recopilan datos detallados sobre cada residuo, incluyendo forma, tamaño y composición.'
          iconSrc={cameraIconSrc}
        />
        <HowWorksStep
          title='Inteligencia artificial para clasificar'
          description='La inteligencia artificial analiza los datos, clasificando de manera precisa cada elemento como reciclable o no reciclable.'
          iconSrc={bulbIconSrc}
        />
        <HowWorksStep
          title='Separación con compuertas y motores'
          description='Motores y compuertas internas se activan para separar automáticamente los residuos según corresponda.'
          iconSrc={cogIconSrc}
        />
      </ul>
    </section>
  );
}

export default HowWorksSection;
