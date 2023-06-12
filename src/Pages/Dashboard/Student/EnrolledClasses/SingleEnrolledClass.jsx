import React from 'react';
import { BiSelectMultiple } from 'react-icons/bi';

const SingleEnrolledClass = ({ item }) => {
    const { className, image, price, _id, instructorName } = item;
    
    
    return (
        <article className='rounded-lg shadow-xl shadow-blue-200 p-4 flex flex-col justify-between gap-2'>
            <img src={image} alt="" className={` object-cover rounded-lg h-2/3`} />
            <div>
                <h2 className='text-lg tracking-[2px]'>{className}</h2>
                <p className="text-base font-thin tracking-[1px] text-gray-800">{instructorName}</p>
            </div>
            <div>
                <p className='text-sm font-thin tracking-[1px] text-gray-600'>Price: ${price}</p>
            </div>
            <div className='flex justify-end items-center gap-3 mt-3'>
                <button
                    className='px-3 py-1 rounded-full bg-green-500 text-white flex justify-center items-center gap-2 ring-1 ring-green-500 cursor-default'>
                    <BiSelectMultiple size={18} className='' />
                    <span>Enrolled</span>
                </button>
            </div>
        </article>
    );
};

export default SingleEnrolledClass;