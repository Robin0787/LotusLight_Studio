import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from "react";
import instructor1 from "../../../assets/Instructors/instructor1.png";
import instructor2 from "../../../assets/Instructors/instructor2.png";
import instructor3 from "../../../assets/Instructors/instructor3.png";
import instructor4 from "../../../assets/Instructors/instructor4.png";
import instructor5 from "../../../assets/Instructors/instructor5.png";
import instructor6 from "../../../assets/Instructors/instructor6.png";


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
                <p className='text-xs md:text-sm text-center text-gray-500 mx-auto w-[80%]'>Discover the power of your creative vision as you learn the art of photography with our expert instructors. From mastering composition to understanding lighting techniques, we'll guide you on a journey to unlock your true potential and capture stunning images that speak volumes</p>
                <button
                    className='text-sm text-gray-600 rounded-full px-5 py-2 font-medium ring-2 ring-blue-400
                  hover:text-white hover:bg-blue-600 duration-300'>
                    Explore Courses
                </button>
            </article>
            <article className="wrapper lg:w-1/2 ">
                <div className="scene">
                    <div className="carousel keen-slider" ref={sliderRef}>
                        {/* First Slider Item */}
                        <div className="carousel__cell number-slide1 cursor-pointer">
                            <div className="flex flex-col justify-between h-full p-3">
                                <img src={instructor1} alt="" 
                                className="object-fill lg:scale-110" />
                                <div className="flex justify-between items-center gap-2">
                                    <button 
                                    className="text-white ring-2 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {10}
                                    </button>
                                    <button 
                                    className="text-white ring-2 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1  hover:text-blue-500 hover:bg-white duration-300">Students: {240}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Second Slider Item */}
                        <div className="carousel__cell number-slide2 cursor-pointer">
                        <div className="flex flex-col justify-between h-full p-3">
                                <img src={instructor2} alt="" 
                                className="object-fill lg:scale-110" />
                                <div className="flex justify-between items-center gap-2">
                                    <button 
                                    className="text-white ring-2 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {8}
                                    </button>
                                    <button 
                                    className="text-white ring-2 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1  hover:text-blue-500 hover:bg-white duration-300">Students: {210}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Third Slider Item*/}
                        <div className="carousel__cell number-slide3 cursor-pointer">
                        <div className="flex flex-col justify-between h-full p-3">
                                <img src={instructor3} alt="" 
                                className="object-fill lg:scale-110" />
                                <div className="flex justify-between items-center gap-2">
                                    <button 
                                    className="text-white ring-2 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {7}
                                    </button>
                                    <button 
                                    className="text-white ring-2 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1  hover:text-blue-500 hover:bg-white duration-300">Students: {200}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Fourth Slider Item */}
                        <div className="carousel__cell number-slide4 cursor-pointer">
                        <div className="flex flex-col justify-between h-full p-3">
                                <img src={instructor4} alt="" 
                                className="object-fill lg:scale-110" />
                                <div className="flex justify-between items-center gap-2">
                                    <button 
                                    className="text-white ring-2 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {6}
                                    </button>
                                    <button 
                                    className="text-white ring-2 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1  hover:text-blue-500 hover:bg-white duration-300">Students: {170}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Fifth Slider Item */}
                        <div className="carousel__cell number-slide5 cursor-pointer">
                        <div className="flex flex-col justify-between h-full p-3 pt-2">
                                <img src={instructor5} alt="" 
                                className="object-fill lg:scale-110" />
                                <div className="flex justify-between items-center gap-2">
                                    <button 
                                    className="text-white ring-2 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {5}
                                    </button>
                                    <button 
                                    className="text-white ring-2 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1  hover:text-blue-500 hover:bg-white duration-300">Students: {160}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Sixth Slider Item */}
                        <div className="carousel__cell number-slide6 cursor-pointer">
                        <div className="flex flex-col justify-between h-full p-3">
                                <img src={instructor6} alt="" 
                                className="object-fill lg:scale-110" />
                                <div className="flex justify-between items-center gap-2">
                                    <button 
                                    className="text-white ring-2 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {3}
                                    </button>
                                    <button 
                                    className="text-white ring-2 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1  hover:text-blue-500 hover:bg-white duration-300">Students: {140}
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