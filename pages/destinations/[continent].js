import Carousel from '@/components/carousel'
import Continents from '@/components/continents'
import Slides from '@/components/images'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Polynesia from './../../public/images/polynesia.jpg'
import Tropical from './../../public/images/tropical.jpg'
import path from 'path'


async function getData() {
    const filePath = path.join(process.cwd(), 'components', 'countries.json')
    var fsp = require('fs/promises')
    const fileData = await fsp.readFile(filePath)
    const data = JSON.parse(fileData) 

    return data
}


export const getStaticProps = async (context) => {
    const itemID = context.params?.continent;
    const data = await getData();
    const foundItem = data.continents.find((item) => itemID === item.url);
  
    if (!foundItem) {
      return {
        props: { hasError: true },
      }
  }
  
  return {
    props: {
      specificContinentData: foundItem
    }
  }
}


export const getStaticPaths = async () => {
    const data = await getData();
    const pathsWithParams = data.continents.map((place) => ({ params: { continent: place.url }}))

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

export default function projectPage({specificContinentData, hasError}) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
    
      if (hasError) {
        return <h1>Error - please try another page route</h1>
      }
    
      if (router.isFallback) {
          return <h1>Loading...</h1>
      }


      return (
        <div>
            <Carousel  phrase="EXPLORE" line={specificContinentData.continent.toUpperCase()}/>
            <Continents/>
        <div className='py-10 text-gray-600'>
            {specificContinentData.details.map((country, index) => (
                <div className='grid md:grid-cols-2 grid-cols-1' key={index}>
                <Slides url={country.country}/>

            <div className='md:px-0 px-5'>
                <h2 className='text-2xl pb-3'>{country.country.toUpperCase()}</h2>
                <p className='pb-3 md:w-3/4'>{country.description}</p>
                <div className='grid grid-cols-3 pb-5'>
                    <div>
                        <p className='text-xl'>CAPITAL</p>
                        <p>{country.capital}</p>
                    </div>
                    <div>
                        <p className='text-xl'>TIMEZONE</p>
                        <p>{country.timezone}</p>
                    </div>
                    <div>
                        <p className='text-xl'>POPULATION</p>
                        <p>{country.population}</p>
                    </div>
                </div>
                <p className='text-xl'>See More</p>
                <hr className='w-24 h-1 bg-gray-600 border-0 rounded'/>
            </div>
            <br/>
        </div>
            ))}
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
            <Link href="/villas">
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
