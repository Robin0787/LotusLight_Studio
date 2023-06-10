import { FaUsersCog } from 'react-icons/fa';
import { MdOutlineManageHistory } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <>
            <NavLink
                to='manage-classes'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-200 transform hover:text-white  hover:bg-blue-700 rounded-lg ${isActive ? 'bg-blue-700  text-white' : 'text-gray-200'
                    }`
                }
            >
                <MdOutlineManageHistory className='w-5 h-5' />

                <span className='mx-4 font-medium'> Manage Classes</span>
            </NavLink>
            <NavLink
                to='manage-users'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-200 transform hover:text-white  hover:bg-blue-700 rounded-lg ${isActive ? 'bg-blue-700 text-white' : 'text-gray-200'
                    }`
                }
            >
                <FaUsersCog className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Users</span>
            </NavLink>
        </>
    )
}

export default AdminMenu;