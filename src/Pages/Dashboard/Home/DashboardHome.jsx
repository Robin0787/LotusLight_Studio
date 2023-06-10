import React, { useContext } from 'react';
import { authContext } from '../../../Provider/AuthProvider';
import AdminHome from './AdminHome/AdminHome';
import InstructorHome from './InstructorHome/InstructorHome';
import UserHome from './UserHome/UserHome';

const DashboardHome = () => {
    const {userRole} = useContext(authContext);
    if(userRole === 'admin'){
        return <AdminHome />
    }
    if(userRole === 'instructor'){
        return <InstructorHome />
    }
    return <UserHome />
};

export default DashboardHome;