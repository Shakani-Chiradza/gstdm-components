import Image from "next/image"
import Link from "next/link"
import Carousel from "@/components/carousel"
import One from './../../public/images/desires/water-sports/1.jpg'
import Two from './../../public/images/desires/water-sports/2.jpg'
import Three from './../../public/images/desires/water-sports/3.jpg'
import Four from './../../public/images/desires/water-sports/4.jpg'
import Five from './../../public/images/desires/water-sports/5.jpg'
import Six from './../../public/images/desires/water-sports/6.jpg'
import Seven from './../../public/images/desires/water-sports/7.jpg'
import Eight from './../../public/images/desires/water-sports/8.jpg'
import Nine from './../../public/images/desires/water-sports/9.jpg'


export default function Water() {
    return (
        <div>
            <Carousel phrase="FIND THRILLING" line="WATER SPORTS"/>

            <div>
                <div className='justify-center md:w-1/5 w-1/2 mx-auto items-center border border-solid border-gray-600 mt-5 mb-5'>
                    <Link href='https://gstdm-ten.vercel.app'>
                        <button className='w-full py-3 text-gray-600 hover:bg-gray-600 hover:text-white'>BOOK AN ACTIVITY</button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 w-[90%] mx-auto">
                    <div className="md:col-span-2 relative md:aspect-video aspect-square">
                        <Image
                            src={One}
                            alt='Activity image'
                            fill={true}
                        />
                    </div>
                    <div className="relative aspect-square">
                        <Image
                            src={Two}
                            alt='Activity image'
                            fill={true}
                        />
                    </div>
                    <div className="relative aspect-square">
                        <Image
                            src={Three}
                            alt='Activity image'
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-2 relative md:aspect-video aspect-square">
                        <Image
                            src={Four}
                            alt='Activity image'
                            fill={true}
                        />
                    </div>
                    <div className="relative aspect-square">
                        <Image
                            src={Five}
                            alt='Activity image'
                            fill={true}
                        />
                    </div>
                    <div className="relative aspect-square">
                        <Image
                            src={Six}
                            alt='Activity image'
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-2 relative md:aspect-video aspect-square">
                        <Image
                            src={Seven}
                            alt='Activity image'
                            fill={true}
                        />
                    </div>
                    <div className="relative aspect-square">
                        <Image
                            src={Eight}
                            alt='Activity image'
                            fill={true}
                        />
                    </div>
                    <div className="relative aspect-square">
                        <Image
                            src={Nine}
                            alt='Activity image'
                            fill={true}
                        />
                    </div>
                </div>

                <div className='justify-center md:w-1/5 w-1/2 mx-auto items-center border border-solid border-gray-600 mt-5 mb-5'>
                    <Link href='https://gstdm-ten.vercel.app'>
                        <button className='w-full py-3 text-gray-600 hover:bg-gray-600 hover:text-white'>BOOK AN ACTIVITY</button>
                    </Link>
                </div>
            </div>

        </div>
    )
    
}