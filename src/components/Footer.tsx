import ReTrashLogoWhite from './ReTrashLogo-White';
import Image from 'next/image';

function Footer() {
  return (
    <section className='flex justify-center align-middle w-full bg-foreground '>
      <div className='flex justify-between p-20'>
        <div>
          <div className='pt-10'>
            <ReTrashLogoWhite />
          </div>
          <div className='flex justify-between my-10'>
            <Image
              src='/public/Facebook.svg'
              width={32}
              height={32}
              alt='Facebook icon'
              className='h-8 w-8'
            />
            <Image
              src='/public/X.svg'
              width={32}
              height={32}
              alt='X icon'
              className='h-8 w-8'
            />
            <Image
              src='/public/Instagram.svg'
              width={32}
              height={32}
              alt='Instagram icon'
              className='h-8 w-8'
            />
            <Image
              src='/public/Linkdin.svxg'
              width={32}
              height={32}
              alt='Linkdin                                                                                                                                                                                                                       icon'
              className='h-8 w-8'
            />
          </div>
        </div>
        <div className='flex flex-col mx-5 gap-y-3 '>
          <h3 className='text-xl text-white font-semibold'>Contactos</h3>
          <a href='retrash@gmail.com' className='text-foreground-200'>
            retrash@gmail.com
          </a>
          <p className='text-white font-semibold'>(54) 11 1234-5678</p>
          <p className='text-foreground-200'>Monte Grande, Buenos Aires.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
