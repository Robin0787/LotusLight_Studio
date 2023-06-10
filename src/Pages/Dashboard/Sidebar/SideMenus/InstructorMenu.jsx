import { BsCalendar2PlusFill } from 'react-icons/bs'
import { FaListAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const InstructorMenu = () => {
    return (
        <>
            <NavLink
                to='add-class'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-200 transform hover:text-white  hover:bg-blue-700 bg-opacity-50 rounded-lg ${isActive ? 'bg-blue-700  text-white' : 'text-gray-200'
                    }`
                }><BsCalendar2PlusFill className='w-5 h-5' />
                <span className='mx-4 font-medium'>Add a class</span>
            </NavLink>
            <NavLink
                to='my-classes'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-200 transform hover:text-white  hover:bg-blue-700 rounded-lg ${isActive ? 'bg-blue-700  text-white' : 'text-gray-200'
                    }`
                }
            >
                <FaListAlt className='w-5 h-5' />

                <span className='mx-4 font-medium'>My Classes</span>
            </NavLink>
        </>
    )
}

export default InstructorMenu;