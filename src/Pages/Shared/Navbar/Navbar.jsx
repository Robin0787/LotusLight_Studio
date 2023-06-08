import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { HiOutlineDatabase } from 'react-icons/hi';
import { LuUserCheck } from 'react-icons/lu';
import { RxDashboard } from 'react-icons/rx';
import { VscHome } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import profile from "../../../assets/profile.png";

const Navbar = () => {
    const navItems = <>
        <NavLink to={'/'}
            className={({ isActive }) => isActive ?
                'flex justify-center items-center gap-1 text-blue-800 text-lg'
                :
                'flex justify-center items-center gap-1 text-gray-700 text-lg'}>
            <VscHome /> Home
        </NavLink>
        <NavLink to={'/instructors'}
            className={({ isActive }) => isActive ?
                'flex justify-center items-center gap-1 text-blue-800 text-lg'
                :
                'flex justify-center items-center gap-1 text-gray-700 text-lg'}>
            <LuUserCheck /> Instructors
        </NavLink>
        <NavLink to={'/classes'}
            className={({ isActive }) => isActive ?
                'flex justify-center items-center gap-1 text-blue-800 text-lg'
                :
                'flex justify-center items-center gap-1 text-gray-700 text-lg'}>
            <HiOutlineDatabase /> <span className='text-md'> Classes </span>
        </NavLink>
        <NavLink to={'/dashboard'}
            className={({ isActive }) => isActive ?
                'flex sm:hidden justify-center items-center gap-1 text-blue-800 text-lg'
                :
                'flex sm:hidden justify-center items-center gap-1 text-gray-700 text-lg'}>
            <RxDashboard /> <span className='text-md'> Dashboard</span>
        </NavLink>
    </>
    return (
        <section className='shadow-lg px-0 md:px-10'>
            <div className="navbar bg-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black items-start rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link className='flex justify-center gap-2 items-center sm:ml-4 md:ml-0'>
                        <img src={logo} alt="" className='hidden sm:block h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14' />
                        <div>
                            <h2 className="text-2xl tracking-[2px]">Lotus Light </h2>
                            <p className='text-xs tracking-[21px] font-thin -mt-1'>studio</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !true ?
                            <div className='flex justify-center items-center gap-8'>
                                <NavLink to={'/dashboard'}
                                    className={({ isActive }) => isActive ?
                                        'hidden sm:flex justify-center items-center gap-1 text-blue-800 text-lg'
                                        :
                                        'hidden sm:flex justify-center items-center gap-1 text-gray-700 text-lg'}>
                                    <RxDashboard /> <span className='text-md'> Dashboard</span>
                                </NavLink>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={profile} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                <span>Profile</span>
                                                <FaRegUserCircle size={20} />
                                            </a>
                                        </li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                            :
                            <Link to={'/signUp'} className='bg-blue-600 text-white text-sm md:text-md px-3 py-1 md:px-6 md:py-2  rounded-md'>Sign Up</Link>
                    }
                </div>
            </div>
        </section>
    );
};

export default Navbar;