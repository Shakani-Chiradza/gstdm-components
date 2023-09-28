import Image from 'next/image'
import Carousel from '@/components/carousel'
import Africa from './../public/images/icons/africa.jpg'
import NorthAmerica from './../public/images/icons/north-america.jpg'
import LatinAmerica from './../public/images/icons/latin-america.jpg'
import Asia from './../public/images/icons/asia.jpg'
import Europe from './../public/images/icons/europe.jpg'
import MiddleEast from './../public/images/icons/middle-east.jpg'
import Oceania from './../public/images/icons/oceania.jpg'
import Pyramid from './../public/images/pyramid.jpg'


export default function Destinations(){
    return(
        <div>
        <Carousel/>

        <div className='md:flex gap-10 py-10 justify-evenly grid grid-cols-4 px-5'>
            <div className='grid grid-cols-1'>
            <Image
                src = {Africa}
                alt = "africa"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>AFRICA</p>
            </div>
            <div className='grid grid-cols-1'>
            <Image
                src = {LatinAmerica}
                alt = "africa"
                width = {30}
                height = {30}
                className='mx-auto'
            />
            <p>LATIN AMERICA</p>
            </div>
            <div className='grid grid-cols-1'>
            <Image
                src = {Asia}
                alt = "africa"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>ASIA</p>
            </div>
            <div className='grid grid-cols-1'>
            <Image
                src = {MiddleEast}
                alt = "africa"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>MIDDLE EAST</p>
            </div>
            <div className='grid grid-cols-1'>
            <Image
                src = {NorthAmerica}
                alt = "africa"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>NORTH AMERICA</p>
            </div>
            <div className='grid grid-cols-1'>
            <Image
                src = {Europe}
                alt = "africa"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>EUROPE</p>
            </div>
            <div className='grid grid-cols-1'>
            <Image
                src = {Oceania}
                alt = "africa"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>OCEANIA</p>
            </div>
        </div>

        <hr className='w-[90%] h-[1px] mx-auto bg-gray-300 border-0 rounded mb-5'/>
        <br/>

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
        </div>
    )
}