import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiTimeFive } from 'react-icons/bi';
import UpdateClassStatus from '../../../../Hooks/UpdateClassStatus';
import ApproveModal from '../ActionModal/ApproveModal';
import DenyModal from '../ActionModal/DenyModal';

const SingleAdminClass = ({ item, refetch }) => {
    const { className, image, price, seats, status, _id, instructorName, instructorEmail } = item;
    const [approveModal, setApproveModal] = useState(false);
    const [denyModal, setDenyModal] = useState(false);

    const approveModalHandler = (id, feedback) => {
        const updatedInfo = {
            feedback: feedback,
            status: 'approved'
        }
        UpdateClassStatus(id, updatedInfo)
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Class Approved');
                refetch();
            }
        }).catch(err => console.log(err.message));
        closeApproveModal();
    }
    const denyModalHandler = (id, feedback) => {
        const updatedInfo = {
            feedback: feedback,
            status: 'denied'
        }
        UpdateClassStatus(id, updatedInfo)
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Class Denied');
                refetch();
            }
        }).catch(err => console.log(err.message));
        closeDenyModal();
    }
    const closeApproveModal = () => {
        setApproveModal(false);
    }
    const closeDenyModal = () => {
        setDenyModal(false);
    }
    return (
        <article className='rounded-lg shadow-xl shadow-gray-400 p-4 flex flex-col justify-between gap-1'>
            <img src={image} alt="" className={` object-cover rounded-lg h-2/3`} />
            <h2 className='text-lg tracking-[2px]'>{className}</h2>
            <div className='text-gray-600 font-thin'>
                <p className='text-base tracking-[1px] text-gray-700'>{instructorName}</p>
                <p className='text-xs tracking-[1px]'>{instructorEmail}</p>
            </div>
            <div className='flex justify-between items-center text-gray-600 font-thin mt-3'>
                <p className='text-sm tracking-[1px]'>Price: ${price}</p>
                <p className='text-sm tracking-[1px] '>Seats: {seats}</p>
            </div>
            <div className='mb-1 mt-2'>
                <button
                    className='text-sm text-gray-500 flex justify-between  gap-2 cursor-default'>
                    <BiTimeFive size={18} />
                    {status}
                </button>
            </div>
            <div className="flex justify-between items-center">
            <button 
            onClick={() => {setApproveModal(true)}}
            disabled={status === 'approved' || status === 'denied'}
            className='rounded-md text-sm px-4 py-1 ring-1 ring-blue-500 text-white  bg-blue-600  flex justify-between items-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-400 disabled:ring-blue-400
            disabled:opacity-70'>Approve</button>
            <button 
            onClick={() => {setDenyModal(true)}}
            disabled={status === 'approved' || status === 'denied'}
            className='rounded-md text-sm px-4 py-1 ring-1 ring-red-500 text-white  bg-red-600  flex justify-between items-center gap-2 cursor-pointer
            disabled:cursor-not-allowed disabled:bg-red-400 disabled:ring-red-400
            disabled:opacity-70'>Deny</button>
            </div>
            <ApproveModal approveModal={approveModal} modalHandler={approveModalHandler} closeApproveModal={closeApproveModal} id={_id}/>
            <DenyModal denyModal={denyModal} modalHandler={denyModalHandler} closeDenyModal={closeDenyModal} id={_id}/>

        </article>
    );
};

export default SingleAdminClass;