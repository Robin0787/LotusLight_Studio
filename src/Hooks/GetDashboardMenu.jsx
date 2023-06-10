import React from 'react';
import AdminMenu from '../Pages/Dashboard/Sidebar/SideMenus/AdminMenu';
import InstructorMenu from '../Pages/Dashboard/Sidebar/SideMenus/InstructorMenu';
import UserMenu from '../Pages/Dashboard/Sidebar/SideMenus/UserMenu';

const GetDashboardMenu = ({role}) => {
    if(role === 'admin'){
        return <AdminMenu />
    }
    if(role === 'instructor'){
        return <InstructorMenu />
    }
    else {
        return <UserMenu />
    }
};

export default GetDashboardMenu;