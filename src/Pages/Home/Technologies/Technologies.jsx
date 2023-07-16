import Marquee from "react-fast-marquee";
import { BsStripe } from "react-icons/bs";
import { DiJavascript1 } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';

const Technologies = () => {
    return (
        <section className="lg:w-[90%] mx-auto px-2 sm:px-5 lg:px-0 text-white font-semibold">
            <Marquee
                speed={70}
                className='rounded-lg'>
                <div
                    className="flex flex-col gap-3 justify-center items-center p-3 rounded-lg 
                    w-[160px] sm:w-[200px] lg:w-[240px] h-[100px] md:h-[160px] bg-yellow-400 mx-4 md:mx-8 lg:mx-10">
                    <DiJavascript1 size={40} className="bg-white text-black rounded-lg" />
                    <h2 className="text-xl text-center ">JavaScript</h2>
                </div>
                <div
                    className="flex flex-col gap-3 justify-center items-center p-3 rounded-lg w-[160px] sm:w-[200px] lg:w-[240px] h-[100px] md:h-[160px] bg-sky-500">
                    <FaReact size={40} />
                    <h2 className="text-xl text-center">React</h2>
                </div>
                <div
                    className="flex flex-col gap-3 justify-center items-center p-3 border rounded-lg w-[160px] sm:w-[200px] lg:w-[240px] h-[100px] md:h-[160px] bg-[#3C873A] mx-4 md:mx-8 lg:mx-10">
                    <SiExpress size={40} />
                    <h2 className="text-xl text-center">Express.js</h2>
                </div>
                <div
                    className="flex flex-col gap-3 justify-center items-center p-3 border rounded-lg w-[160px] sm:w-[200px] lg:w-[240px] h-[100px] md:h-[160px] bg-sky-600">
                    <SiTailwindcss size={40} />
                    <h2 className="text-xl text-center">Tailwind CSS</h2>
                </div>
                <div
                    className="flex flex-col gap-3 justify-center items-center p-3 border rounded-lg w-[160px] sm:w-[200px] lg:w-[240px] h-[100px] md:h-[160px] bg-[#4DB33D] mx-4 md:mx-8 lg:mx-10">
                    <SiMongodb size={40} />
                    <h2 className="text-xl text-center">MongoDB</h2>
                </div>
                <div
                    className="flex flex-col gap-3 justify-center items-center p-3 border rounded-lg w-[160px] sm:w-[200px] lg:w-[240px] h-[100px] md:h-[160px] bg-blue-600">
                    <BsStripe size={40} />
                    <h2 className="text-xl text-center">Stripe</h2>
                </div>
            </Marquee>
        </section>
    );
};

export default Technologies;