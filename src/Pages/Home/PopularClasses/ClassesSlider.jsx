import React, { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { EffectCoverflow, Pagination } from "swiper";
import ClassCard from '../../Classes/ClassCard';

const ClassesSlider = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);
    const { data: popularClasses = [], refetch } = useQuery({
        queryKey: ['popular-classes'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/popular-classes`);
            return res.data;
        }
    })

    // Updating the slidesPerView value based on the window width
    const updateSlidesPerView = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 640) {
            setSlidesPerView(1);
        } else if (windowWidth < 1024) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(3);
        }
    };

    useEffect(() => {
        // Updating slidesPerView on component mount and window resize
        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);


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
                slidesPerView={slidesPerView}
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
                {
                    popularClasses && popularClasses.map((item) => (
                        <SwiperSlide className='px-5' key={item._id}>
                            <ClassCard item={item} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default ClassesSlider;