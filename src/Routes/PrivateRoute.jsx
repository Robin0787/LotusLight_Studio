import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(authContext);
    const location = useLocation;
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <ImSpinner9 size={50} className="text-blue-500 animate-spin duration-300 text-center" />
        </div>
    }
    if (user) {
        return children;
    }
    toast.error('Login Required');
    return <Navigate to={'/login'} state={{ from: location }} replace />;
};

export default PrivateRoute;