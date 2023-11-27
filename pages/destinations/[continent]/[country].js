import Carousel from '@/components/carousel'
import Slider from '@/components/bigimages'
import Continents from '@/components/continents'
import SlidesAgain from '@/components/images2'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Polynesia from './../../../public/images/hotels/14.jpg'
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
    const nationID = context.params?.country;
    const data = await getData();
    const foundItem = data.continents.find((item) => itemID === item.url);
    
  
    if (!foundItem) {
      return {
        props: { hasError: true },
      }
    }

    const foundNation = foundItem.details.find((nation) => nationID === nation.url)

    if (!foundNation) {
        return {
          props: { hasError: true },
        }
      }
  
  return {
    props: {
      specificContinentData: foundItem,
      specificCountryData: foundNation
    }
  }
}


export const getStaticPaths = async () => {
    const data = await getData();
    const pathsWithParams = data.continents.map((place) => ({ params: {continent: 'africa', country: 'botswana'}}))
   /* const pathsWithParams = data.continents.map((place) => (place.details.map(
        (nation) => ({params: {continent: place.url, country: nation.url}})
    )))*/

    
    return {
        paths: pathsWithParams,
        fallback: true
    }
}

export default function projectPage({specificContinentData, specificCountryData, hasError}) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
    
      if (hasError) {
        return (
          <div className='w-[100%] h-[100vh]'>
              <div className='relative top-1/3 left-[30%] right[30%] w-[50%]'>
                  <h1 className='text-4xl text-justify'>Error - please try another page route</h1>
              </div>
          </div>
      )
      }
    
      if (router.isFallback) {
          return <h1>Loading...</h1>
      }


      return (
        <div>
            <Carousel  phrase="EXPLORE" line={specificCountryData.country.toUpperCase()}/>
            <Continents/>
            <div className="w-[80%] mx-auto text-gray-600">
                <p className="text-5xl font-medium my-10">WELCOME TO {specificCountryData.country.toUpperCase()}</p>

                <SlidesAgain url={specificCountryData.country}/>
                
                <p className="my-10">{specificCountryData.about1}</p>

                
                <div className='grid grid-cols-2 pb-5 md:w-[50%] mx-auto mt-3'>
                    <div>
                        <p className='text-xl'>CAPITAL</p>
                        <p>{specificCountryData.capital}</p>
                    </div>
                    <div>
                        <p className='text-xl'>TIMEZONE</p>
                        <p>{specificCountryData.timezone}</p>
                    </div>
                </div>
                <hr className='w-[90%] h-[1px] mx-auto bg-gray-300 border-0 rounded mb-5'/>

                <p className="my-10">{specificCountryData.about2}</p>

                <div className='grid grid-cols-2 pb-5 md:w-[50%] mx-auto'>
                    <div>
                        <p className='text-xl'>POPULATION</p>
                        <p>{specificCountryData.population}</p>
                    </div>
                    <div>
                        <p className='text-xl'>CURRENCY</p>
                        <p>{specificCountryData.currency}</p>
                    </div>
                </div>
                <hr className='w-[90%] h-[1px] mx-auto bg-gray-300 border-0 rounded mb-5'/>

                <p className="my-10">{specificCountryData.about3}</p>
                
                <Slider url={specificCountryData.country}/>

                <p className='text-3xl font-medium my-10 text-center'>Route</p>
                <hr className='w-[90%] h-[1px] mx-auto bg-gray-300 border-0 rounded mb-5'/>

                <div class="google-map w-[100%] md:h-[100vh] h-[50vh]">
                    <iframe src={specificCountryData.location} className='w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='justify-center md:w-1/5 w-1/2 mx-auto items-center border border-solid border-gray-600 mt-5 mb-5'>
                     <Link target="_blank" href='https://gstdm-ten.vercel.app'>
                        <button className='w-full py-3 text-gray-600 hover:bg-gray-600 hover:text-white'>MAKE A BOOKING</button>
                    </Link>
                </div>
            </div>
    </div>
      )
}
