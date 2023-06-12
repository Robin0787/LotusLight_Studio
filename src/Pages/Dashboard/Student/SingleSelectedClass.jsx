import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaCreditCard, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DeleteSelectedClass from '../../../Hooks/DeleteSelectedClass';
import DeleteClass from '../Instructor/MyClasses/DeleteClass/DeleteClass';

const SingleSelectedClass = ({ item, refetch }) => {
    const { className, image, price, _id, instructorName } = item;
    const [openModal, setOpenModal] = useState(false);
    function modalHandler(id) {
        DeleteSelectedClass(id)
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('Class Deleted');
                refetch();
            }
        }).catch(err => console.log(err.message));
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
                <p className="text-base font-thin tracking-[1px] text-gray-800">{instructorName}</p>
            </div>
            <div>
                <p className='text-sm font-thin tracking-[1px] text-gray-600'>Price: ${price}</p>
            </div>
            <div className='flex justify-between items-center gap-3 mt-3'>
                <button
                    onClick={() => { setOpenModal(true) }}
                    className='p-2 rounded-full text-red-500 duration-300 hover:bg-red-600 hover:text-white'>
                    <FaTrashAlt size={18} />
                </button>
                <Link
                    to={`/dashboard/pay/${_id}`}
                    className='px-3 py-1 rounded-lg bg-blue-500 text-white duration-300 hover:bg-white hover:text-blue-500 flex justify-center items-center gap-2 hover:ring-1 ring-blue-500'>
                    <FaCreditCard size={18} className='' />
                    <span>Pay</span>
                </Link>
            </div>
            <DeleteClass closeModal={closeModal} modalHandler={modalHandler} id={_id}
                openModal={openModal} />
        </article>
    );
};

export default SingleSelectedClass;