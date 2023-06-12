import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { ImSpinner9 } from 'react-icons/im';
import InstructorCard from '../../Components/Instructors/InstructorCard';

const Instructors = () => {
    const { data: instructors = [], isLoading } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const url = `${import.meta.env.VITE_BASE_URL}/instructors`;
            const res = await axios.get(url);
            return res.data;
        },
    })
    return (
        <>
            {
                instructors.length > 0 ? <>
                    <section className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 px-4 md:px-8 lg:px-10'>
                        {
                            instructors.map(item => <InstructorCard key={item._id} item={item} />)
                        }
                    </section>
                </>
                :
                (isLoading ? (<>
                    <div className='flex justify-center items-center h-[160px]'>
                        <ImSpinner9 size={30} className="text-blue-500 animate-spin duration-300 text-center" />
                    </div>
                </>) : (<>
                    <article className='flex justify-center items-center h-[80vh]'>
                        <h2 className="text-4xl font-thin">No Classes Found!</h2>
                    </article>
                </>))
            }
        </>
    );
};

export default Instructors;