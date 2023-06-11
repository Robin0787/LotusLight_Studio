import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiTimeFive } from 'react-icons/bi';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DeleteInstructorClass from '../../../../../Hooks/DeleteInstructorClass';
import DeleteClass from '../DeleteClass/DeleteClass';

const SingleClass = ({ item, refetch }) => {
    const { className, image, price, seats, status, _id } = item;
    const [openModal, setOpenModal] = useState(false);
    function modalHandler(id) {
        DeleteInstructorClass(id)
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('Class Deleted');
                refetch();
            }
        })
        closeModal();
    }
    function closeModal() {
        setOpenModal(false);
    }
    return (
        <article className='rounded-lg shadow-xl shadow-blue-200 p-4 flex flex-col justify-between gap-2'>
            <img src={image} alt="" className={` object-cover rounded-lg h-2/3`} />
            <div>
                <h2 className='text-lg tracking-[2px]'>{className}</h2>
                <p className='text-sm font-thin tracking-[1px] text-gray-600'>Price: ${price}</p>
                <p className='text-sm font-thin tracking-[1px] text-gray-600'>Seats: {seats}</p>
            </div>
            <div className="flex justify-between items-center mt-5">
                <button
                    className='rounded-md text-sm px-4 py-1 ring-1 ring-blue-500 text-white  bg-blue-600  flex justify-between items-center gap-2 cursor-default'>
                    <BiTimeFive size={18} />
                    {status}</button>
                <div className='flex justify-between items-center gap-3'>
                    <Link
                        to={`/dashboard/update-class/${_id}`}
                        className='p-2 rounded-full text-blue-500 duration-300 hover:bg-blue-600 hover:text-white'>
                        <FaEdit size={18} className='' />
                    </Link>
                    <button
                        onClick={() => { setOpenModal(true) }}
                        className='p-2 rounded-full text-red-500 duration-300 hover:bg-red-600 hover:text-white'>
                        <FaTrashAlt size={18} />
                    </button>
                </div>
            </div>
            <DeleteClass closeModal={closeModal} modalHandler={modalHandler} id={_id}
                openModal={openModal} />
        </article>
    );
};

export default SingleClass;