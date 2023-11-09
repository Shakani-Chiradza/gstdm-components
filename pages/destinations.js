import Image from 'next/image'
import Carousel from '@/components/carousel'
import Continents from '@/components/continents'
import Polynesia from './../public/images/hotels/14.jpg'
import Tropical from './../public/images/villas/5.jpg'
import Botswana from './../public/images/countries/botswana1.jpg'
import China from './../public/images/countries/china1.jpg'
import France from './../public/images/countries/france1.jpg'
import Brazil from './../public/images/countries/brazil1.jpg'
import Bahrain from './../public/images/countries/bahrain1.jpg'
import Canada from './../public/images/countries/canada1.jpg'
import Australia from './../public/images/countries/australia1.jpg'
import Link from 'next/link'


export default function Destinations(){
    return(
        <div>
        <Carousel phrase="EXPLORE" line="OUR DESTINATIONS"/>
        <Continents/>

        <div className='py-10 text-gray-600'>
        <div className='grid md:grid-cols-2 grid-cols-1'>
            <Link href="/destinations/africa" className='relative aspect-video md:aspect-square md:w-[75%] md:h-[50vh] md:mx-auto'>
                <Image
                    src = {Botswana}
                    alt = "Africa"
                    fill={true}
                    className='mx-auto px-5 md:px-0'
                />
            </Link>

            <div className='md:px-0 px-5 pt-3'>
                <h2 className='text-2xl pb-3'>AFRICA</h2>
                <p className='pb-3 md:w-3/4'>Africa is the second largest continent covering about one-fifth of the total land surface on Earth. The continent is bounded by the Atlantic Ocean, Mediterranean Sea, Red Sea and the Indian Ocean.</p>
                <div className='grid grid-cols-3 pb-5 gap-x-3'>
                    <div>
                        <p className='text-xl'>COUNTRIES</p>
                        <p>54</p>
                    </div>
                    <div>
                        <p className='text-xl'>LARGEST</p>
                        <p>Algeria</p>
                    </div>
                    <div>
                        <p className='text-xl'>SMALLEST</p>
                        <p>Seychelles</p>
                    </div>
                </div>
                <Link href="/destinations/africa" className='hover:opacity-50'>
                    <p className='text-xl'>See More</p>
                    <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
                </Link>
            </div>
            <br/>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1'>
            <Link href="/destinations/asia" className='relative aspect-video md:aspect-square md:w-[75%] md:h-[50vh] md:mx-auto'>
                <Image
                    src = {China}
                    alt = "Asia"
                    fill={true}
                    className='mx-auto px-5 md:px-0'
                />
            </Link>
            <div className='md:px-0 px-5 pt-3'>
                <h2 className='text-2xl pb-3'>ASIA</h2>
                <p className='pb-3 md:w-3/4'>Asia is the world&apos;s largest and most diverse continent. It occupies the eastern four-fifths of the giant Eurasian landmass. Asia has both the highest and lowest points on the surface of the Earth. </p>
                <div className='grid grid-cols-3 pb-5 gap-x-3'>
                    <div>
                        <p className='text-xl'>COUNTRIES</p>
                        <p>48</p>
                    </div>
                    <div>
                        <p className='text-xl'>LARGEST</p>
                        <p>Russia</p>
                    </div>
                    <div>
                        <p className='text-xl'>SMALLEST</p>
                        <p>Maldives</p>
                    </div>
                </div>
                <Link href="/destinations/asia" className='hover:opacity-50'>
                    <p className='text-xl'>See More</p>
                    <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
                </Link>
            </div>
            <br/>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1'>
            <Link href="/destinations/europe" className='relative aspect-video md:aspect-square md:w-[75%] md:h-[50vh] md:mx-auto'>
                <Image
                    src = {France}
                    alt = "Europe"
                    fill={true}
                    className='mx-auto px-5 md:px-0'
                />
            </Link>

            <div className='md:px-0 px-5 pt-3'>
                <h2 className='text-2xl pb-3'>EUROPE</h2>
                <p className='pb-3 md:w-3/4'>Europe is the second smallest continent in the world, composed of the westward-projecting peninsulas of Eurasia and occupying nearly one fifteenth of the world&apos;s total land area.</p>
                <div className='grid grid-cols-3 pb-5 gap-x-3'>
                    <div>
                        <p className='text-xl'>COUNTRIES</p>
                        <p>50</p>
                    </div>
                    <div>
                        <p className='text-xl'>LARGEST</p>
                        <p>Russia</p>
                    </div>
                    <div>
                        <p className='text-xl'>SMALLEST</p>
                        <p>Vatican City</p>
                    </div>
                </div>
                <Link href="/destinations/europe" className='hover:opacity-50'>
                    <p className='text-xl'>See More</p>
                    <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
                </Link>
            </div>
            <br/>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1'>
            <Link href="/destinations/latin-america" className='relative aspect-video md:aspect-square md:w-[75%] md:h-[50vh] md:mx-auto'>
                <Image
                    src = {Brazil}
                    alt = "Latin America"
                    fill={true}
                    className='mx-auto px-5 md:px-0'
                />
            </Link>

            <div className='md:px-0 px-5 pt-3'>
                <h2 className='text-2xl pb-3'>LATIN AMERICA</h2>
                <p className='pb-3 md:w-3/4'>Latin America is generally understood to consist of the entire continent of South America in addition to Mexico, Central America and the islands of the Caribbean whose inhabitants speak a Romance language.</p>
                <div className='grid grid-cols-3 pb-5 gap-x-3'>
                    <div>
                        <p className='text-xl'>COUNTRIES</p>
                        <p>33</p>
                    </div>
                    <div>
                        <p className='text-xl'>LARGEST</p>
                        <p>Brazil</p>
                    </div>
                    <div>
                        <p className='text-xl'>SMALLEST</p>
                        <p>Suriname</p>
                    </div>
                </div>
                <Link href="/destinations/latin-america" className='hover:opacity-50'>
                    <p className='text-xl'>See More</p>
                    <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
                </Link>
            </div>
            <br/>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1'>
        <Link href="/destinations/middle-east" className='relative aspect-video md:aspect-square md:w-[75%] md:h-[50vh] md:mx-auto'>
            <Image
                src = {Bahrain}
                alt = "Middle East"
                fill={true}
                className='mx-auto px-5 md:px-0'
            />
        </Link>

            <div className='md:px-0 px-5 pt-3'>
                <h2 className='text-2xl pb-3'>MIDDLE EAST</h2>
                <p className='pb-3 md:w-3/4'>The Middle East are the lands around the southern and eastern shores of the Mediterranean Sea, encompassing at least the Arabian Peninsula and, by some definitions, Iran, North Africa and sometimes beyond.</p>
                <div className='grid grid-cols-3 pb-5 gap-x-3'>
                    <div>
                        <p className='text-xl'>COUNTRIES</p>
                        <p>18</p>
                    </div>
                    <div>
                        <p className='text-xl'>LARGEST</p>
                        <p>Saudi Arabia</p>
                    </div>
                    <div>
                        <p className='text-xl'>SMALLEST</p>
                        <p>Bahrain</p>
                    </div>
                </div>
                <Link href="/destinations/middle-east" className='hover:opacity-50'>
                    <p className='text-xl'>See More</p>
                    <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
                </Link>
            </div>
            <br/>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1'>
            <Link href="/destinations/north-america" className='relative aspect-video md:aspect-square md:w-[75%] md:h-[50vh] md:mx-auto'>
                <Image
                    src = {Canada}
                    alt = "North America"
                    fill={true}
                    className='mx-auto px-5 md:px-0'
                />
            </Link>

            <div className='md:px-0 px-5 pt-3'>
                <h2 className='text-2xl pb-3'>NORTH AMERICA</h2>
                <p className='pb-3 md:w-3/4'>North America is the third largest continent in the world, lying for the most part between the Arctic Circle and the Tropic of Cancer. It extends for more than 8,000km to within 800km of both the North Pole and the Equator.</p>
                <div className='grid grid-cols-3 pb-5 gap-x-3'>
                    <div>
                        <p className='text-xl'>COUNTRIES</p>
                        <p>23</p>
                    </div>
                    <div>
                        <p className='text-xl'>LARGEST</p>
                        <p>Canada</p>
                    </div>
                    <div>
                        <p className='text-xl'>SMALLEST</p>
                        <p>Saint Kitts and Nevis</p>
                    </div>
                </div>
                <Link href="/destinations/north-america" className='hover:opacity-50'>
                    <p className='text-xl'>See More</p>
                    <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
                </Link>
            </div>
            <br/>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1'>
            <Link href="/destinations/oceania" className='relative aspect-video md:aspect-square md:w-[75%] md:h-[50vh] md:mx-auto'>
                <Image
                    src = {Australia}
                    alt = "Oceania"
                    fill={true}
                    className='mx-auto px-5 md:px-0'
                />
            </Link>

            <div className='md:px-0 px-5 pt-3'>
                <h2 className='text-2xl pb-3'>OCEANIA</h2>
                <p className='pb-3 md:w-3/4'>Oceania is a collective name for the islands scattered throughout most of the Pacific Ocean. The term, in its widest sense, embraces the entire insular region between Asia and the Americas. It has over 10,000 islands.</p>
                <div className='grid grid-cols-3 pb-5 gap-x-3'>
                    <div>
                        <p className='text-xl'>COUNTRIES</p>
                        <p>14</p>
                    </div>
                    <div>
                        <p className='text-xl'>LARGEST</p>
                        <p>Australia</p>
                    </div>
                    <div>
                        <p className='text-xl'>SMALLEST</p>
                        <p>Nauru</p>
                    </div>
                </div>
                <Link href="/destinations/oceania" className='hover:opacity-50'>
                    <p className='text-xl'>See More</p>
                    <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
                </Link>
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
            <Link href='/villas'>
            <Image
                src = {Tropical}
                alt = "tropical"
                fill = {true}
            />
            <p className='absolute text-center top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 text-white text-4xl font-semibold'>Villas</p>
            </Link>
            </div>

        </div>
        <br/>

        </div>
    )
}