import ReTrashLogoWhite from './ReTrashLogo-White';
import Image from 'next/image';
import facebookSrc from '@public/facebook.svg';
import xSrc from '@public/x.svg';
import instagramSrc from '@public/instagram.svg';

function Footer() {
  return (
    <section className='flex w-full flex-col items-center gap-8 bg-foreground py-10 md:flex-row md:justify-center md:gap-16'>
      <div className='flex flex-col items-center gap-6'>
        <ReTrashLogoWhite />
        <div className='flex gap-4'>
          <Image
            src={facebookSrc}
            width={32}
            height={32}
            alt='Facebook icon'
            className='h-8 w-8'
          />
          <Image
            src={xSrc}
            width={32}
            height={32}
            alt='X icon'
            className='h-8 w-8'
          />
          <Image
            src={instagramSrc}
            width={32}
            height={32}
            alt='Instagram icon'
            className='h-8 w-8'
          />
        </div>
      </div>
      <div className='flex flex-col items-center gap-6 md:items-start'>
        <h3 className='text-xl font-semibold text-white'>Contactos</h3>
        <a href='#' className='text-foreground-200'>
          retrash@gmail.com
        </a>
        <p className='font-semibold text-white'>(54) 11 1234-5678</p>
        <p className='text-foreground-200'>Monte Grande, Buenos Aires.</p>
      </div>
    </section>
  );
}

export default Footer;
