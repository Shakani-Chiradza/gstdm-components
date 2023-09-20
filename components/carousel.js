import Beach from './../public/images/beach.jpg'
import Image from 'next/image'

const Carousel = () => {
    return(
        <div className='mx-auto'>
            <Image
            src = {Beach}
            alt = "beach picture"
            width = {1400}
            height = {600}
            />
        </div>
    )

}

export default Carousel