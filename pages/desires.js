import Image from "next/image"
import Link from "next/link"
import Carousel from "@/components/carousel"
import Canoe1 from "./../public/images/desires/canoeing/1.jpg" 
import Hike1 from "./../public/images/desires/hiking/1.jpg"
import Honey1 from "./../public/images/desires/honeymoon/1.jpg"
import HotAir1 from "./../public/images/desires/hot-air-balloon/1.jpg"
import Safari1 from "./../public/images/desires/safari/1.jpg"
import Spa1 from "./../public/images/desires/spa/1.jpg"
import Water1 from "./../public/images/desires/water-sports/1.jpg"


export default function Desires() {
    return (
        <div>
            <Carousel/>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10 w-[90%] mx-auto text-gray-600">
                <div>
                    <div className="relative aspect-[4/3]">
                        <Image
                            src={Canoe1}
                            alt="Activity image"
                            fill={true}
                        />
                    </div>
                    <p className="mt-4 text-2xl font-semibold">CANOEING</p>
                    <p className="mt-3 justify-center">Experience the serenity of nature like never before with the exhilerating adventure of canoeing. Glide gracefully along the tranquil waters, immensing yourself in breathtaking landscapes and hidden wonders waiting to be discovered.</p>
                    <p className="mt-3 text-lg font-semibold">See more</p>
                    <hr className="w-[22%] h-1 bg-gray-600 boarder-0 rounded mb-5"/>
                </div>
                <div>
                    <div className="relative aspect-[4/3]">
                        <Image
                            src={Hike1}
                            alt="Activity image"
                            fill={true}
                        />
                    </div>
                    <p className="mt-4 text-2xl font-semibold">HIKING</p>
                    <p className="mt-3 justify-center">Immerse yourself in nature&apos;s embrace as you traverse winding trails, surrounded by majestic mountains. From challenging summit hikes to leisurely strolls through serene forests, hiking lets you reconnect with beautiful nature.</p>
                    <p className="mt-3 text-lg font-semibold">See more</p>
                    <hr className="w-[22%] h-1 bg-gray-600 boarder-0 rounded mb-5"/>
                </div>
                <div>
                    <div className="relative aspect-[4/3]">
                        <Image
                            src={Honey1}
                            alt="Activity image"
                            fill={true}
                        />
                    </div>
                    <p className="mt-4 text-2xl font-semibold">HONEYMOON</p>
                    <p className="mt-3 justify-center">Create unforgettable moments and ignite the flames of romance with a selection of enchanting honeymoon activities. Indulge in a private candlelit dinner under the starry sky, savoring exquisite cuisine and fine wines to celebrate love.</p>
                    <p className="mt-3 text-lg font-semibold">See more</p>
                    <hr className="w-[22%] h-1 bg-gray-600 boarder-0 rounded mb-5"/>
                </div>
                <div>
                    <div className="relative aspect-[4/3]">
                        <Image
                            src={HotAir1}
                            alt="Activity image"
                            fill={true}
                        />
                    </div>
                    <p className="mt-4 text-2xl font-semibold">HOT AIR BALLONING</p>
                    <p className="mt-3 justify-center">Soar to new heights and experience the world from a breathtaking perspective with the exhilerating adventure of hot air ballooning. Drift gently through the sky, suspended in a colourful balloon, as you marvel at the rolling landscapes.</p>
                    <p className="mt-3 text-lg font-semibold">See more</p>
                    <hr className="w-[22%] h-1 bg-gray-600 boarder-0 rounded mb-5"/>
                </div>
                <div>
                    <div className="relative aspect-[4/3]">
                        <Image
                            src={Safari1}
                            alt="Activity image"
                            fill={true}
                        />
                    </div>
                    <p className="mt-4 text-2xl font-semibold">SAFARI</p>
                    <p className="mt-3 justify-center">Embark on the ultimate adventure and immerse yourself in the untamed beauty of the wild with an unforgettable safari experience. Witness awe-inspiring wildlife in their natural habitat as you journey through the savannahs.</p>
                    <p className="mt-3 text-lg font-semibold">See more</p>
                    <hr className="w-[22%] h-1 bg-gray-600 boarder-0 rounded mb-5"/>
                </div>
                <div>
                    <div className="relative aspect-[4/3]">
                        <Image
                            src={Spa1}
                            alt="Activity image"
                            fill={true}
                        />
                    </div>
                    <p className="mt-4 text-2xl font-semibold">SPA</p>
                    <p className="mt-3 justify-center">Indulge in pure bliss and surrender to ultimate relaxation with a rejuvinating spa experience that will leave you feeling refreshed and revitalized. Escape the stresses of everyday life as skilled therapists pamper you with luxurious treatments.</p>
                    <p className="mt-3 text-lg font-semibold">See more</p>
                    <hr className="w-[22%] h-1 bg-gray-600 boarder-0 rounded mb-5"/>
                </div>
                <div className="hidden md:block"></div>
                <div>
                    <div className="relative aspect-[4/3]">
                        <Image
                            src={Water1}
                            alt="Activity image"
                            fill={true}
                        />
                    </div>
                    <p className="mt-4 text-2xl font-semibold">WATER SPORTS</p>
                    <p className="mt-3 justify-center">Dive into a world of excitement and adventure with a thrilling array of water sports that will make your vacation truly unforgettable. Feel the rush of adrenaline as you ride the waves while surfing or try windsurfing or kiteboarding.</p>
                    <p className="mt-3 text-lg font-semibold">See more</p>
                    <hr className="w-[22%] h-1 bg-gray-600 boarder-0 rounded mb-5"/>
                </div>
                <div className="hidden md:block"></div>
            </div>
        </div>
    )
    
}