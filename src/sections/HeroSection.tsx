import { kanit } from '@app/font';
import { Button } from '@nextui-org/react';

function HeroSection() {
  return (
    <section>
      <h1 className={`text-3xl font-bold ${kanit.className} text-foreground`}>
        ReTrash
      </h1>
      <p className='text-foreground-500'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime modi,
        fuga minima optio enim labore obcaecati molestiae natus ad ipsum!
      </p>
      <Button color='primary'>Comprar ya</Button>
    </section>
  );
}

export default HeroSection;
