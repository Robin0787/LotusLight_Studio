import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import img1 from "../../../assets/Extra/img1.jpg";
import img2 from "../../../assets/Extra/img2.jpg";
import img3 from "../../../assets/Extra/img3.jpg";
import img4 from "../../../assets/Extra/img4.jpg";

const ExtraSection = () => {
    return (
        <section>
            <section className='md:flex flex-row-reverse justify-between items-center'>
                <article className='w-full md:w-1/2 p-2 md:p-5 space-y-3 text-center'>
                    <Slide direction='right'>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl leading-snug 
                font-thin px-4 sm:px-5">Explore the World through The Eyes</h1>
                    </Slide>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <h2 className="text-2xl md:text-xl lg:text-3xl leading-snug 
                font-thin px-4 sm:px-5">Capture The World Through Photography</h2>
                    </Fade>
                    <div>
                        <p className='text-xs md:text-sm text-center text-gray-500 mx-auto w-[80%]'>We Provide multiple courses to make yourself expert. Go with our course it will bring you a new World. Explore and Capture the World each time!</p>
                    </div>
                    <button>
                        <Link
                            to={'/classes'}
                            className='text-sm text-gray-100 rounded-full px-5 py-2 font-medium ring-2 ring-blue-400 bg-blue-600 hover:text-blue-500 hover:bg-white hove duration-300'>
                            Explore Classes
                        </Link>
                    </button>
                </article>
                <article className='md:w-1/2 p-2 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-0'>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <img src={img1} alt="" className='object-cover rounded-md border-gray-300 border-2' />
                    </Fade>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <img src={img2} alt="" className='object-cover rounded-md border-gray-300 border-2' />
                    </Fade>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <img src={img3} alt="" className='object-cover rounded-md border-gray-300 border-2' />
                    </Fade>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <img src={img4} alt="" className='object-cover rounded-md border-gray-300 border-2' />
                    </Fade>
                </article>
            </section>
        </section>
    );
};

export default ExtraSection;