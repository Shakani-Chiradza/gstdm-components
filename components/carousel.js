import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Beach from './../public/images/beach.jpg'
import Cave from './../public/images/cave.jpg'
import Dunes from './../public/images/dunes.jpg'
import Egypt from './../public/images/egypt.jpg'
import Falls from './../public/images/falls.jpg'
import Water from './../public/images/water.jpg'
import Gorge from './../public/images/gorge.jpg'


export default function Carousel() {
    var photos = [Beach, Cave, Dunes, Egypt, Falls, Water, Gorge]

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === photos.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? photos.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="">
      <div className="w-full md:h-[90vh] h-fit flex overflow-hidden m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="w-full h-full"
        >
          {photos.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  key={image.id}
                  src={image}
                  alt='images'
                  width = {1400}
                  height = {600}
                  className="animate-fadeIn"
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl md:inset-y-1/2 top-32 cursor-pointer text-gray-400 z-20"
      />
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl md:inset-y-1/2 top-32 top cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2 top-0">
        {photos.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}