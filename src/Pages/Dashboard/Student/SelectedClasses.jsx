import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Provider/AuthProvider';
import SingleSelectedClass from './SingleSelectedClass';

const SelectedClasses = () => {
    const { loading, user, userRole } = useContext(authContext);
    const { data: selectedClasses = [], refetch, isLoading } = useQuery({
        queryKey: ['selected-classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/selected-classes/${user.email}`);
            return res.data;
        }
    })
    return (
        <section className='p-5 md:p-10'>
            {
                selectedClasses.length > 0 ? (<article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-10'>
                    {selectedClasses.map(item => <SingleSelectedClass key={item._id} item={item} refetch={refetch} />)}
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

export default SelectedClasses;