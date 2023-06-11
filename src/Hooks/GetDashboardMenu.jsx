import React from 'react';
import { ImSpinner9 } from 'react-icons/im';
import AdminMenu from '../Pages/Dashboard/Sidebar/SideMenus/AdminMenu';
import InstructorMenu from '../Pages/Dashboard/Sidebar/SideMenus/InstructorMenu';
import UserMenu from '../Pages/Dashboard/Sidebar/SideMenus/UserMenu';

const GetDashboardMenu = ({ role }) => {
    if (role === 'admin') {
        return <AdminMenu />
    }
    if (role === 'instructor') {
        return <InstructorMenu />
    }
    if (role === 'student') {
        return <UserMenu />
    } else {
        return <div className='flex justify-center items-center'>
            <ImSpinner9 size={30} className="text-white animate-spin duration-300 text-center" />
        </div>
    }
};

export default GetDashboardMenu;