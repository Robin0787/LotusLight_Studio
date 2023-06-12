import Lottie from "lottie-react";
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import paymentAnimation from "../../../assets/paymentAnimation.json";

const PayClass = () => {
    const classDetails = useLoaderData();
    const { className, image, _id, instructorName, instructorEmail, price } = classDetails;
    return (
        <section className='md:h-screen flex justify-center items-center p-2 md:p-10'>
            <section className='sm:flex justify-center w-full rounded-lg shadow-xl shadow-blue-200 p-3 md:p-5 lg:p-10'>
                <article className="sm:w-[60%] flex justify-center items-center">
                    <div className=''>
                        <Lottie animationData={paymentAnimation} loop={true} />
                        <div className="border">
                            <h3>Payment Field</h3>
                        </div>
                    </div>
                </article>
                <article className='sm:w-[40%]'>
                    <div className={`p-4 flex flex-col justify-between gap-1 bg-white`}>
                        <img src={image} alt="" className={`object-cover rounded-lg `} />
                        <div>
                            <h2 className='text-xl tracking-[2px]'>{className}</h2>
                            <p className='text-base font-thin tracking-[1px] text-gray-800 pt-2'>Instructor: {instructorName}</p>
                            <p className='text-sm font-thin tracking-[1px] text-gray-600'>Email: {instructorEmail}</p>
                        </div>
                        <div className='mt-2 flex justify-between items-center'>
                            <button
                                className={`text-sm px-4 py-1 font-thin text-white tracking-[1px]
                    ring-1 rounded-lg cursor-default ring-blue-500 bg-blue-600`}>Price: ${price}</button>
                        </div>
                    </div>
                </article>
            </section>
        </section>
    );
};

export default PayClass;