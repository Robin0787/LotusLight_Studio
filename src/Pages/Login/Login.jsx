import Lottie from "lottie-react";
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import animation from "../../assets/signUpAnimation.json";

const Login = () => {
    const [showEyeIcon, setShowEyeIcon] = useState(false);
    const [showPass, setShowPass] = useState(false);
    return (
        <section className='flex justify-center items-center min-h-screen '>
            <section className='w-full sm:w-[90%] md:w-4/5 lg:w-2/3 mx-auto shadow-lg border p-5 sm:p-10 rounded-lg'>
                <form >
                    <section className='md:flex items-center gap-5 lg:gap-10 text-gray-800 font-thin'>
                        <article className='md:w-1/2'>
                            {/* animation gif */}
                            <div className='w-full'>
                                <Lottie animationData={animation} loop={true} />
                            </div>
                        </article>
                        <article className='md:w-1/2 space-y-3 md:space-y-6 lg:px-5'>
                            {/* Emails input field */}
                            <div className='space-y-1'>
                                <label htmlFor="email">Email</label><br />
                                <input type="text"
                                    className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin' placeholder='Your Email' />
                            </div>
                            {/* Passwords input field */}
                            <div className='space-y-1'>
                                <label htmlFor="password">Password</label><br />
                                <div className="relative">
                                    <input type={showPass ? 'text' : "password"}
                                        className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin' placeholder='Password' />
                                    {
                                        showPass ?
                                            <FaEye onClick={() => { setShowPass(!showPass) }} size={14} className="text-blue-400 absolute right-4 top-3 cursor-pointer" />
                                            :
                                            <FaEyeSlash onClick={() => { setShowPass(!showPass) }} size={14} className="text-blue-400 absolute right-4 top-3 cursor-pointer" />
                                    }
                                </div>
                            </div>
                            {/* Sign Up Button */}
                            <div className="space-y-1">
                                <button
                                    className='w-full py-3 bg-gradient-to-tr from-blue-500 to-blue-900 text-white  hover:from-blue-600 hover:to-blue-900 duration-300 rounded-md'>Login
                                </button>
                                <p className="text-sm">Don't have an account? <Link to={'/signUp'} className="text-blue-600">Sign Up</Link></p>
                            </div>

                        </article>
                    </section>
                    {/* Social Login */}
                    <div className="space-y-5 text-gray-700 mt-5 md:mt-0">
                        <div className="flex justify-between items-center">
                            <hr className="border border-gray-200 w-[15%] ml-auto" />
                            <span className="text-sm px-3">Or continue with</span>
                            <hr className="border border-gray-200 w-[15%] mr-auto" />
                        </div>
                        <div className="flex justify-center items-center text-white gap-5">
                            <SocialLogin />
                        </div>
                    </div>
                </form>
            </section>
        </section>
    );
};

export default Login;