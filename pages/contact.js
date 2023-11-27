import Carousel from "@/components/carousel"
import Head from "next/head"
import Script from "next/script"

export default function Contact() {
    return(
        <div>
        <Carousel phrase="GET IN TOUCH" line="WITH US"/>
            <div>
                <p className="text-center pt-10 text-3xl font-semibold mb-10 font-mono text-gray-600">Contact Us</p>
                <p className="justify-center w-[80%] mx-auto text-gray-600 font-mono italic">Getaway Specialised Tours and Destination Management operates exclusively by appointment. Our office hours are from 08:00 to 17:00 GMT+2, however you can email us or contact us through the form below at any time.
                We make it a point to have meetings with all our clients allowing us to showcase all the destinations we cover and our available packages. You can also directly contact our representatives during business hours through the contact details below.</p>

                <hr className='w-[80%] h-[1px] mx-auto bg-gray-300 border-0 rounded my-5'/>
                <br/>
            </div>
            <div className="w-[80%] mx-auto">
                <p className="font-semibold text-lg font-mono text-gray-600">Agency Contact Details</p>
                <p className="text-gray-600 font-mono">Address: <span className="italic">180 Fife Avenue, Harare</span></p>
                <p className="text-gray-600 font-mono">Email: <span className="italic">info@getawayspecialisedtours.com</span></p>
                <p className="text-gray-600 font-mono">Tel: <span className="italic">+263 8688 007619</span></p>
                <p className="text-gray-600 font-mono">Phone: <span className="italic">+263 71 864 5863</span></p>
            </div>

            <div className="w-[80%] mx-auto mt-10">
                {/* <form className="w-full">
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <input id='firstname' placeholder="First names" required className="border border-gray-400 rounded-sm mb-5 px-3 py-2 md:w-[95%] w-full"/>
                        </div>
                        <div className="w-full">
                            <input id='lastname' placeholder="Last names" className="border border-gray-400 rounded-sm mb-5 px-3 py-2 w-full"/>
                        </div>
                    </div>
                    <div className="w-full">
                        <input type="email" id='email' placeholder="Email Adress" required className="border border-gray-400 rounded-sm mb-5 px-3 py-2 w-full"/>
                    </div>
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <input id='countrycode' placeholder="Country Code" required className="border border-gray-400 rounded-sm mb-5 px-3 py-2 md:w-[95%] w-full"/>
                        </div>
                        <div className="w-full">
                            <input id='number' placeholder="Phone Number" required className="border border-gray-400 rounded-sm mb-5 px-3 py-2 w-full"/>
                        </div>
                    </div>
                    <div className="w-full">
                        <textarea id='message' rows='10' placeholder="Type your message here" required className="border border-gray-400 rounded-sm mb-5 px-3 py-2 w-full"/>
                    </div>

                    <div>
                        <button className="bg-gray-600 rounded text-white px-3 py-2" type="submit">Submit</button>
                    </div>
                </form> */}
            </div>
        </div>
    )
}