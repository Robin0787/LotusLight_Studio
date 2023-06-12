import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Lottie from "lottie-react";
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from "../../../Components/CheckOutForm/CheckOutForm";
import paymentAnimation from "../../../assets/paymentAnimation.json";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const PayClass = () => {
    const classDetails = useLoaderData();
    const { className, image, _id, instructorName, instructorEmail, price } = classDetails;
    return (
        <section className='md:h-screen flex justify-center items-center p-2 md:p-10'>
            <section className='sm:flex gap-2 justify-center w-full rounded-lg shadow-xl shadow-blue-200 p-3 md:p-5 lg:p-10'>
                <article className="sm:w-[60%]">
                    <div className=''>
                        <Lottie animationData={paymentAnimation} loop={true} className="h-72 w-72 mx-auto" />
                    </div>
                    <div className="w-full rounded-xl px-6 py-3">
                        <Elements stripe={stripePromise}>
                            <CheckOutForm classDetails={classDetails} />
                        </Elements>
                    </div>
                </article>
                <article className='sm:w-[40%]'>
                    <div className={`p-4 py-6 border rounded-lg flex flex-col justify-between gap-1 bg-white`}>
                        <img src={image} alt="" className={`object-cover rounded-lg `} />
                        <div className="text-end">
                            <h2 className='text-xl tracking-[2px]'>{className}</h2>
                            <p className='text-base font-thin tracking-[1px] text-gray-800 pt-2'>{instructorName}</p>
                            <p className='text-sm font-thin tracking-[1px] text-gray-600'> {instructorEmail}</p>
                        </div>
                        <div className='mt-2 flex justify-end items-center'>
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