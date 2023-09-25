import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from './../public/images/logo.png'


export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  useEffect(()=>{
    console.log(window.scrollY)
  }, []);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <nav className="w-full bg-gray-200 shadow fixed z-30">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <Image
                  src = {Logo}
                  alt = "beach picture"
                  width = {50}
                  height = {50}
                  className='rounded'
                />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="">
                  <Link href="/">
                  Destinations
                  </Link>
                </li>
                <li className="">
                  <Link href="/blogs">
                  Hotels & Lodges
                  </Link>
                </li>
                <li className="">
                  <Link href="/about">
                  Villas
                  </Link>
                </li>
                <li className="">
                  <Link href="/contact">
                  Your Desires
                  </Link>
                </li>
                <li className="">
                  <Link href="/contact">
                  Routes
                  </Link>
                </li>
                <li className="">
                  <Link href="/contact">
                  Well-being
                  </Link>
                </li>
                <li className="text-white bg-gray-600 p-1 rounded-md">
                  <Link href="/contact">
                  Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}