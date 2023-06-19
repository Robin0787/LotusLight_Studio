import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { BsRecordBtnFill } from 'react-icons/bs';
import { FaBuffer, FaWallet } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';
import { authContext } from '../../../../Provider/AuthProvider';
import UserChart from './UserChart';

const UserHome = () => {
    const { user, loading } = useContext(authContext);
    const { data: userStats = {}, isLoading } = useQuery({
        queryKey: ['user-stats'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user-stats/${user?.email}`);
            return res.data;
        }
    })
    return (
        <section>
            {
                isLoading ?
                    <div className='h-screen flex justify-center items-center gap-4'>
                        <h2 className="text-3xl">Loading</h2>
                        <ImSpinner9 size={24} className='text-blue-500 animate-spin duration-300 mt-2' />
                    </div> :
                    <>
                        <article className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-2
                            lg:grid-cols-2 xl:grid-cols-3  gap-3 md:gap-4 lg:gap-6 p-4 md:p-10 lg:p-16 lg:w-4/5 mx-auto'>
                            <div className='font-bold text-white p-4 bg-[#0ea02e] rounded-md text-center space-y-2'>
                                <h2 className='text-2xl'>Selected Classes</h2>
                                <div className=' flex justify-center items-center gap-4'>
                                    <FaBuffer size={35} className='text-white' />
                                    <p className='text-3xl'>{userStats?.selectedClasses}</p>
                                </div>
                            </div>
                            <div className='font-bold text-white p-4 bg-[#2d59eb] rounded-md text-center space-y-2'>
                                <h2 className='text-2xl'>Enrolled Classes</h2>
                                <div className=' flex justify-center items-center gap-4'>
                                    <BsRecordBtnFill size={35} className='text-white' />
                                    <p className='text-3xl'>{userStats?.enrolledClasses}</p>
                                </div>
                            </div>
                            <div className='font-bold text-white p-4 bg-[#da4b2f] rounded-md text-center space-y-2'>
                                <h2 className='text-2xl'>Payment</h2>
                                <div className=' flex justify-center items-center gap-4'>
                                    <FaWallet size={35} className='text-white' />
                                    <p className='text-3xl'>${userStats?.totalPayment}</p>
                                </div>
                            </div>
                        </article>
                    </>
            }
            <section>
                <UserChart />
            </section>
        </section>
    );
};

export default UserHome;