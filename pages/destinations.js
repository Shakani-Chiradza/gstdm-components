import Image from 'next/image'
import Carousel from '@/components/carousel'
import Continents from '@/components/continents'
import Pyramid from './../public/images/pyramid.jpg'
import Polynesia from './../public/images/polynesia.jpg'
import Tropical from './../public/images/tropical.jpg'
import LogoNoBG from './../public/images/logo-nobg.png'
import Link from 'next/link'


export default function Destinations(){
    return(
        <div>
        <Carousel/>
        <Continents/>

        <div className='py-10 text-gray-600'>
        <div className='grid md:grid-cols-2 grid-cols-1'>
            <Image
                src = {Pyramid}
                alt = "pyramid"
                width = {500}
                height = {500}
                className='mx-auto px-5'
            />

            <div className='md:px-0 px-5'>
                <h2 className='text-2xl pb-3'>EGYPT</h2>
                <p className='pb-3 md:w-3/4'>Egypt is a beautiful place in Northern Africa. Known for its beautiful pyramids, it is sure to captivate you with the sophistication of ancient technology meeting modern technology.</p>
                <div className='grid grid-cols-3 pb-5'>
                    <div>
                        <p className='text-xl'>CAPITAL</p>
                        <p>Gaborone</p>
                    </div>
                    <div>
                        <p className='text-xl'>TIMEZONE</p>
                        <p>GMT+2</p>
                    </div>
                    <div>
                        <p className='text-xl'>VISA</p>
                        <p>Necessary</p>
                    </div>
                </div>
                <p className='text-xl'>See More</p>
                <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
            </div>
            <br/>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1'>
            <Image
                src = {Pyramid}
                alt = "pyramid"
                width = {500}
                height = {500}
                className='mx-auto px-5'
            />

            <div className='md:px-0 px-5'>
                <h2 className='text-2xl pb-3'>EGYPT</h2>
                <p className='pb-3 md:w-3/4'>Egypt is a beautiful place in Northern Africa. Known for its beautiful pyramids, it is sure to captivate you with the sophistication of ancient technology meeting modern technology.</p>
                <div className='grid grid-cols-3 pb-5'>
                    <div>
                        <p className='text-xl'>CAPITAL</p>
                        <p>Gaborone</p>
                    </div>
                    <div>
                        <p className='text-xl'>TIMEZONE</p>
                        <p>GMT+2</p>
                    </div>
                    <div>
                        <p className='text-xl'>VISA</p>
                        <p>Necessary</p>
                    </div>
                </div>
                <p className='text-xl'>See More</p>
                <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
            </div>
            <br/>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1'>
            <Image
                src = {Pyramid}
                alt = "pyramid"
                width = {500}
                height = {500}
                className='mx-auto px-5'
            />

            <div className='md:px-0 px-5'>
                <h2 className='text-2xl pb-3'>EGYPT</h2>
                <p className='pb-3 md:w-3/4'>Egypt is a beautiful place in Northern Africa. Known for its beautiful pyramids, it is sure to captivate you with the sophistication of ancient technology meeting modern technology.</p>
                <div className='grid grid-cols-3 pb-5'>
                    <div>
                        <p className='text-xl'>CAPITAL</p>
                        <p>Gaborone</p>
                    </div>
                    <div>
                        <p className='text-xl'>TIMEZONE</p>
                        <p>GMT+2</p>
                    </div>
                    <div>
                        <p className='text-xl'>VISA</p>
                        <p>Necessary</p>
                    </div>
                </div>
                <p className='text-xl'>See More</p>
                <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
            </div>
            <br/>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1'>
            <Image
                src = {Pyramid}
                alt = "pyramid"
                width = {500}
                height = {500}
                className='mx-auto px-5'
            />

            <div className='md:px-0 px-5'>
                <h2 className='text-2xl pb-3'>EGYPT</h2>
                <p className='pb-3 md:w-3/4'>Egypt is a beautiful place in Northern Africa. Known for its beautiful pyramids, it is sure to captivate you with the sophistication of ancient technology meeting modern technology.</p>
                <div className='grid grid-cols-3 pb-5'>
                    <div>
                        <p className='text-xl'>CAPITAL</p>
                        <p>Gaborone</p>
                    </div>
                    <div>
                        <p className='text-xl'>TIMEZONE</p>
                        <p>GMT+2</p>
                    </div>
                    <div>
                        <p className='text-xl'>VISA</p>
                        <p>Necessary</p>
                    </div>
                </div>
                <p className='text-xl'>See More</p>
                <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
            </div>
            <br/>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1'>
            <Image
                src = {Pyramid}
                alt = "pyramid"
                width = {500}
                height = {500}
                className='mx-auto px-5'
            />

            <div className='md:px-0 px-5'>
                <h2 className='text-2xl pb-3'>EGYPT</h2>
                <p className='pb-3 md:w-3/4'>Egypt is a beautiful place in Northern Africa. Known for its beautiful pyramids, it is sure to captivate you with the sophistication of ancient technology meeting modern technology.</p>
                <div className='grid grid-cols-3 pb-5'>
                    <div>
                        <p className='text-xl'>CAPITAL</p>
                        <p>Gaborone</p>
                    </div>
                    <div>
                        <p className='text-xl'>TIMEZONE</p>
                        <p>GMT+2</p>
                    </div>
                    <div>
                        <p className='text-xl'>VISA</p>
                        <p>Necessary</p>
                    </div>
                </div>
                <p className='text-xl'>See More</p>
                <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
            </div>
            <br/>
        </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 mb-5'>
            <div className='relative aspect-video'>
            <Link href="/hotelslodges">
            <Image
                src = {Polynesia}
                alt = "polynesia"
                fill = {true}
            />
            <p className='absolute text-center top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 text-white text-4xl font-semibold'>Hotels & Lodges</p>
            </Link>
            </div>

            <div className='relative aspect-video'>
            <Image
                src = {Tropical}
                alt = "tropical"
                fill = {true}
            />
            <p className='absolute text-center top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 text-white text-4xl font-semibold'>Villas</p>
            </div>

        </div>
        <br/>

        <div className='w-full md:flex justify-center items-center relative py-10'>
        <div classname="justify-center items-center w-full">
        <Image
        src = {LogoNoBG}
        alt = "Logo"
        width = {100}
        height = {100}
        className='mx-auto pb-5'
      />
        </div>

        <div className='md:absolute md:text-right text-center mr-10 w-full md:bottom-[45%]'>
      <button className='w-1/7 bg-gray-600 px-3 py-1 rounded-md text-white'>Contact Us</button>
      </div>

      </div>

        </div>
    )
}