import React, { useContext } from 'react';
import { authContext } from '../../Provider/AuthProvider';

const ClassCard = ({ item }) => {
    const {userRole} = useContext(authContext);
    const { className, image, price, seats, status, _id, students = 0, instructorName, instructorEmail } = item;
    return (
        <div>
            <article className='rounded-lg shadow-xl shadow-blue-200 p-4 flex flex-col justify-between gap-1'>
                <img src={image} alt="" className={`object-cover rounded-lg h-44`} />
                <div>
                    <h2 className='text-lg tracking-[2px]'>{className}</h2>
                </div>
                <div>
                    <p className='text-base font-thin tracking-[1px] text-gray-800'>{instructorName}</p>
                    <p className='text-sm font-thin tracking-[1px] text-gray-600'>{instructorEmail}</p>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p className='text-sm font-thin tracking-[1px] text-gray-600'>Available Seats: {seats}</p>
                    <p className='text-sm font-thin tracking-[1px] text-gray-600'>Price: ${price}</p>
                </div>
                <div className='mt-2'>
                    <button 
                    disabled={seats === 0 || userRole === 'admin' || userRole === 'instructor'}
                    className='w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 duration-300 disabled:bg-red-600'>
                        Select
                    </button>
                </div>
            </article>
        </div>
    );
};

export default ClassCard;