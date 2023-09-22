import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Beach from './../public/images/beach.jpg'
import Cave from './../public/images/cave.jpg'
import Dunes from './../public/images/dunes.jpg'
import Egypt from './../public/images/egypt.jpg'
import Falls from './../public/images/falls.jpg'
import Water from './../public/images/water.jpg'
import Gorge from './../public/images/gorge.jpg'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Carousel from '@/components/carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full'>
    <Head>
      <title>GSTDM Travel Page</title>
    </Head>
    <Navbar/>
    <Carousel/>

    <div className='mx-auto'>
    <br/>
      <h1 className='mx-auto text-center pb-2 font-semibold text-2xl text-gray-600'>
        OUR DESTINATIONS
      </h1>
      <hr className='w-12 h-1 mx-auto bg-gray-600 border-0 rounded'/>
      <br/>
      <div className='grid grid-cols-2 gap-2 w-2/3 m-auto'>
      <div className='row-span-2'>
      <p className='absolute z-10 p-20 text-black'>Visit Latin America</p>
      <Image
        src = {Falls}
        alt = "beach picture"
        width = {400}
        height = {400}
        className='rounded'
      />
      </div>
      <div>
      <p className='absolute z-10 p-20 text-white'>Visit Asia</p>
      <Image
        src = {Cave}
        alt = "beach picture"
        width = {400}
        height = {400}
        className='rounded'
      />
      </div>
      <div className='row-span-2'>
      <p className='absolute z-10 p-20 text-white'>Visit Oceania</p>
      <Image
        src = {Water}
        alt = "beach picture"
        width = {400}
        height = {400}
        className='rounded'
      />
      </div>
      <div>
      <p className='absolute z-10 p-20 text-white'>Visit Africa</p>
      <Image
        src = {Egypt}
        alt = "beach picture"
        width = {400}
        height = {400}
        className='rounded'
      />
      </div>
      <div>
      <p className='absolute z-10 p-20 text-white'>Visit Europe</p>
      <Image
        src = {Beach}
        alt = "beach picture"
        width = {400}
        height = {400}
        className='rounded'
      />
      </div>
      <div>
      <p className='absolute z-10 p-20 text-white'>Visit Near & Middle East</p>
      <Image
        src = {Dunes}
        alt = "beach picture"
        width = {400}
        height = {400}
        className='rounded'
      />
      </div>
      </div>
      <br/>
      <div className='justify-center w-1/5 mx-auto items-center border border-solid border-gray-600'>
      <button className='w-full py-3 text-gray-600'>SEE ALL DESTINATIONS</button>
      </div>
      <br/>

      <h1 className='mx-auto text-center pb-2 font-semibold text-2xl text-gray-600 pt-10'>LEARN MORE</h1>
      <hr className='w-12 h-1 mx-auto bg-gray-600 border-0 rounded'/>
      <br/>
      <div className='w-1/2 mx-auto'>
      <Image
        src = {Gorge}
        alt = "beach picture"
        width = {700}
        height = {700}
      />
      </div>
      <div className='w-1/3 mx-auto justify-end'>
      <div className='absolute bg-white p-10 rounded -mt-20'>
        <h3 className='font-semibold'>RELAXATION AND RELAXATION</h3>
        <p>Want to escape for a few days?</p>
        <p>See more</p>
      </div>
      </div>
      <br/>
      <br/>
      <br/>

      <div className='justify-center w-1/5 mx-auto items-center border border-solid border-gray-600 mt-10'>
      <button className='w-full py-3 text-gray-600'>ALL DESIRES</button>
      </div>
      <br/>

      <div className='w-full text-right pr-5 py-5 mr-10'>
      <button className='w-1/7 bg-gray-600 px-5 py-1 rounded-md text-white'>Contact Us</button>
      </div>
    </div>
    <Footer/>

    </div>
  )
}
