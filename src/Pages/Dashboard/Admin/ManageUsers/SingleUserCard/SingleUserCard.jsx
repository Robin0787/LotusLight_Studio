import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import UpdateUser from '../../../../../Hooks/UpdateUser';
import UpdateUserStatus from '../UpdateUserStatus/UpdateUserStatus';

const SingleUserCard = ({ user, refetch }) => {
    const { displayName, email, role='student', _id, photoURL } = user;
    const [adminModal, setAdminModal] = useState(false);
    const [instructorModal, setInstructorModal] = useState(false);
    const [studentModal, setStudentModal] = useState(false);

    const adminHandler = (id) => {
        UpdateUser(id, 'admin')
        .then(data => {
            if(data.modifiedCount > 0) {
                toast.success('Successful');
                refetch();
            }
        });
        closeAdmin();
    }
    const instructorHandler = (id) => {
        UpdateUser(id, 'instructor')
        .then(data => {
            if(data.modifiedCount > 0) {
                toast.success('Successful');
                refetch();
            }
        });
        closeInstructor();
    }
    const studentHandler = (id) => {
        UpdateUser(id, 'student')
        .then(data => {
            if(data.modifiedCount > 0) {
                toast.success('Successful');
                refetch();
            }
        });
        closeStudent();
    }

    function closeAdmin () {
        setAdminModal(false);
    }
    function closeInstructor () {
        setInstructorModal(false);
    }
    function closeStudent () {
        setStudentModal(false);
    }


    const colors = ['#ff3811', '#40afff', '#ff4b40', '#ff26ff', '#40fff2'];
    function getColor() {
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }
    const color = getColor();
    return (
        <article className='rounded-lg shadow-xl shadow-blue-200 p-4 flex flex-col justify-between gap-2'>
            <img src={photoURL} alt="" className={` object-cover rounded-lg h-2/3`} style={{ backgroundColor: color }} />
            <div>
                <h2 className='text-xl tracking-[2px]'>{displayName}</h2>
                <p className='text-md font-thin tracking-[1px] text-gray-600'>{email}</p>
            </div>
            <div>
                <p className='rounded-md text-sm font-thin tracking-[1px] text-gray-600'>Role: {role}</p>
            </div>
            <div className="flex justify-between items-center mt-5">
                <button
                    onClick={() => {setAdminModal(true)}}
                    disabled={role === 'admin'}
                    className='rounded-md text-sm px-4 py-1 ring-1 ring-blue-500 text-white  bg-blue-600 hover:bg-white hover:text-blue-700 duration-300
                    disabled:opacity-50 disabled:hover:bg-blue-600 disabled:text-gray-400
                     disabled:hover:text-gray-400
                    disabled:cursor-not-allowed'>
                    Admin
                </button>
                <button
                    onClick={() => {setInstructorModal(true)}}     
                    disabled={role === 'instructor'}
                    className='rounded-md text-sm px-4 py-1 ring-1 ring-orange-500 text-white  bg-orange-600 hover:bg-white hover:text-orange-700 duration-300
                    disabled:opacity-50 disabled:hover:bg-orange-600 disabled:text-gray-400
                    disabled:hover:text-gray-400
                    disabled:cursor-not-allowed'>
                    Instructor
                </button>
                <button
                    onClick={() => {setStudentModal(true)}}
                    disabled={role === 'student'}
                    className='rounded-md text-sm px-4 py-1 ring-1 ring-green-500 text-white  bg-green-600 hover:bg-white hover:text-green-700 duration-300
                    disabled:opacity-50 disabled:hover:bg-green-600 disabled:text-gray-400
                    disabled:hover:text-gray-400
                    disabled:cursor-not-allowed'>
                    Student
                </button>
            </div>
            <UpdateUserStatus modalHandler={adminHandler} closeModal={closeAdmin} openModal={adminModal} id={_id}/>
            <UpdateUserStatus modalHandler={instructorHandler} closeModal={closeInstructor} openModal={instructorModal} id={_id}/>
            <UpdateUserStatus modalHandler={studentHandler} closeModal={closeStudent} 
            openModal={studentModal} id={_id}/>
        </article>
    );
};

export default SingleUserCard;