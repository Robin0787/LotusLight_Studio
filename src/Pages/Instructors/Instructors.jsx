import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import InstructorCard from '../../Components/Instructors/InstructorCard';

const Instructors = () => {
    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/instructors`;
            const res = await axios.get(url);
            return res.data;
        },
    })
    return (
        <section className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 px-4 md:px-8 lg:px-10'>
            {
                instructors.map(item => <InstructorCard key={item._id} item={item} />)
            }
        </section>
    );
};

export default Instructors;