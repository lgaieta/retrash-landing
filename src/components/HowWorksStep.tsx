import { Card, CardBody } from '@nextui-org/card';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type HowWorksStepProps = {
  title: string;
  description: string;
  iconSrc: string | StaticImport;
};

function HowWorksStep(props: HowWorksStepProps) {
  return (
    <li className='z-10 flex max-w-lg flex-col items-center gap-16'>
      <div className='flex h-12 w-12 items-center justify-center rounded-full bg-foreground-800'>
        <Image src={props.iconSrc} alt={props.title + ' icon'} />
      </div>
      <Card shadow='md'>
        <CardBody className='p-8'>
          <p className='w-full pb-1 text-lg font-bold'>{props.title}</p>
          <p className='w-full text-foreground-500'>{props.description}</p>
        </CardBody>
      </Card>
    </li>
  );
}

export default HowWorksStep;
