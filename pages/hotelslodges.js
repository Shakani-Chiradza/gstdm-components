import Image from "next/image"
import Link from "next/link"
import Carousel from "@/components/carousel"
import Hotel18 from './../public/images/hotels/18.jpg'
import Hotel3 from './../public/images/hotels/3.jpg'
import Hotel16 from './../public/images/hotels/16.jpg'
import Hotel9 from './../public/images/hotels/9.jpg'
import Hotel11 from './../public/images/hotels/11.jpg'
import Hotel15 from './../public/images/hotels/15.jpg'
import Hotel1 from './../public/images/hotels/1.jpg'
import Hotel2 from './../public/images/hotels/2.jpg'
import Hotel4 from './../public/images/hotels/4.jpg'
import Hotel5 from './../public/images/hotels/5.jpg'
import Hotel6 from './../public/images/hotels/6.jpg'
import Hotel7 from './../public/images/hotels/7.jpg'

export default function HotelsLodges() {
    return (
        <div>
            <Carousel phrase="INDULGE" line="IN OUR HOTELS"/>

            <div>
                <div className="w-[90%] mx-auto my-5">
                <p className="text-lg text-gray-600 font-mono italic justify-center">Welcome to our extraordinary collection of hotels and lodges, where we prioritize luxury and comfort. Indulge in world class 5 star hotels and lodges that are sure to make your vacation relaxing and hassle-free.</p>
                <br/>
                <br/>
                <p className="text-lg text-gray-600 font-mono italic">Please contact us for additional information.</p>

                </div>

                <div className='justify-center md:w-1/5 w-1/2 mx-auto items-center border border-solid border-gray-600 mt-5 mb-5'>
                    <Link href='https://gstdm-ten.vercel.app'>
                        <button className='w-full py-3 text-gray-600 hover:bg-gray-600 hover:text-white'>BOOK A HOTEL/LODGE</button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-6 grid-cols-1 gap-3 w-[90%] mx-auto">
                    <div className="md:col-span-6 relative md:aspect-video aspect-square">
                        <Image
                            src={Hotel18}
                            alt='Hotel image'
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-3 relative aspect-square">
                        <Image
                            src={Hotel3}
                            alt='Hotel image'
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-3 relative aspect-square">
                        <Image
                            src={Hotel16}
                            alt='Hotel image'
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-2 relative md:aspect-[3/4] aspect-square">
                        <Image
                            src={Hotel9}
                            alt="Hotel image"
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-2 relative md:aspect-[3/4] aspect-square">
                        <Image
                            src={Hotel11}
                            alt="Hotel image"
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-2 relative md:aspect-[3/4] aspect-square">
                        <Image
                            src={Hotel15}
                            alt="Hotel image"
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-6 relative md:aspect-video aspect-square">
                        <Image
                            src={Hotel6}
                            alt='Hotel image'
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-3 relative aspect-square">
                        <Image
                            src={Hotel2}
                            alt='Hotel image'
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-3 relative aspect-square">
                        <Image
                            src={Hotel4}
                            alt='Hotel image'
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-2 relative md:aspect-[3/4] aspect-square">
                        <Image
                            src={Hotel5}
                            alt="Hotel image"
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-2 relative md:aspect-[3/4] aspect-square">
                        <Image
                            src={Hotel1}
                            alt="Hotel image"
                            fill={true}
                        />
                    </div>
                    <div className="md:col-span-2 relative md:aspect-[3/4] aspect-square">
                        <Image
                            src={Hotel7}
                            alt="Hotel image"
                            fill={true}
                        />
                    </div>
                </div>

                <div className='justify-center md:w-1/5 w-1/2 mx-auto items-center border border-solid border-gray-600 mt-5'>
                    <Link href='https://gstdm-ten.vercel.app'>
                        <button className='w-full py-3 text-gray-600 hover:bg-gray-600 hover:text-white'>BOOK A HOTEL/LODGE</button>
                    </Link>
                </div>
            </div>
        </div>
    )
    
}