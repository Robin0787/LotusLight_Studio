import { BiSelectMultiple } from 'react-icons/bi';
import { BsTable } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const UserMenu = () => {
  return (
    <>
      <NavLink
        to='selected-classes'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-200 transform hover:text-white  hover:bg-blue-700 rounded-lg ${isActive ? 'bg-blue-700  text-white' : 'text-gray-200'
          }`
        }
      >
        <BiSelectMultiple className='w-5 h-5' />

        <span className='mx-4 font-medium'>Selected Classes</span>
      </NavLink>
      <NavLink
        to='enrolled-classes'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-200 transform hover:text-white  hover:bg-blue-700 rounded-lg ${isActive ? 'bg-blue-700  text-white' : 'text-gray-200'
          }`
        }
      >
        <BsTable className='w-5 h-5' />

        <span className='mx-4 font-medium'>Enrolled Classes</span>
      </NavLink>
      <NavLink
        to='payment'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-200 transform hover:text-white  hover:bg-blue-700 rounded-lg ${isActive ? 'bg-blue-700  text-white' : 'text-gray-200'
          }`
        }
      >
        <FaWallet className='w-5 h-5' />

        <span className='mx-4 font-medium'>Payment</span>
      </NavLink>
    </>
  )
}

export default UserMenu;