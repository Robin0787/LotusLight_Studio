import React, { useContext, useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';
import { LuLogOut } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import GetDashboardMenu from '../../../Hooks/GetDashboardMenu';
import { authContext } from '../../../Provider/AuthProvider';

const Sidebar = () => {
    const navigate = useNavigate();
    const { user, logOutUser, userRole } = useContext(authContext);
    const [isActive, setActive] = useState('false');

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOutUser()
        navigate('/')
    }
    return (
        <section className='text-white'>
            {/* Small Screen Navbar */}
            <div className='bg-gradient-to-r from-blue-500 to-blue-700 text-white flex justify-between md:hidden'>
                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gradient-to-r from-blue-500 to-blue-700 text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div className='flex justify-end md:hidden'>
                        <RxCross2 onClick={handleToggle} className='text-white text-right' size={30} />
                    </div>
                    {/* Branding & Profile Info */}
                    <div>
                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                {
                                    user ?
                                        <img
                                            className='object-cover w-24 h-24 mx-2 ring-2 ring-gray-300 rounded-full'
                                            src={user?.photoURL}
                                            alt='avatar'
                                            referrerPolicy='no-referrer'
                                        />
                                        :
                                        <div className='flex flex-col justify-center items-center gap-10'>
                                            <ImSpinner9 size={24} className="text-white animate-spin duration-300 text-center" />
                                        </div>
                                }
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 text-lg font-medium text-gray-100  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 text-sm font-medium text-gray-200  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            {/* Menu Links */}
                            <>
                                {
                                    user ?
                                        <GetDashboardMenu role={userRole} />
                                        :
                                        <div className='flex flex-col justify-center items-center gap-10'>
                                            <ImSpinner9 size={24} className="text-white animate-spin duration-300 text-center" />
                                            <ImSpinner9 size={24} className="text-white animate-spin duration-300 text-center" />
                                        </div>
                                }
                            </>
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-5  transition-colors duration-200 transform hover:text-white  hover:bg-blue-800 rounded-lg ${isActive ? 'bg-indigo-900  text-white' : 'text-gray-200'
                            }`
                        }
                    >
                        <FaHome className='w-5 h-5 text-white' />
                        <span className='mx-4 font-medium'>Home</span>
                    </NavLink>
                    <NavLink
                        to='/dashboard/profile'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-5  transition-colors duration-200 transform hover:text-white  hover:bg-blue-800 rounded-lg ${isActive ? 'bg-indigo-900  text-white' : 'text-gray-200'
                            }`
                        }
                    >
                        <CgProfile className='w-5 h-5 text-white' />
                        <span className='mx-4 font-medium'>Profile</span>
                    </NavLink>
                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-200 hover:text-white  hover:bg-blue-800 rounded-lg duration-300 transform'
                    >
                        <LuLogOut className='w-5 h-5 text-white' />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Sidebar;