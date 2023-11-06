import Image from "next/image"
import Carousel from "@/components/carousel"
import Villa1 from "./../public/images/villas/1.jpg"
import Villa2 from "./../public/images/villas/2.jpg"
import Villa3 from "./../public/images/villas/3.jpg"
import Villa4 from "./../public/images/villas/4.jpg"
import Villa5 from "./../public/images/villas/5.jpg"
import Villa6 from "./../public/images/villas/6.jpg"
import Villa7 from "./../public/images/villas/7.jpg"
import Villa8 from "./../public/images/villas/8.jpg"
import Villa9 from "./../public/images/villas/9.jpg"
import Villa10 from "./../public/images/villas/10.jpg"
import Villa11 from "./../public/images/villas/17.jpg"
import Villa12 from "./../public/images/villas/12.jpg"
import Villa13 from "./../public/images/villas/13.jpg"
import Villa14 from "./../public/images/villas/14.jpg"
import Villa15 from "./../public/images/villas/15.jpg"
import Villa16 from "./../public/images/villas/16.jpg"


export default function Villas() {
    return (
        <div>
            <Carousel phrase="RELAX" line="IN OUR VILLAS"/>

            <div className="w-[90%] mx-auto mt-10">
                <p className="text-lg text-gray-600 font-mono italic justify-center">Welcome to our extraordinary collection of villas, where luxury and serenity blend seamlessly to create 
                unforgettable travel experiences. From the sun-kissed shores of Santorini to the lush rainforests of Costa Rica, 
                our handpicked selection of villas spans the globe, offering a world of oppulence and tranquility. Each villa has 
                been thoughtfully curated to provide an unparalleled sense of privacy, allowing you to create unforgettable 
                memories against the backdrop of stunning landscapes.</p>
                <br/>
                <br/>
                <p className="text-lg text-gray-600 font-mono italic">Please contact us for additional information.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-3">
                    <div className="relative row-span-2 aspect-[3/4]">
                        <Image
                            src={Villa1}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-1 aspect-square">
                        <Image
                            src={Villa2}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-2 aspect-[3/4]">
                        <Image
                            src={Villa3}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-1 aspect-square">
                        <Image
                            src={Villa4}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-2 aspect-[3/4]">
                        <Image
                            src={Villa5}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-1 aspect-square">
                        <Image
                            src={Villa6}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-2 aspect-[3/4]">
                        <Image
                            src={Villa7}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-1 aspect-square">
                        <Image
                            src={Villa8}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-2 aspect-[3/4]">
                        <Image
                            src={Villa9}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-1 aspect-square">
                        <Image
                            src={Villa10}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-2 aspect-[3/4]">
                        <Image
                            src={Villa11}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-1 aspect-square">
                        <Image
                            src={Villa12}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-2 aspect-[3/4]">
                        <Image
                            src={Villa13}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-1 aspect-square">
                        <Image
                            src={Villa14}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-2 aspect-[3/4]">
                        <Image
                            src={Villa15}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                    <div className="relative row-span-1 aspect-square">
                        <Image
                            src={Villa16}
                            alt="Villa image"
                            fill={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
    
}