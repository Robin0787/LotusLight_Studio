import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import SingleAdminClass from '../SingleAdminClass/SingleAdminClass';

const ManageClasses = () => {
    const {data: classes=[], refetch, error} = useQuery({
        queryKey: ['manage-classes'],
        queryFn: async() => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/all-classes`);
            return res.data;
        }
    });
    return (
        <section className='p-5 md:p-5 lg:p-10'>
            {
                classes ? (<article className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 md:gap-3 lg:gap-10'>
                    {classes.map(item => <SingleAdminClass key={item._id} item={item} refetch={refetch}/>)}
                </article>)
                :
                <article className='flex justify-center items-center min-h-screen'>
                    <h2 className="text-4xl font-thin">No Classes Found!</h2>
                </article>
            }
        </section>
    );
};

export default ManageClasses;