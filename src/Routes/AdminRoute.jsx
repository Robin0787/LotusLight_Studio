import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const AdminRoute = ({children}) => {
    const {user, userRole, userRoleLoading, loading} = useContext(authContext);
    const location = useLocation();
    if(loading || userRoleLoading){
        return <div className='flex justify-center items-center h-screen'>
        <ImSpinner9 size={50} className="text-blue-500 animate-spin duration-300 text-center" />
    </div>
    }
    if(user && userRole === 'admin'){
        return children
    }
    toast.success('You are not authorized');
    return <Navigate to={'/'} state={{from: location}} replace/>
};

export default AdminRoute;