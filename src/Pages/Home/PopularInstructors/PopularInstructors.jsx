import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from "react";
import { Link } from "react-router-dom";
import SliderCard from "./SliderCard";


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
    const { data: PopularInstructors = [] } = useQuery({
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
                        {

                            PopularInstructors && PopularInstructors.map((item, index) => 
                            <SliderCard item={item} index={index} key={item._id}/>)
                        }
                    </div>
                </div>
            </article>
        </section>
    )
};



export default PopularInstructors;