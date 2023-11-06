import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import Beach from './../public/images/beach.jpg'
import Cave from './../public/images/cave.jpg'
import Dunes from './../public/images/dunes.jpg'
import Egypt from './../public/images/egypt.jpg'
import Falls from './../public/images/falls.jpg'
import Water from './../public/images/water.jpg'
import Gorge from './../public/images/gorge.jpg'
import Carousel from '@/components/carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full'>
    <Head>
      <title>GSTDM Travel Page</title>
    </Head>
    <Carousel phrase="WELCOME" line="TO YOUR BEST VACATION"/>

    <div className='mx-auto'>
    <br/>
      <h1 className='mx-auto text-center pb-2 font-semibold text-2xl text-gray-600'>
        OUR DESTINATIONS
      </h1>
      <hr className='w-12 h-1 mx-auto bg-gray-600 border-0 rounded'/>
      <br/>
      <div className='grid grid-cols-1 gap-y-3 gap-x-3 w-2/3 m-auto md:grid-cols-2'>
      <div className='relative row-span-2 aspect-[3/4]'>
      <Link href='/destinations/latin-america'>
      <div className='absolute z-20 text-white top-1/3 left-1/2 -translate-x-2/4 -translate-y-1/3'>
      <div className='relative flex items-center justify-center'>
      <div className='w-10 border-t border-white'></div>
      <span className='text-center text-2xl mx-2'>VISIT</span>
      <div className='w-10 border-t border-white'></div>
      </div>
      <p className='text-center text-3xl'>LATIN AMERICA</p>
      </div>
      <div className='z-10 absolute bg-black/30 w-full h-full rounded'></div>
      <Image
        src = {Falls}
        alt = "beach picture"
        fill={true}
        className='rounded z-0'
      />
      </Link>
      </div>
      <div className='relative aspect-square'>
      <Link href='/destinations/asia'>
      <div className='absolute z-20 text-white top-1/3 left-1/2 -translate-x-2/4 -translate-y-1/3'>
      <div className='relative flex items-center justify-center'>
      <div className='w-10 border-t border-white'></div>
      <span className='text-center text-2xl mx-2'>VISIT</span>
      <div className='w-10 border-t border-white'></div>
      </div>
      <p className='text-center text-3xl'>ASIA</p>
      </div>
      <div className='z-10 absolute bg-black/30 w-full h-full rounded'></div>
      <Image
        src = {Cave}
        alt = "beach picture"
        fill={true}
        className='rounded'
      />
      </Link>
      </div>
      <div className='row-span-2 relative aspect-[3/4]'>
      <Link href='/destinations/oceania'>
      <div className='absolute z-20 text-white top-1/3 left-1/2 -translate-x-2/4 -translate-y-1/3'>
      <div className='relative flex items-center justify-center'>
      <div className='w-10 border-t border-white'></div>
      <span className='text-center text-2xl mx-2'>VISIT</span>
      <div className='w-10 border-t border-white'></div>
      </div>
      <p className='text-center text-3xl'>OCEANIA</p>
      </div>
      <div className='z-10 absolute bg-black/30 w-full h-full rounded'></div>
      <Image
        src = {Water}
        alt = "beach picture"
        fill={true}
        className='rounded'
      />
      </Link>
      </div>
      <div className='relative aspect-square'>
      <Link href='/destinations/africa'>
      <div className='absolute z-20 text-white top-1/3 left-1/2 -translate-x-2/4 -translate-y-1/3'>
      <div className='relative flex items-center justify-center'>
      <div className='w-10 border-t border-white'></div>
      <span className='text-center text-2xl mx-2'>VISIT</span>
      <div className='w-10 border-t border-white'></div>
      </div>
      <p className='text-center text-3xl'>AFRICA</p>
      </div>
      <div className='z-10 absolute bg-black/30 w-full h-full rounded'></div>
      <Image
        src = {Egypt}
        alt = "beach picture"
        fill={true}
        className='rounded'
      />
      </Link>
      </div>
      <div className='relative aspect-video'>
      <Link href='/destinations/europe'>
      <div className='absolute z-20 text-white top-1/3 left-1/2 -translate-x-2/4 -translate-y-1/3'>
      <div className='relative flex items-center justify-center'>
      <div className='w-10 border-t border-white'></div>
      <span className='text-center text-2xl mx-2'>VISIT</span>
      <div className='w-10 border-t border-white'></div>
      </div>
      <p className='text-center text-3xl'>EUROPE</p>
      </div>
      <div className='z-10 absolute bg-black/30 w-full h-full rounded'></div>
      <Image
        src = {Beach}
        alt = "beach picture"
        fill={true}
        className='rounded'
      />
      </Link>
      </div>
      <div className='relative aspect-video'>
      <Link href='/destinations/middle-east'>
      <div className='absolute z-20 text-white top-1/3 left-1/2 -translate-x-2/4 -translate-y-1/3'>
      <div className='relative flex items-center justify-center'>
      <div className='w-10 border-t border-white'></div>
      <span className='text-center text-2xl mx-2'>VISIT</span>
      <div className='w-10 border-t border-white'></div>
      </div>
      <p className='text-center text-3xl'>MIDDLE EAST</p>
      </div>
      <div className='z-10 absolute bg-black/30 w-full h-full rounded'></div>
      <Image
        src = {Dunes}
        alt = "beach picture"
        fill={true}
        className='rounded'
      />
      </Link>
      </div>
      </div>
      <br/>
      <div className='justify-center md:w-1/5 w-1/2 mx-auto items-center border border-solid border-gray-600'>
      <Link href='/destinations'>
      <button className='w-full py-3 text-gray-600 hover:bg-gray-600 hover:text-white'>SEE ALL DESTINATIONS</button>
      </Link>
      </div>
      <br/>

      <h1 className='mx-auto text-center pb-2 font-semibold text-2xl text-gray-600 pt-10'>LEARN MORE</h1>
      <hr className='w-12 h-1 mx-auto bg-gray-600 border-0 rounded'/>
      <br/>
      <div className='w-3/4 mx-auto justify-items-center'>
      <Image
        src = {Gorge}
        alt = "beach picture"
        width = {1000}
        height = {700}
        className='rounded'
      />
      </div>
      <div className='mx-auto justify-end relative'>
      <div className='absolute bg-white md:p-10 p-5 rounded -mt-20 opacity-[.85] left-[20%] right-[20%]'>
        <h3 className='font-semibold'>RELAXATION AND RELAXATION</h3>
        <p>Want to escape for a few days?</p>
        <p>See more</p>
      </div>
      </div>
      <br/>
      <br/>
      <br/>

      <div className='justify-center md:w-1/5 w-1/2 mx-auto items-center border border-solid border-gray-600 mt-10'>
        <Link href='/desires'>
          <button className='w-full py-3 text-gray-600 hover:bg-gray-600 hover:text-white'>ALL DESIRES</button>
        </Link>
      </div>
      <br/>
    </div>

    </div>
  )
}
