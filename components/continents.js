import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router'
import AfricaBlack from "./../public/images/Icons/africa-black.png"
import AfricaWhite from "./../public/images/Icons/africa-white.png"
import AsiaBlack from "./../public/images/Icons/asia-black.png"
import AsiaWhite from "./../public/images/Icons/asia-white.png"
import EuropeBlack from "./../public/images/Icons/europe-black.png"
import EuropeWhite from "./../public/images/Icons/europe-white.png"
import LatinAmericaBlack from "./../public/images/Icons/latin-america-black.png"
import LatinAmericaWhite from "./../public/images/Icons/latin-america-white.png"
import MiddleEastBlack from "./../public/images/Icons/middle-east-black.png"
import MiddleEastWhite from "./../public/images/Icons/middle-east-white.png"
import NorthAmericaBlack from "./../public/images/Icons/north-america-black.png"
import NorthAmericaWhite from "./../public/images/Icons/north-america-white.png"
import OceaniaBlack from "./../public/images/Icons/oceania-black.png"
import OceaniaWhite from "./../public/images/Icons/oceania-white.png"


export default function Continents(){

    const router = useRouter()
    return(
        <div>
        <div className='md:flex gap-10 py-10 justify-evenly grid grid-cols-4 px-5'>
            <div className='grid grid-cols-1'>
            <Link href='/destinations/africa' className={router.pathname=='/destinations/africa' ? 'bg-gray-300 p-3 rounded text-gray-500' : 'bg-transparent p-3 rounded'}>
            <Image
                src = {router.pathname=='/destinations/africa' ? AfricaWhite : AfricaBlack}
                alt = "africa"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>AFRICA</p>
            </Link>
            </div>
            <div className='grid grid-cols-1'>
            <Link href='/destinations/latin-america' className={router.pathname=='/destinations/latin-america' ? 'bg-gray-300 p-3 rounded text-gray-500' : 'bg-transparent p-3 rounded'}>
            <Image
                src = {router.pathname=='/destinations/latin-america' ? LatinAmericaWhite : LatinAmericaBlack}
                alt = "latin america"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>LATIN AMERICA</p>
            </Link>
            </div>
            <div className='grid grid-cols-1'>
            <Link href='/destinations/asia'  className={router.pathname=='/destinations/asia' ? 'bg-gray-300 p-3 rounded text-gray-500' : 'bg-transparent p-3 rounded'}>
            <Image
                src = {router.pathname=='/destinations/asia' ? AsiaWhite : AsiaBlack}
                alt = "asia"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>ASIA</p>
            </Link>
            </div>
            <div className='grid grid-cols-1'>
            <Link href='/destinations/middle-east'  className={router.pathname=='/destinations/middle-east' ? 'bg-gray-300 p-3 rounded text-gray-500' : 'bg-transparent p-3 rounded'}>
            <Image
                src = {router.pathname=='/destinations/middle-east' ? MiddleEastWhite : MiddleEastBlack}
                alt = "middle east"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>MIDDLE EAST</p>
            </Link>
            </div>
            <div className='grid grid-cols-1'>
            <Link href='/destinations/north-america'  className={router.pathname=='/destinations/north-america' ? 'bg-gray-300 p-3 rounded text-gray-500' : 'bg-transparent p-3 rounded'}>
            <Image
                src = {router.pathname=='/destinations/north-america' ? NorthAmericaWhite : NorthAmericaBlack}
                alt = "north america"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>NORTH AMERICA</p>
            </Link>
            </div>
            <div className='grid grid-cols-1'>
            <Link href='/destinations/europe'  className={router.pathname=='/destinations/europe' ? 'bg-gray-300 p-3 rounded text-gray-500' : 'bg-transparent p-3 rounded'}>
            <Image
                src = {router.pathname=='/destinations/europe' ? EuropeWhite : EuropeBlack}
                alt = "europe"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>EUROPE</p>
            </Link>
            </div>
            <div className='grid grid-cols-1'>
            <Link href='/destinations/oceania'  className={router.pathname=='/destinations/oceania' ? 'bg-gray-300 p-3 rounded text-gray-500' : 'bg-transparent p-3 rounded'}>
            <Image
                src = {router.pathname=='/destinations/oceania' ? OceaniaWhite : OceaniaBlack}
                alt = "oceania"
                width = {25}
                height = {25}
                className='mx-auto'
            />
            <p>OCEANIA</p>
            </Link>
            </div>
            
        </div>

        <hr className='w-[90%] h-[1px] mx-auto bg-gray-300 border-0 rounded mb-5'/>
        <br/>
        </div>
    )
}