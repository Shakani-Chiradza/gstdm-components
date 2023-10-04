import Image from "next/image";
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Beach from './../public/images/beach.jpg'
import Cave from './../public/images/cave.jpg'
import Dunes from './../public/images/dunes.jpg'
import Gorge from './../public/images/gorge.jpg'
import Maldives from './../public/images/maldives.jpg'
import Paris from './../public/images/paris.jpg'
import Balloon from './../public/images/balloon.jpg'

export default function Carousel() {
    
  var photos = [Beach, Cave, Dunes, Gorge, Maldives, Paris, Balloon]

  const [currentSlide, setCurrentSlide] = useState(0);
  var newSlide = currentSlide

  useEffect(()=>{
   const timer = setInterval(handleNextSlide, 5000);

   return () => {
    clearInterval(timer)
   }
  });

  const handleNextSlide = () => {
    newSlide = currentSlide === photos.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    newSlide = currentSlide === 0 ? photos.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative">
      <div className="w-full md:h-[100vh] h-[30vh] flex overflow-hidden m-auto">
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
                  priority = {true}
                  className="imgStyle"
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl md:inset-y-1/2 top-[40%] cursor-pointer text-gray-400 z-20"
      />
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl md:inset-y-1/2 top-[40%] top cursor-pointer text-gray-400 z-20"
      />

      <div className="absolute flex justify-center p-2 align-bottom bottom-1 left-[20%] right-[20%]">
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