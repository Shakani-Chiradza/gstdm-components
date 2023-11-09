import Image from 'next/image'
import Australia from './../public/images/countries/australia1.jpg'
import Bahrain from './../public/images/countries/bahrain1.jpg'
import Botswana from './../public/images/countries/botswana1.jpg'
import Brazil from './../public/images/countries/brazil1.jpg'
import Canada from './../public/images/countries/canada1.jpg'
import China from './../public/images/countries/china1.jpg'
import Egypt from './../public/images/countries/egypt1.jpg'
import Fiji from './../public/images/countries/fiji1.jpg'
import France from './../public/images/countries/france1.jpg'
import Greece from './../public/images/countries/greece1.jpg'
import Greenland from './../public/images/countries/greenland1.jpg'
import Guatemala from './../public/images/countries/guatemala1.jpg'
import Haiti from './../public/images/countries/haiti1.jpg'
import Honduras from './../public/images/countries/honduras1.jpg'
import India from './../public/images/countries/india1.jpg'
import Italy from './../public/images/countries/italy1.jpg'
import Jamaica from './../public/images/countries/jamaica1.jpg'
import Japan from './../public/images/countries/japan1.jpg'
import Kenya from './../public/images/countries/kenya1.jpg'
import Madagascar from './../public/images/countries/madagascar1.jpg'
import Malaysia from './../public/images/countries/malaysia1.jpg'
import Mexico from './../public/images/countries/mexico1.jpg'
import Micronesia from './../public/images/countries/micronesia1.jpg'
import Morocco from './../public/images/countries/morocco1.jpg'
import Netherlands from './../public/images/countries/netherlands1.jpg'
import NewZealand from './../public/images/countries/newzealand1.jpg'
import Nicaragua from './../public/images/countries/nicaragua1.jpg'
import Panama from './../public/images/countries/panama1.jpg'
import Peru from './../public/images/countries/peru1.jpg'
import Png from './../public/images/countries/png1.jpg'
import Samoa from './../public/images/countries/samoa1.jpg'
import Singapore from './../public/images/countries/singapore1.jpg'
import SouthAfrica from './../public/images/countries/southafrica1.jpg'
import Spain from './../public/images/countries/spain1.jpg'
import Switzerland from './../public/images/countries/switzerland1.jpg'
import Taiwan from './../public/images/countries/taiwan1.jpg'
import Tanzania from './../public/images/countries/tanzania1.jpg'
import Tunisia from './../public/images/countries/tunisia1.jpg'
import Turkey from './../public/images/countries/turkey1.jpg'
import Uae from './../public/images/countries/uae1.jpg'
import Usa from './../public/images/countries/usa1.jpg'
import Zimbabwe from './../public/images/countries/zimbabwe1.jpg'




export default function SlidesAgain({url}){
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
        <div className='relative aspect-video'>
            <Image
            src = {images[url]}
            alt = "View of the country"
            fill={true}
            />
        </div>
    )
}