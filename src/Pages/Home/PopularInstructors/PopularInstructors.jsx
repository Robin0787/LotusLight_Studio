import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/Instructors/instructor1.png";
import img2 from "../../../assets/Instructors/instructor2.png";
import img3 from "../../../assets/Instructors/instructor3.png";
import img4 from "../../../assets/Instructors/instructor4.png";
import img5 from "../../../assets/Instructors/instructor5.png";
import img6 from "../../../assets/Instructors/instructor6.png";

const carousel = (slider) => {
    const z = 300
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}


const PopularInstructors = () => {
    const { data: popularInstructors = [] } = useQuery({
        queryKey: ['popular-instructors'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/popular-instructors`);
            return res.data;
        }
    });


    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )



    return (
        <section className="my-10 lg:my-20 flex flex-col lg:flex-row justify-between items-center gap-5 py-8 lg:py-16">
            <article className='text-center space-y-3 md:space-y-5 lg:w-1/2 p-4'>
                <h2
                    className="text-2xl md:text-4xl lg:text-5xl leading-snug 
                font-thin px-4 sm:px-5">Meet Our Acclaimed <span className="text-blue-600 font-normal">Instructors</span></h2>
                <p
                    className='text-xs md:text-sm text-center text-gray-500 mx-auto w-[80%]'>Discover the power of your creative vision as you learn the art of photography with our expert instructors. From mastering composition to understanding lighting techniques, we'll guide you on a journey to unlock your true potential and capture stunning images that speak volumes</p>
                <button>
                    <Link
                        to={'/instructors'}
                        className='text-sm text-gray-600 rounded-full px-5 py-2 font-medium ring-2 ring-blue-400
                  hover:text-white hover:bg-blue-600 duration-300'>
                        See All
                    </Link>
                </button>
            </article>
            <article className="wrapper lg:w-1/2 ">
                <div className="scene">
                    <div className="carousel keen-slider" ref={sliderRef}>
                        {/* {
                            instructors && instructors.map((item, index) =>
                                <SliderCard item={item} index={index} key={item._id} />)
                        } */}
                        <div className={`carousel__cell number-slide1 cursor-pointer`}>
                            <div className="flex flex-col justify-between h-full p-3 gap-1 md:gap-3" >
                                <img src={img1} alt=""
                                    className="lg:scale-110 h-40 sm:h-52" />
                                <div className="flex justify-between items-center gap-2">
                                    <button
                                        className="text-white ring-1 ring-white rounded-full  text-[6px] sm:text-xs px-[2px] sm:px-2 sm:py-[2px]md:px-3 md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {8}
                                    </button>
                                    <button
                                        className="text-white ring-1 ring-white rounded-full  text-[6px] sm:text-xs px-[2px] sm:px-2 sm:py-[2px]md:px-3 md:py-1 hover:text-blue-500 hover:bg-white duration-300">Students: {15}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel__cell number-slide2 cursor-pointer`}>
                            <div className="flex flex-col justify-between h-full p-3 gap-1 md:gap-3" >
                                <img src={img2} alt=""
                                    className="lg:scale-110 h-40 sm:h-52" />
                                <div className="flex justify-between items-center gap-2">
                                    <button
                                        className="text-white ring-1 ring-white rounded-full  text-[6px] sm:text-xs px-[2px] sm:px-2 sm:py-[2px]md:px-3 md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {7}
                                    </button>
                                    <button
                                        className="text-white ring-1 ring-white rounded-full  text-[6px] sm:text-xs px-[2px] sm:px-2 sm:py-[2px]md:px-3 md:py-1 hover:text-blue-500 hover:bg-white duration-300">Students: {13}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel__cell number-slide3 cursor-pointer`}>
                            <div className="flex flex-col justify-between h-full p-3 gap-1 md:gap-3" >
                                <img src={img3} alt=""
                                    className="lg:scale-110 h-40 sm:h-52" />
                                <div className="flex justify-between items-center gap-2">
                                    <button
                                        className="text-white ring-1 ring-white rounded-full  text-[6px] sm:text-xs px-[2px] sm:px-2 sm:py-[2px]md:px-3 md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {6}
                                    </button>
                                    <button
                                        className="text-white ring-1 ring-white rounded-full  text-[6px] sm:text-xs px-[2px] sm:px-2 sm:py-[2px]md:px-3 md:py-1 hover:text-blue-500 hover:bg-white duration-300">Students: {12}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel__cell number-slide4 cursor-pointer`}>
                            <div className="flex flex-col justify-between h-full p-3 gap-1 md:gap-3" >
                                <img src={img4} alt=""
                                    className="lg:scale-110 h-40 sm:h-52" />
                                <div className="flex justify-between items-center gap-2">
                                    <button
                                        className="text-white ring-1 ring-white rounded-full  text-[6px] sm:text-xs px-[2px] sm:px-2 sm:py-[2px]md:px-3 md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {6}
                                    </button>
                                    <button
                                        className="text-white ring-1 ring-white rounded-full  text-[6px] sm:text-xs px-[2px] sm:px-2 sm:py-[2px]md:px-3 md:py-1 hover:text-blue-500 hover:bg-white duration-300">Students: {11}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel__cell number-slide5 cursor-pointer`}>
                            <div className="flex flex-col justify-between h-full p-3 gap-1 md:gap-3" >
                                <img src={img5} alt=""
                                    className="lg:scale-110 h-40 sm:h-52" />
                                <div className="flex justify-between items-center gap-2">
                                    <button
                                        className="text-white ring-1 ring-white rounded-full  text-[6px] sm:text-xs px-[2px] sm:px-2 sm:py-[2px]md:px-3 md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {5}
                                    </button>
                                    <button
                                        className="text-white ring-1 ring-white rounded-full  text-[6px] sm:text-xs px-[2px] sm:px-2 sm:py-[2px]md:px-3 md:py-1 hover:text-blue-500 hover:bg-white duration-300">Students: {10}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel__cell number-slide6 cursor-pointer`}>
                            <div className="flex flex-col justify-between h-full p-3 gap-1 md:gap-3" >
                                <img src={img6} alt=""
                                    className="lg:scale-110 h-40 sm:h-52" />
                                <div className="flex justify-between items-center gap-2">
                                    <button
                                        className="text-white ring-1 ring-white rounded-full  text-[6px] sm:text-xs px-[2px] sm:px-2 sm:py-[2px]md:px-3 md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {5}
                                    </button>
                                    <button
                                        className="text-white ring-1 ring-white rounded-full  text-[6px] sm:text-xs px-[2px] sm:px-2 sm:py-[2px]md:px-3 md:py-1 hover:text-blue-500 hover:bg-white duration-300">Students: {7}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
};



export default PopularInstructors;