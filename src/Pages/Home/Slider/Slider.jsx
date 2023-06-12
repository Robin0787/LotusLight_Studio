import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../../assets/Home/Slider/img1.png";
import img2 from "../../../assets/Home/Slider/img2.png";
import img3 from "../../../assets/Home/Slider/img3.png";
import img4 from "../../../assets/Home/Slider/img4.png";
import img5 from "../../../assets/Home/Slider/img5.png";
import "./Slider.css";

const AdaptiveHeight = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px"
  }
  slider.on("created", updateHeight)
  slider.on("slideChanged", updateHeight)
}

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [AdaptiveHeight]
  )

  return (
    <>
      <div className="navigation-wrapper relative text-white">
        <div ref={sliderRef} className="keen-slider">
          {/* First Slider Item */}
          <div className="keen-slider__slide number-slide1 h-[500px]">
            <div className='h-full flex flex-col sm:flex-row justify-center items-center'>
              <img src={img1} className='h-1/2 sm:h-full w-full object-cover inset-1 sm:w-1/2 lg:w-2/5 sm:shadow-2xl' />
              <div className='text-center md:space-y-3 md:w-1/2 p-4'>
                <h2
                  className="text-2xl md:text-4xl lg:text-5xl leading-snug 
                font-bold px-4 sm:px-0">Unleash Your Creativity Through The Lens</h2>
                <p className='text-xs md:text-sm text-center lg:w-[95%] text-gray-100 mx-auto'>Discover the power of your creative vision as you learn the art of photography with our expert instructors. From mastering composition to understanding lighting techniques, we'll guide you on a journey to unlock your true potential and capture stunning images that speak volumes</p>
                <Link
                  to={'/classes'}
                  className='text-sm md:text-base  rounded-full px-5 py-2 md:px-10 md:py-3 font-medium border-2
                  hover:bg-white hover:text-blue-700 duration-300'>
                  Explore Our Courses
                </Link>
              </div>
            </div>
          </div>
          {/* Second Slider Item */}
          <div className="keen-slider__slide number-slide2 h-[500px]">
            <div className='h-full flex flex-col sm:flex-row justify-center items-center'>
              <img src={img2} className='h-1/2 sm:h-full w-full object-cover inset-1 sm:w-1/2 lg:w-2/5 sm:shadow-2xl' />
              <div className='text-center md:space-y-3 md:w-1/2 p-4'>
                <h2
                  className="text-2xl md:text-4xl lg:text-5xl leading-snug 
                font-bold px-4 sm:px-0">Master the Art of Photography with Expert Instructors</h2>
                <p className='text-xs md:text-sm text-center lg:w-[95%] text-gray-100 mx-auto'>Join our photography school and embark on a transformative journey to become a master photographer. Our experienced instructors will provide comprehensive guidance, teaching you the technical skills, artistic principles, and industry insights necessary to excel in the world of photography</p>
                <Link
                  to={'/classes'}
                  className='text-sm md:text-base  rounded-full px-5 py-2 md:px-10 md:py-3 font-medium border-2
                  hover:bg-white hover:text-orange-600 duration-300'>
                  Explore Our Courses
                </Link>
              </div>
            </div>
          </div>
          {/* Third Slider Item */}
          <div className="keen-slider__slide number-slide3 h-[500px]">
            <div className='h-full flex flex-col sm:flex-row justify-center items-center'>
              <img src={img3} className='h-1/2 sm:h-full w-full object-cover inset-1 sm:w-1/2 lg:w-2/5 sm:shadow-2xl' />
              <div className='text-center md:space-y-3 md:w-1/2 p-4'>
                <h2
                  className="text-2xl md:text-4xl lg:text-5xl leading-snug 
                font-bold px-4 sm:px-0">Capture Moments. Tell Stories. Make Memories</h2>
                <p className='text-xs md:text-sm text-center lg:w-[95%] text-gray-100 mx-auto'> Photography is more than just taking pictures; it's about freezing moments in time and preserving memories that last a lifetime. At our photography school, we teach you how to go beyond the surface, enabling you to tell compelling stories through your photographs and create meaningful connections with your subjects</p>
                <Link
                  to={'/classes'}
                  className='text-sm md:text-base  rounded-full px-5 py-2 md:px-10 md:py-3 font-medium border-2
                  hover:bg-white hover:text-purple-900 duration-300'>
                  Explore Our Courses
                </Link>
              </div>
            </div>
          </div>
          {/* Fourth Slider */}
          <div className="keen-slider__slide number-slide4 h-[500px]">
            <div className='h-full flex flex-col sm:flex-row-reverse justify-center items-center'>
              <img src={img4} className='h-1/2 sm:h-full w-full object-cover inset-1 sm:w-1/2 lg:w-2/5 sm:shadow-2xl' />
              <div className='text-center md:space-y-3 md:w-1/2 p-4'>
                <h2
                  className="text-2xl md:text-4xl lg:text-5xl leading-snug 
                font-bold px-4 sm:px-0">Unlock Your Potential in the World of Photography</h2>
                <p className='text-xs md:text-sm text-center lg:w-[95%] text-gray-100 mx-auto'>Whether you're a beginner or an experienced photographer looking to enhance your skills, our photography school is here to help you unleash your full potential. With a comprehensive curriculum, hands-on training, and personalized guidance, we provide the tools and knowledge you need to thrive in the dynamic and ever-evolving field of photography</p>
                <Link
                  to={'/classes'}
                  className='text-sm md:text-base  rounded-full px-5 py-2 md:px-10 md:py-3 font-medium border-2
                  hover:bg-white hover:text-teal-400 duration-300'>
                  Explore Our Courses
                </Link>
              </div>
            </div>
          </div>
          {/* Fifth Slider */}
          <div className="keen-slider__slide number-slide5 h-[500px]">
            <div className='h-full flex flex-col sm:flex-row-reverse justify-center items-center'>
              <img src={img5} className='h-1/2 sm:h-full w-full object-cover inset-1 sm:w-1/2 lg:w-2/5 sm:shadow-2xl' />
              <div className='text-center md:space-y-3 md:w-1/2 p-4'>
                <h2 className="text-2xl md:text-4xl lg:text-5xl leading-snug 
                font-bold px-4 sm:px-0">Discover the Beauty of the World Through Your Lens</h2>
                <p className='text-xs md:text-sm text-center lg:w-[95%] text-gray-100 mx-auto'>Step into a world of wonder and explore the beauty that surrounds us. Our photography school invites you to embark on a captivating journey, where you'll learn to capture the breathtaking landscapes, vibrant cultures, and intricate details that make our world so extraordinary. Unleash your artistic eye and let your photographs become windows to new perspectives</p>
                <Link
                  to={'/classes'}
                  className='text-sm md:text-base  rounded-full px-5 py-2 md:px-10 md:py-3 font-medium border-2
                  hover:bg-white hover:text-pink-700 duration-300'>
                  Explore Our Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className='flex justify-between absolute top-1/2 -translate-y-1/2 w-full'>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={25}
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default Slider;