import Image from "next/image"
import Link from "next/link"
import Carousel from "@/components/carousel"
import path from 'path'
import Polynesia from './../../public/images/polynesia.jpg'


export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'components', 'countries.json')
    var fsp = require('fs/promises')
    const fileData = await fsp.readFile(filePath)
    const countries = JSON.parse(fileData) 

    return {
        props: {
            countries
        }
    }
}

export default function Countries({countries}){
    return(
        <div>
            <Carousel phrase="TESTING" line="COUNTRIES"/>

            <div className="w-[80%] mx-auto text-gray-600">
                <p className="text-5xl font-medium my-10">WELCOME TO {countries.continents[0].details[0].country.toUpperCase()}</p>

                <div className="relative aspect-video">
                    <Image
                    src = {Polynesia}
                    alt = "polynesia"
                    fill = {true}
                    />
                </div>

                <p className="my-10">{countries.continents[0].details[0].about1}</p>

                
                <div className='grid grid-cols-2 pb-5 md:w-[50%] mx-auto mt-3'>
                    <div>
                        <p className='text-xl'>CAPITAL</p>
                        <p>{countries.continents[0].details[0].capital}</p>
                    </div>
                    <div>
                        <p className='text-xl'>TIMEZONE</p>
                        <p>{countries.continents[0].details[0].timezone}</p>
                    </div>
                </div>
                <hr className='w-[90%] h-[1px] mx-auto bg-gray-300 border-0 rounded mb-5'/>

                <p className="my-10">{countries.continents[0].details[0].about2}</p>

                <div className='grid grid-cols-2 pb-5 md:w-[50%] mx-auto'>
                    <div>
                        <p className='text-xl'>POPULATION</p>
                        <p>{countries.continents[0].details[0].population}</p>
                    </div>
                    <div>
                        <p className='text-xl'>CURRENCY</p>
                        <p>{countries.continents[0].details[0].currency}</p>
                    </div>
                </div>
                <hr className='w-[90%] h-[1px] mx-auto bg-gray-300 border-0 rounded mb-5'/>

                <p className="my-10">{countries.continents[0].details[0].about3}</p>

                <div className="relative aspect-video mb-10">
                    <Image
                    src = {Polynesia}
                    alt = "polynesia"
                    fill = {true}
                    />
                </div>

                <div className='justify-center md:w-1/5 w-1/2 mx-auto items-center border border-solid border-gray-600 mt-5 mb-5'>
                    <Link href='https://gstdm-ten.vercel.app'>
                        <button className='w-full py-3 text-gray-600 hover:bg-gray-600 hover:text-white'>MAKE A BOOKING</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}