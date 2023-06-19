import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { authContext } from '../../Provider/AuthProvider';

const Profile = () => {
    const { user, loading } = useContext(authContext);
    const { data: profile = {}, isLoading } = useQuery({
        queryKey: ['profile'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/profile/${user.email}`);
            return res.data;
        }
    })
    return (
        <>
            {
                isLoading ?
                    <div className='h-[40vh] flex justify-center items-center'>
                        <ImSpinner9 size={35} className='text-blue-600 animate-spin' />
                    </div>
                    :
                    <section className='w-full md:w-4/5 xl:w-3/5 mx-auto mt-8 md:mt-14 p-5'>
                        <section className='sm:flex justify-center gap-5 border shadow-2xl rounded-xl'>
                            <article className='sm:w-1/2'>
                                <img src={profile?.photoURL} alt="" className='bg-blue-400 w-full h-full rounded-l-xl' />
                            </article>
                            <article className='sm:w-1/2 flex flex-col justify-evenly font-thin p-5 md:p-0'>
                                <div>
                                    <h2 className="text-3xl">{profile?.displayName}</h2>
                                    <p className="text-base text-gray-500">{profile?.email}</p>
                                </div>
                                <div className='text-gray-600'>
                                    <p className="text-base">Location: {profile?.address || 'Unknown'}</p>
                                    <p className="text-base">Phone: +{profile?.phone || 4524655632}</p>
                                </div>
                                <div className='text-gray-600'>
                                    <p className="text-base">Role: {profile?.role}</p>
                                    {
                                        profile.gender && <p className="text-base">Gender: {profile?.gender}</p>
                                    }
                                </div>
                            </article>
                        </section>
                    </section>
            }

        </>
    );
};

export default Profile;