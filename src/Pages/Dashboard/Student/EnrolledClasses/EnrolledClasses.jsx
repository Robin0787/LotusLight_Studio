import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { authContext } from '../../../../Provider/AuthProvider';
import SingleEnrolledClass from './SingleEnrolledClass';

const EnrolledClasses = () => {
    const {user, loading} = useContext(authContext);
    const {data: enrolledClasses=[], refetch, isLoading} = useQuery({
        queryKey: ['enrolled-classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/enrolled-classes/${user.email}`);
            return res.data;
        }
    })
    return (
        <section className='p-5 md:p-10'>
            {
                enrolledClasses.length > 0 ? (<article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-10'>
                    {enrolledClasses.map(item => <SingleEnrolledClass key={item._id} item={item} />)}
                </article>)
                    :
                    (isLoading ? (<>
                        <div className='flex justify-center items-center h-[160px]'>
                            <ImSpinner9 size={30} className="text-blue-500 animate-spin duration-300 text-center" />
                        </div>
                    </>) : (<>
                        <article className='flex flex-col gap-5 justify-center items-center h-[80vh]'>
                            <h2 className="text-4xl font-thin">No Classes Found!</h2>
                            <Link
                                to={'/classes'}
                                className='text-white bg-blue-600 px-6 py-2 rounded-lg ring-2 ring-blue-200 hover:ring-blue-600 duration-300'>
                                See Classes
                            </Link>
                        </article>
                    </>))
            }
        </section>
    );
};

export default EnrolledClasses;