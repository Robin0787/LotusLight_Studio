import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ClassCard from './ClassCard';

const Classes = () => {
    const {data: classes=[], refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/approved-classes`);
            return res.data;
        }
    })
    return (
        <section className='p-5 md:p-10'>
            {
                classes.length > 0 ? (<article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-10'>
                    {classes.map(item => <ClassCard key={item._id} item={item} refetch={refetch}/>)}
                </article>)
                :
                <article className='flex justify-center items-center h-[70vh]'>
                    <h2 className="text-4xl font-thin">No Classes Found!</h2>
                </article>
            }
        </section>
    );
};

export default Classes;