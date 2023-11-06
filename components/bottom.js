import Link from "next/link"
import Image from "next/image"
import LogoNoBG from "./../public/images/logo-nobg.png"


export default function Bottom() {
    return(
        <div>
        <div className='w-full md:flex justify-center items-center relative py-10'>
        <div className="justify-center items-center w-full">
        <Image
        src = {LogoNoBG}
        alt = "Logo"
        width = {100}
        height = {100}
        className='mx-auto pb-5'
      />
        </div>

        <div className='md:absolute md:text-right text-center mr-10 w-full md:bottom-[45%]'>
        <Link href='/contact'>
      <button className='w-1/7 bg-gray-600 px-3 py-1 rounded-md text-white'>Contact Us</button>
      </Link>
      </div>
      </div>
        </div>
    )
}