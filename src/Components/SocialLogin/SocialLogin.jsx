import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { authContext } from '../../Provider/AuthProvider';

const SocialLogin = () => {
    const {user, loading, authenticationWithGoogle, authenticationWithGithub} = useContext(authContext);
    console.log(user);
    function continueWithGoogle () {
        authenticationWithGoogle()
        .then(res => {
            toast.success('Successful');
        })
    }
    function continueWithGithub () {
        authenticationWithGithub()
        .then(res => {
            toast.success('Successful');
        })
    }
    return (
        <>
            <div
                className="p-2 rounded-full bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500 duration-300 hover:ring-2 ring-blue-500" onClick={continueWithGoogle}>
                <FaGoogle size={20} />
            </div>
            <div
                className="p-2 rounded-full bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500 duration-300 hover:ring-2 ring-blue-500" onClick={continueWithGithub}>
                <FaGithub size={20} />
            </div>
        </>
    );
};



export default React.memo(SocialLogin);