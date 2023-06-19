import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { FaBuffer, FaUsers } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';
import { SiNike } from 'react-icons/si';
import { authContext } from '../../../../Provider/AuthProvider';
import InstructorChart from './InstructorChart';

const InstructorHome = () => {
    const { user, loading } = useContext(authContext);
    const { data: instructorStats = {}, isLoading } = useQuery({
        queryKey: ['instructor-stats'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/instructor-stats/${user?.email}`);
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
                                <h2 className='text-2xl'>Added Classes</h2>
                                <div className=' flex justify-center items-center gap-4'>
                                    <FaBuffer size={35} className='text-white' />
                                    <p className='text-3xl'>{instructorStats?.classes}</p>
                                </div>
                            </div>
                            <div className='font-bold text-white p-4 bg-[#2d59eb] rounded-md text-center space-y-2'>
                                <h2 className='text-2xl'>Approved Classes</h2>
                                <div className=' flex justify-center items-center gap-4'>
                                    <SiNike size={35} className='text-white' />
                                    <p className='text-3xl'>{instructorStats?.approvedClasses}</p>
                                </div>
                            </div>
                            <div className='font-bold text-white p-4 bg-[#da4b2f] rounded-md text-center space-y-2'>
                                <h2 className='text-2xl'>Students</h2>
                                <div className=' flex justify-center items-center gap-4'>
                                    <FaUsers size={35} className='text-white' />
                                    <p className='text-3xl'>{instructorStats?.students}</p>
                                </div>
                            </div>
                        </article>
                    </>
            }
            <section>
                <InstructorChart />
            </section>
        </section>
    );
};

export default InstructorHome;