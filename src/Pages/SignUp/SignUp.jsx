import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import StoreUser from "../../Hooks/StoreUser";
import UploadImage from "../../Hooks/UploadImage";
import { authContext } from "../../Provider/AuthProvider";
import animation from "../../assets/signUpAnimation.json";

const SignUp = () => {
    const [showEyeIcon, setShowEyeIcon] = useState(false);
    const [passError, setPassError] = useState('');
    const [isPassOk, setIsPassOk] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
    const { register, handleSubmit, formState: { errors }, reset, setError, clearErrors } = useForm();
    const { createUser, processing, setProcessing } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (data) => {
        setProcessing(true);
        if (isPassOk) {
            if (data.password === data.confirmPassword) {
                UploadImage(data.image[0])
                    .then(res => {
                        const imageURL = res?.display_url;
                        createUser(data.email, data.password)
                            .then(res => {
                                toast.success('SignUp Successful');
                                setProcessing(false);
                                reset();
                                navigate(from, {replace: true});
                                // Storing the users information to database
                                const userDetails = {
                                    ...data,
                                    displayName: `${data.firstName} ${data.lastName}`,
                                    photoURL: imageURL,
                                    image: imageURL,
                                    password: '******',
                                    confirmPassword: '******'
                                }
                                StoreUser(res.user?.email, {...userDetails});
                                // Updating users profile details on firebase
                                updateProfile(res.user, { displayName: `${data.firstName} ${data.lastName}`, photoURL: imageURL });
                            }).catch(err => { toast.error('Something Wrong!'); console.log(err.message); setProcessing(false); })
                    })
            }
            else {
                toast.error("Password didn't matched");
                setProcessing(false);
            }
        }
        else {
            toast.error("Password is too weak!");
            setProcessing(false);
        }
    }
    // Changing the name of image input field based on image name;
    const handleImageChange = image => {
        setUploadButtonText(image.name);
    }
    // listening password on every change
    function handlePassChange(e) {
        const pass = e.target.value;
        if (!/(?=.*[A-Z])/.test(pass)) {
            setPassError('Password must contain a uppercase letter');
            setIsPassOk(false);
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(pass)) {
            setPassError('Password must contain at least two numbers');
            setIsPassOk(false);
        }
        else if (!/(?=.*[!@#$%^&*+=])/.test(pass)) {
            setPassError('Password must contain a special character');
            setIsPassOk(false);
        }
        else if (pass.length < 6) {
            setPassError('Password must contain minimum six characters');
            setIsPassOk(false);
        }
        else {
            setIsPassOk(true);
            clearErrors('password')
            setPassError('');
        }
        validatePass(pass);
    }
    // Validating the password that user have written
    function validatePass(pass) {
        if (pass.length > 0) {
            setShowEyeIcon(true);
        } else {
            setShowEyeIcon(false);
            setPassError('');
        }
    }
    return (
        <section className='flex justify-center items-center min-h-screen '>
            <section className='w-full sm:w-[90%] md:w-4/5 lg:w-2/3 mx-auto shadow-lg border p-5 sm:p-10 rounded-lg'>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <section className='md:flex items-center gap-5 lg:gap-10 text-gray-800 font-thin'>
                        <article className='md:w-1/2 space-y-5'>
                            {/* animation gif */}
                            <div className='w-full md:hidden'>
                                <Lottie animationData={animation} loop={true} />
                            </div>
                            {/* First & Last Names input field */}
                            <div className='flex items-center gap-5'>
                                <div className='w-full md:w-1/2 space-y-1 relative'>
                                    <label htmlFor="firstName">First Name</label><br />
                                    <input type="text"
                                        className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin'
                                        {...register('firstName', { required: true })}
                                        placeholder='First Name' autoComplete="off" />
                                    {errors.firstName && <p className="text-blue-400 text-xs text-left absolute -bottom-[18px]">This field is required!</p>}
                                </div>
                                <div className='w-full md:w-1/2 space-y-1 relative'>
                                    <label htmlFor="lastName">Last Name</label><br />
                                    <input type="text"
                                        className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin'
                                        {...register('lastName', { required: true })}
                                        placeholder='Last Name' autoComplete="off" />
                                    {errors.lastName && <p className="text-blue-400 text-xs text-left absolute -bottom-[18px]">This field is required!</p>}
                                </div>
                            </div>
                            {/* Emails input field */}
                            <div className='space-y-1 relative'>
                                <label htmlFor="email">Email</label><br />
                                <input type="email"
                                    className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin'
                                    {...register('email', { required: true })}
                                    placeholder='Your Email' autoComplete="off" />
                                {errors.email && <p className="text-blue-400 text-xs text-left absolute -bottom-[18px]">This field is required!</p>}
                            </div>
                            {/* Passwords input field */}
                            <div className='space-y-1 relative'>
                                <label htmlFor="password">Password</label><br />
                                <div className="relative">
                                    <input type={showPass ? 'text' : "password"}
                                        className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin'
                                        {...register('password', { required: true })}
                                        placeholder='Password' autoComplete="off"
                                        onChange={handlePassChange} />
                                    {
                                        showEyeIcon ? (showPass ?
                                            <FaEye onClick={() => { setShowPass(!showPass) }} size={14} className="text-blue-400 absolute right-4 top-3 cursor-pointer" />
                                            :
                                            <FaEyeSlash onClick={() => { setShowPass(!showPass) }} size={14} className="text-blue-400 absolute right-4 top-3 cursor-pointer" />)
                                            :
                                            ''
                                    }
                                    {passError ? "" : (errors.password && <p className="text-blue-400 text-xs text-left absolute -bottom-[18px]">This field is required!</p>)}
                                    {passError && <p className="text-blue-400 text-xs text-left absolute -bottom-[18px]">{passError}</p>}
                                </div>
                            </div>
                            {/* Confirm Passwords input field */}
                            <div className='space-y-1 relative'>
                                <label htmlFor="password">Confirm Password</label><br />
                                <input type={showPass ? 'text' : "password"}
                                    className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin'
                                    {...register('confirmPassword', { required: true })}
                                    placeholder='Confirm Password' autoComplete="off" />
                                {(errors.confirmPassword && <p className="text-blue-400 text-xs text-left absolute -bottom-[18px]">This field is required!</p>)}
                            </div>
                            {/* Image & Address input field */}
                            <div className="flex items-center gap-5">
                                <div className='bg-white space-y-1  m-auto rounded-lg w-1/2'>
                                    <label htmlFor="Image">Image</label><br />
                                    <div className='flex flex-col w-full mx-auto text-center relative'>
                                        <label>
                                            <input
                                                onChange={(e) => { handleImageChange(e.target.files[0]) }}
                                                className='p-2 py-[6px] text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin'
                                                type='file'
                                                name='image'
                                                id='image'
                                                accept='image/*'
                                                {...register('image', { required: true })}
                                            />
                                        </label>
                                        {errors.image && <p className="text-blue-400 text-xs text-left absolute -bottom-[18px]">This field is required!</p>}
                                    </div>
                                </div>
                                <div className='space-y-1 w-1/2 relative'>
                                    <label htmlFor="address">Address</label><br />
                                    <input type="text"
                                        className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin'
                                        {...register('address', { required: true })} placeholder='Address' autoComplete="off" />
                                    {errors.address && <p className="text-blue-400 text-xs text-left absolute -bottom-[18px]">This field is required!</p>}
                                </div>
                            </div>
                            {/* Phone Number & Gender input field */}
                            <div className='flex items-center gap-5'>
                                <div className='w-full md:w-1/2 space-y-1 relative'>
                                    <label htmlFor="phone">Phone</label><br />
                                    <input type="number"
                                        className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin'
                                        {...register('phone', { required: true })}
                                        placeholder='Phone' autoComplete="off" />
                                    {errors.phone && <p className="text-blue-400 text-xs text-left absolute -bottom-[18px]">This field is required!</p>}
                                </div>
                                <div className='w-full md:w-1/2 space-y-1 relative'>
                                    <label htmlFor="lastName">Gender</label><br />
                                    <select name="gender"
                                        className='p-2 text-sm focus:px-5  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300' {...register('gender', { required: true })}>
                                        <option disabled selected>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="third">Prefer not to say</option>
                                    </select>
                                    {errors.gender && <p className="text-blue-400 text-xs text-left absolute -bottom-[18px]">This field is required!</p>}
                                </div>
                            </div>
                            {/* Sign Up Button */}
                            <div className="space-y-2">
                                <button
                                    type="submit"
                                    className='w-full py-3 flex justify-center bg-gradient-to-tr from-blue-500 to-blue-900 text-white  hover:from-blue-600 hover:to-blue-900 duration-300 rounded-md disabled:cursor-not-allowed'
                                    disabled={processing}
                                >
                                    {processing ? <ImSpinner9 size={24} className="text-white animate-spin duration-300 text-center" /> : 'Sign Up'}
                                </button>
                            </div>
                        </article>
                        <article className='md:w-1/2'>
                            {/* animation gif */}
                            <div className='w-full hidden md:block'>
                                <Lottie animationData={animation} loop={true} />
                            </div>
                            {/* Social SignUp */}
                            <div className="space-y-5 mt-3 md:mt-0">
                                <div className="flex justify-between items-center">
                                    <hr className="border border-gray-200 w-[15%] ml-auto" />
                                    <span className="text-sm px-3">Or continue with</span>
                                    <hr className="border border-gray-200 w-[15%] mr-auto" />
                                </div>
                                <div className="flex justify-center items-center text-white gap-5">
                                    <SocialLogin />
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <p className="text-sm">Already have an account? <Link to={'/login'} className="text-blue-600">Login</Link></p>
                            </div>
                        </article>
                    </section>
                </form>
            </section>
        </section>
    );
};

export default SignUp;