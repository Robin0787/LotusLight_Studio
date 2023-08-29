import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SingleUserCard from './SingleUserCard/SingleUserCard';


const ManageUsers = () => {
    const {data: users=[], refetch} = useQuery({
        queryKey: ['all-users'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/all-users`);
            return res.data;
        }
    });
    return (
        <section className='p-5 md:p-5 lg:p-10'>
            {
                users ? (<article className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 md:gap-3 lg:gap-10'>
                    {users.map(user => <SingleUserCard key={user._id} user={user} refetch={refetch}/>)}
                </article>)
                :
                <article className='flex justify-center items-center min-h-screen'>
                    <h2 className="text-4xl font-thin">No Classes Found!</h2>
                </article>
            }
        </section>
    );
};

export default ManageUsers;