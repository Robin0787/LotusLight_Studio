import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { ImSpinner9 } from "react-icons/im";
import StoreUserSelectedItem from '../../Hooks/StoreUserSelectedItem';
import { authContext } from '../../Provider/AuthProvider';

const ClassCard = ({ item }) => {
    const { userRole, user } = useContext(authContext);
    const { className, image, price, seats, status, _id, students = 0, instructorName, instructorEmail, enrolled=0 } = item;
    const [processing, setProcessing] = useState(false);

    function handleClassSelect(id) {
        setProcessing(true);
        if(!user) {
            toast.error('Login required');
            setProcessing(false);
            return;
        }
        const selectedItem = {
            className, image, price, instructorName, instructorEmail, classId: id,
            userName: user.displayName, userEmail: user.email
        }
        StoreUserSelectedItem({...selectedItem})
        .then(data => {
            if(data.insertedId) {
                toast.success('Class Selected');
                setProcessing(false);
            }
        }).catch(err => {console.log(err.message);setProcessing(false)});
    }
    const availableSeats = seats - enrolled;
    return (
        <div>
            <article className={`rounded-lg shadow-xl shadow-blue-200 p-4 flex flex-col justify-between gap-1 ${availableSeats === 0 ? '' : 'bg-white'}`}>
                <img src={image} alt="" className={`object-cover rounded-lg h-44`} />
                <div>
                    <h2 className='text-lg tracking-[2px]'>{className}</h2>
                    <p className='text-base font-thin tracking-[1px] text-gray-800'>{instructorName}</p>
                    <p className={`text-sm font-thin tracking-[1px] ${availableSeats === 0 ? 'text-gray-800' : 'text-gray-600'}`}>Total Seats: {seats}</p>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p className={`text-sm font-thin tracking-[1px] ${availableSeats === 0 ? 'text-gray-800' : 'text-gray-600'}`}>Available Seats: {availableSeats}</p>
                    <p className={`text-sm font-thin tracking-[1px] ${availableSeats === 0 ? 'text-gray-800' : 'text-gray-600'}`}>Enrolled: {enrolled}</p>
                </div>
                <div className='mt-2 flex justify-between items-center'>
                    <button
                    className={`text-sm px-4 py-1 font-thin tracking-[1px]
                    ring-1  rounded-lg  cursor-default
                    ${availableSeats === 0 ? 'ring-gray-700 text-gray-800' : 'ring-blue-500 text-blue-600'}`}>Price: ${price}</button>
                    <button
                        disabled={availableSeats === 0 || userRole === 'admin' || userRole === 'instructor'}
                        onClick={() => {handleClassSelect(_id)}}
                        className='py-1 px-6 text-sm bg-blue-500 text-white rounded-lg  duration-300 hover:bg-blue-600 disabled:hover:bg-blue-500 ring-1 ring-blue-500
                        disabled:opacity-60
                        disabled:text-gray-200 disabled:cursor-not-allowed
                        flex justify-center items-center'>
                        {processing ? <ImSpinner9 size={18} className="text-white animate-spin duration-300 text-center" /> : (availableSeats === 0 ? 'Filled' : 'Select')}
                    </button>
                </div>
            </article>
        </div>
    );
};

export default ClassCard;