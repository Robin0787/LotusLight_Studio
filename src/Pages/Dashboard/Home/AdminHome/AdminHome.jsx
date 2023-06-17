import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaBuffer, FaUserSecret, FaUsers, FaWallet } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';
import Chart from './Chart/Chart';

const AdminHome = () => {
    const { data: adminStats = {}, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin-stats`);
            return res.data;
        }
    });
    return (
        // <div className='h-screen flex justify-center items-center gap-3'>
        //     <h2 className="text-3xl">Coming Soon</h2>
        //     <ImSpinner9 size={20} className='text-blue-500 animate-spin duration-300 mt-2' />
        // </div>
        <section>
            {
                isLoading ?
                    <div className='h-screen flex justify-center items-center gap-4'>
                        <h2 className="text-3xl">Loading</h2>
                        <ImSpinner9 size={24} className='text-blue-500 animate-spin duration-300 mt-2' />
                    </div> :
                    <>
                        <article className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-2
                            lg:grid-cols-2  gap-3 md:gap-4 lg:gap-6 p-4 md:p-10 lg:p-16 lg:w-4/5 mx-auto'>
                            <div className='font-bold text-white p-4 bg-[#4d41f5] rounded-md text-center space-y-2'>
                                <h2 className='text-2xl'>Instructors</h2>
                                <div className=' flex justify-center items-center gap-4'>
                                    <FaUserSecret size={35} className='text-white' />
                                    <p className='text-3xl'>{adminStats?.totalInstructors}</p>
                                </div>
                            </div>
                            <div className='font-bold text-white p-4 bg-[#0ea02e] rounded-md text-center space-y-2'>
                                <h2 className='text-2xl'>Students</h2>
                                <div className=' flex justify-center items-center gap-4'>
                                    <FaUsers size={35} className='text-white' />
                                    <p className='text-3xl'>{adminStats?.totalStudents}</p>
                                </div>
                            </div>
                            <div className='font-bold text-white p-4 bg-[#e71de7] rounded-md text-center space-y-2'>
                                <h2 className='text-2xl'>Classes</h2>
                                <div className=' flex justify-center items-center gap-4'>
                                    <FaBuffer size={35} className='text-white' />
                                    <p className='text-3xl'>{adminStats?.totalClasses}</p>
                                </div>
                            </div>
                            <div className='font-bold text-white p-4 bg-[#da4b2f] rounded-md text-center space-y-2'>
                                <h2 className='text-2xl'>Revenue</h2>
                                <div className=' flex justify-center items-center gap-4'>
                                    <FaWallet size={35} className='text-white' />
                                    <p className='text-3xl'>${adminStats?.totalAmount}</p>
                                </div>
                            </div>
                        </article>
                    </>
            }
            <section>
                <Chart />
            </section>
        </section>
    );
};

export default AdminHome;