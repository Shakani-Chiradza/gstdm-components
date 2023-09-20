import Image from "next/image"
import Logo from "./../public/images/logo.png"


const Navbar = () => {
    return(
        <div className="bg-gray-300 flex fixed w-full">
             <Image
            src = {Logo}
            alt = "logo"
            width = {100}
            height = {100}
            />
            <ul className="flex items-center grow justify-end pr-2 text-gray-600">
                <li className="px-2">Destinations</li>
                <li className="px-2">Hotels & Lodges</li>
                <li className="px-2">Villas</li>
                <li className="px-2">Your Desires</li>
                <li className="px-2">Routes</li>
                <li className="px-2">Well-being</li>
                <li className="px-2">Blog</li>
                <li className="px-2">The Totem Spirit</li>
                <li className="px-2 bg-gray-600 text-white py-1 rounded-md">Contact Us</li>
            </ul>
        </div>
    )

}

export default Navbar