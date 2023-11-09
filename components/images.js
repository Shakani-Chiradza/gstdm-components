import Image from 'next/image'
import Australia from './../public/images/countries/australia.jpg'
import Bahrain from './../public/images/countries/bahrain.jpg'
import Botswana from './../public/images/countries/botswana.jpg'
import Brazil from './../public/images/countries/brazil.jpg'
import Canada from './../public/images/countries/canada.jpg'
import China from './../public/images/countries/china.jpg'
import Egypt from './../public/images/countries/egypt.jpg'
import Fiji from './../public/images/countries/fiji.jpg'
import France from './../public/images/countries/france.jpg'
import Greece from './../public/images/countries/greece.jpg'
import Greenland from './../public/images/countries/greenland.jpg'
import Guatemala from './../public/images/countries/guatemala.jpg'
import Haiti from './../public/images/countries/haiti.jpg'
import Honduras from './../public/images/countries/honduras.jpg'
import India from './../public/images/countries/india.jpg'
import Italy from './../public/images/countries/italy.jpg'
import Jamaica from './../public/images/countries/jamaica.jpg'
import Japan from './../public/images/countries/japan.jpg'
import Kenya from './../public/images/countries/kenya.jpg'
import Madagascar from './../public/images/countries/madagascar.jpg'
import Malaysia from './../public/images/countries/malaysia.jpg'
import Mexico from './../public/images/countries/mexico.jpg'
import Micronesia from './../public/images/countries/micronesia.jpg'
import Morocco from './../public/images/countries/morocco.jpg'
import Netherlands from './../public/images/countries/netherlands.jpg'
import NewZealand from './../public/images/countries/newzealand.jpg'
import Nicaragua from './../public/images/countries/nicaragua.jpg'
import Panama from './../public/images/countries/panama.jpg'
import Peru from './../public/images/countries/peru.jpg'
import Png from './../public/images/countries/png.jpg'
import Samoa from './../public/images/countries/samoa.jpg'
import Singapore from './../public/images/countries/singapore.jpg'
import SouthAfrica from './../public/images/countries/southafrica.jpg'
import Spain from './../public/images/countries/spain.jpg'
import Switzerland from './../public/images/countries/switzerland.jpg'
import Taiwan from './../public/images/countries/taiwan.jpg'
import Tanzania from './../public/images/countries/tanzania.jpg'
import Tunisia from './../public/images/countries/tunisia.jpg'
import Turkey from './../public/images/countries/turkey.jpg'
import Uae from './../public/images/countries/uae.jpg'
import Usa from './../public/images/countries/usa.jpg'
import Zimbabwe from './../public/images/countries/zimbabwe.jpg'




export default function Slides({url}){
    const images = {
        "Australia": Australia,
        "Bahrain": Bahrain,
        "Botswana": Botswana,
        "Brazil": Brazil,
        "Canada": Canada,
        "China": China,
        "Egypt": Egypt,
        "Fiji": Fiji,
        "France": France,
        "Greece": Greece,
        "Greenland": Greenland,
        "Guatemala": Guatemala,
        "Haiti": Haiti,
        "Honduras": Honduras,
        "India": India,
        "Italy": Italy,
        "Jamaica": Jamaica,
        "Japan": Japan,
        "Kenya": Kenya,
        "Madagascar": Madagascar,
        "Malaysia": Malaysia,
        "Mexico": Mexico,
        "Micronesia": Micronesia,
        "Morocco": Morocco,
        "Netherlands": Netherlands,
        "New Zealand": NewZealand,
        "Nicaragua": Nicaragua,
        "Panama": Panama,
        "Peru": Peru,
        "Papua New Guinea": Png,
        "Samoa": Samoa,
        "Singapore": Singapore,
        "South Africa": SouthAfrica,
        "Spain": Spain,
        "Switzerland": Switzerland,
        "Taiwan": Taiwan,
        "Tanzania": Tanzania,
        "Tunisia": Tunisia,
        "Turkey": Turkey,
        "United Arab Emirates": Uae,
        "United States of America": Usa,
        "Zimbabwe": Zimbabwe
    }

    return (
        <div className='relative aspect-video md:aspect-square md:w-[75%] md:h-[50vh] md:mx-auto'>
            <Image
            src = {images[url]}
            alt = "View of the country"
            fill={true}
            className='mx-auto px-5 md:px-0'
            />
        </div>
    )
}