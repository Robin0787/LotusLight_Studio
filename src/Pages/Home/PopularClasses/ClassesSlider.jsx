import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { EffectCoverflow, Pagination } from "swiper";

const ClassesSlider = () => {

    return (
        <div className='lg:w-[90%] mx-auto rounded-xl shadow-2xl  shadow-blue-200 p-5  md:pb-10 md:px-10 mt-5'>
            <div>
            <h2
                className="text-2xl text-center md:text-4xl leading-snug 
                font-thin px-4 sm:px-5">Our Popular <span className="text-blue-600 font-normal">Classes</span></h2>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"3"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper w-full py-12"
            >
                <SwiperSlide className='bg-center bg-cover '>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-full' />
                </SwiperSlide>
                <SwiperSlide className='bg-center bg-cover '>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='w-full' />
                </SwiperSlide>
                <SwiperSlide className='bg-center bg-cover '>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='w-full' />
                </SwiperSlide>
                <SwiperSlide className='bg-center bg-cover '>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='w-full' />
                </SwiperSlide>
                <SwiperSlide className='bg-center bg-cover '>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" className='w-full' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ClassesSlider;