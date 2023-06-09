import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import StoreUser from '../../Hooks/StoreUser';
import { authContext } from '../../Provider/AuthProvider';

const SocialLogin = () => {
    const { authenticationWithGoogle, authenticationWithGithub, setProcessing, processing } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    function continueWithGoogle() {
        setProcessing(true);
        authenticationWithGoogle()
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                toast.success('Successful');
                setProcessing(false);
                navigate(from, { replace: true });
                StoreUser(email, { displayName, email, photoURL });
            })
    }
    function continueWithGithub() {
        setProcessing(true);
        authenticationWithGithub()
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                toast.success('Successful');
                setProcessing(false);
                navigate(from, { replace: true });
                StoreUser(email, { displayName, email, photoURL });
            })
    }
    return (
        <>
            <button
                className="p-2 rounded-full bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500 duration-300 hover:ring-2 ring-blue-500 disabled:cursor-not-allowed
                disabled:hover:ring-0 disabled:hover:bg-blue-500 disabled:hover:text-white"
                onClick={continueWithGoogle} disabled={processing}>
                <FaGoogle size={20} />
            </button>
            <button
                className="p-2 rounded-full bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500 duration-300 hover:ring-2 ring-blue-500 disabled:cursor-not-allowed
                disabled:hover:ring-0 disabled:hover:bg-blue-500 disabled:hover:text-white"
                onClick={continueWithGithub} disabled={processing}>
                <FaGithub size={20} />
            </button>
        </>
    );
};



export default React.memo(SocialLogin);