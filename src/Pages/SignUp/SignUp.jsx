import Lottie from "lottie-react";
import React, { useState } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import animation from "../../assets/signUpAnimation.json";

const SignUp = () => {
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
    const handleImageChange = image => {
        setUploadButtonText(image.name);
    }
    return (
        <section className='flex justify-center items-center min-h-screen '>
            <section className='w-full sm:w-[90%] md:w-4/5 lg:w-2/3 mx-auto shadow-lg p-10 rounded-lg'>
                <form className='md:flex items-center gap-10 text-gray-800 font-thin'>
                    <article className='md:w-1/2 space-y-4'>
                        {/* First & Last Names input field */}
                        <div className='flex items-center gap-5'>
                            <div className='md:w-1/2 space-y-1'>
                                <label htmlFor="firstName">First Name</label><br />
                                <input type="text"
                                    className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin' placeholder='First Name' />
                            </div>
                            <div className='md:w-1/2 space-y-1'>
                                <label htmlFor="lastName">Last Name</label><br />
                                <input type="text"
                                    className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin'
                                    placeholder='Last Name' />
                            </div>
                        </div>
                        {/* Emails input field */}
                        <div className='space-y-1'>
                            <label htmlFor="email">Email</label><br />
                            <input type="text"
                                className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin' placeholder='Your Email' />
                        </div>
                        {/* Passwords input field */}
                        <div className='space-y-1'>
                            <label htmlFor="password">Password</label><br />
                            <input type="password"
                                className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin' placeholder='Password' />
                        </div>
                        {/* Confirm Passwords input field */}
                        <div className='space-y-1'>
                            <label htmlFor="password">Confirm Password</label><br />
                            <input type="password"
                                className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin' placeholder='Confirm Password' />
                        </div>
                        {/* Image input field */}
                        <div className='bg-white w-full  m-auto rounded-lg '>
                            <div className='flex flex-col w-full mx-auto text-center'>
                                <label>
                                    <input
                                        onChange={(e) => { handleImageChange(e.target.files[0]) }}
                                        className='text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        name='image'
                                        id='image'
                                        accept='image/*'
                                        required
                                        hidden
                                    />
                                    <div className='text-white bg-blue-600  rounded-sm font-thin w-full cursor-pointer py-2 duration-500'>
                                        {uploadButtonText}
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/* Phone Number & Gender input field */}
                        <div className='flex items-center gap-5'>
                            <div className='md:w-1/2 space-y-1'>
                                <label htmlFor="phone">Phone</label><br />
                                <input type="number"
                                    className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin' placeholder='Phone' />
                            </div>
                            <div className='md:w-1/2 space-y-1'>
                                <label htmlFor="lastName">Gender</label><br />
                                <select name="gender"
                                    className='p-2 text-sm focus:px-5  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300' >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="third">Prefer not to say</option>
                                </select>
                            </div>
                        </div>
                    </article>
                    <article className='md:w-1/2'>
                        {/* animation gif */}
                        <div className='w-full'>
                            <Lottie animationData={animation} loop={true} size={40} />
                        </div>
                        {/* Sign Up Button */}
                        <div className="space-y-1">
                            <button
                                className='w-full py-3 bg-gradient-to-tr from-blue-500 to-blue-900 text-white  hover:from-blue-600 hover:to-blue-900 duration-300 rounded-md'>Sign Up
                            </button>
                            <p className="text-sm">Already have an account? <Link to={'/login'} className="text-blue-600">Login</Link></p>
                        </div>
                        {/* Social SignUp */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <hr className="border border-gray-200 w-1/3" />
                                <span className="text-sm">Or continue with</span>
                                <hr className="border border-gray-200 w-1/3" />
                            </div>
                            <div className="flex justify-center items-center text-white gap-5">
                                <div
                                    className="p-2 rounded-full bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500 duration-300 hover:ring-2 ring-blue-500">
                                    <FaGoogle size={20} />
                                </div>
                                <div
                                    className="p-2 rounded-full bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500 duration-300 hover:ring-2 ring-blue-500">
                                    <FaGithub size={20} />
                                </div>
                            </div>
                        </div>
                    </article>
                </form>
            </section>
        </section>
    );
};

export default SignUp;