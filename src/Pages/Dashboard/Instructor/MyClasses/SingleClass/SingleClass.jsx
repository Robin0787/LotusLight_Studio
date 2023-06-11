import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const SingleClass = ({item}) => {
    const {className, image, price, seats, status} = item;
    const colors = ['#ff3811', '#40afff', '#ff4b40', '#ff26ff', '#40fff2'];

    function getColor() {
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }
    const color = getColor();
    return (
        <article className='rounded-lg shadow-xl shadow-blue-200 p-4 flex flex-col justify-between gap-2'>
            <img src={image} alt="" className={` object-cover rounded-lg h-2/3`} style={{ backgroundColor: color}} />
            <div>
                <h2 className='text-lg tracking-[2px]'>{className}</h2>
                <p className='text-sm font-thin tracking-[1px] text-gray-600'>Price: ${price}</p>
                <p className='text-sm font-thin tracking-[1px] text-gray-600'>Seats: ${seats}</p>
            </div>

            <div className="flex justify-between items-center mt-5">
            <button
                    className='rounded-md text-sm px-4 py-1 ring-1 ring-blue-500 text-white  bg-blue-600  flex justify-between items-center gap-2 cursor-default'>
                        <BiTimeFive size={18}/>
                    {status}</button>
                <div className='flex justify-between items-center gap-3'>
                    <button 
                    className='p-2 rounded-full text-blue-500 duration-300 hover:bg-blue-600 hover:text-white'>
                    <FaEdit size={18} className=''/>
                    </button>
                    <button 
                    className='p-2 rounded-full text-red-500 duration-300 hover:bg-red-600 hover:text-white'>
                    <FaTrashAlt size={18}/>
                    </button>
                </div>
            </div>
        </article>
    );
};

export default SingleClass;