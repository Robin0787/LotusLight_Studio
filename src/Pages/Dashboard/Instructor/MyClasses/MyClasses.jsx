import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { authContext } from '../../../../Provider/AuthProvider';
import SingleClass from './SingleClass/SingleClass';

const MyClasses = () => {
    const { user, loading } = useContext(authContext);
    const { data: classes = [], error, refetch } = useQuery({
        queryKey: ['classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/classes/${user?.email}`);
            return res.data;
        }
    })
    return (
        <section className='p-5 md:p-10'>
            {
                classes ? (<article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-10'>
                    {classes.map(item => <SingleClass key={item._id} item={item} refetch={refetch}/>)}
                </article>)
                :
                <article className='flex justify-center items-center min-h-screen'>
                    <h2 className="text-4xl font-thin">No Classes Found!</h2>
                </article>
            }
        </section>
    );
};

export default MyClasses;