import { AiOutlineCamera } from 'react-icons/ai';
import { BsArrowUpRight, BsCamera, BsPencil } from 'react-icons/bs';

const Categories = () => {
    return (
        <section className="lg:w-[90%] mx-auto my-5 md:my-10 md:mb-20  py-10 px-5 lg:px-0">
                <article className='flex flex-wrap gap-5 justify-center lg:justify-between items-center'>
                    <div className="flex flex-col gap-4 shadow-sm shadow-blue-100 hover:shadow-xl hover:shadow-blue-200  border-l-4 border-b-4 border-blue-100 duration-300 w-[240px] h-[200px] justify-center items-center rounded-lg">
                        <BsCamera size={30}/>
                        <h2 className="text-xl text-center">Fundamentals</h2>
                    </div>
                    <div className="flex flex-col gap-4 shadow-sm shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 border-b-4 border-blue-100 duration-300 w-[240px] h-[200px] justify-center items-center rounded-lg">
                        <BsArrowUpRight size={30}/>
                        <h2 className="text-xl text-center">Advanced Techniques</h2>
                    </div>
                    <div className="flex flex-col gap-4 shadow-sm shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 border-b-4 border-blue-100 duration-300 w-[240px] h-[200px] justify-center items-center rounded-lg">
                        <AiOutlineCamera size={30}/>
                        <h2 className="text-xl text-center">Specialized Genres</h2>
                    </div>
                    <div className="flex flex-col gap-4 shadow-sm shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 border-r-4 border-b-4 border-blue-100 duration-300 w-[240px] h-[200px] justify-center items-center rounded-lg">
                        <BsPencil size={30}/>
                        <h2 className="text-xl text-center">Editing</h2>
                    </div>
                </article>
        </section>
    );
};

export default Categories;