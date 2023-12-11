type HowWorksStepProps = {
  title: string;
  description: string;
  iconSrc: string;
};

function HowWorksStep(props: HowWorksStepProps) {
  return (
    <li className='flex flex-col'>
      <div className='mb-4 h-10 w-10 rounded-full bg-foreground'></div>
      <p className='w-full pb-1 text-lg font-bold'>{props.title}</p>
      <p className='w-full text-foreground-500'>{props.description}</p>
    </li>
  );
}

export default HowWorksStep;
