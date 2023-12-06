import { kanit } from './font'

export default function Home () {
  return <main className='m-10 bg-background'>
      <h1 className={`text-3xl font-bold ${kanit.className} text-foreground`}>ReTrash</h1>
      <p className='text-foreground-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime modi, fuga minima optio enim labore obcaecati molestiae natus ad ipsum!</p>
      <button className='bg-accent text-white p-2 text-base rounded-xl'>Comprar ya</button>
    </main>
}
