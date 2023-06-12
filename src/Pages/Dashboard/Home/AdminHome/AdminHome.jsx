import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const AdminHome = () => {
    return (
        <div className='h-screen flex justify-center items-center gap-3'>
            <h2 className="text-3xl">Coming Soon</h2>
            <ImSpinner9 size={20} className='text-blue-500 animate-spin duration-300 mt-2' />
        </div>
    );
};

export default AdminHome;