import Carousel from '@/components/carousel'
import { useRouter } from 'next/router'
import path from 'path'
import fs from 'fs'
import { useEffect, useState } from 'react';



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


export default function Test({countries}) {
    console.log(countries.continents[1].continent)
    return (
        <div>
            <Carousel/>
            <div className='text-5xl'>
                <ul>
                    {countries.continents.map((country, index) => (
                        <li key={index}>{country.continent}: {country.details[0].country}, {country.details[1].country}, {country.details[2].country}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

