import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import notFoundGif from "../../assets/404.gif";

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <section className='flex flex-col justify-center items-center gap-5 min-h-screen'>
            <img src={notFoundGif} alt="" />
            <button 
            onClick={() => {navigate(-1)}}
            className='flex justify-center items-center gap-3 rounded-md text-white bg-blue-500 
            py-2 md:py-3 px-4 md:px-8'>
                <FaArrowLeft size={20} /> Go Back
            </button>
        </section>
    );
};

export default NotFoundPage;