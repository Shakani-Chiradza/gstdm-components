import Image from "next/image"
import Link from "next/link"
import Carousel from "@/components/carousel"
import Hotel18 from './../public/images/hotels/18.jpg'
import Hotel3 from './../public/images/hotels/3.jpg'
import Hotel16 from './../public/images/hotels/16.jpg'
import Hotel9 from './../public/images/hotels/9.jpg'
import Hotel11 from './../public/images/hotels/11.jpg'
import Hotel15 from './../public/images/hotels/15.jpg'

export default function HotelsLodges() {
    return (
        <div>
            <Carousel phrase="INDULGE" line="IN OUR HOTELS"/>

            <div>
                <div className="w-[90%] mx-auto my-5">
                    <input id='searchbar' placeholder="Search for Hotels" className="w-full p-3 border border-gray-400"/>
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
                </div>

                <div className='justify-center md:w-1/5 w-1/2 mx-auto items-center border border-solid border-gray-600 mt-5'>
                    <Link href='#'>
                        <button className='w-full py-3 text-gray-600 hover:bg-gray-600 hover:text-white'>SEE MORE</button>
                    </Link>
                </div>
            </div>
        </div>
    )
    
}