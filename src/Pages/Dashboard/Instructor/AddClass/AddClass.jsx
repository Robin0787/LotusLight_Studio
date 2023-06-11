import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import StoreClass from '../../../../Hooks/StoreClass';
import UploadImage from '../../../../Hooks/UploadImage';
import { authContext } from '../../../../Provider/AuthProvider';

const AddClass = () => {
    const [uploadButtonText, setUploadButtonText] = useState('SVG, PNG, JPG or GIF (MAX. 800x400px)');
    const { user } = useContext(authContext);
    const [imageUploading, setImageUploading] = useState(false);
    const [imageURL, setImageURL] = useState('');
    const [classUploading, setClassUploading] = useState(false);

    function handleAddClass(e) {
        e.preventDefault();
        setClassUploading(true);
        if (imageURL) {
            const form = e.target;
            const instructorName = form.instructorName.value;
            const instructorEmail = form.instructorEmail.value;
            const className = form.className.value;
            const seats = parseFloat(form.seats.value);
            const price = parseFloat(form.price.value);
            const classInfo = { className, image: imageURL, seats, price, instructorName, instructorEmail, status: 'pending'};
            StoreClass(classInfo)
            .then(data => {
                if(data.insertedId){
                    toast.success('Class Added');
                    setClassUploading(false);
                    form.reset();
                }
            }).catch(err=>{console.log(err.message); setClassUploading(false)})
        } else {
            if(imageUploading){
                toast.error('Wait! Image is uploading.');
            }else {
                toast.error('Please, Upload Image!');
                setClassUploading(false);
            }
        }
    }

    // Changing the name of image input field based on image name;
    const handleImageChange = image => {
        setImageUploading(true);
        setUploadButtonText(image.name);
        UploadImage(image)
            .then(data => {
                setImageURL(data.display_url);
                setImageUploading(false);
                setClassUploading(false);
            }).catch(err => { console.log(err.message); setImageUploading(false) });
    };

    return (
        <section className='min-h-screen flex justify-center items-center px-3 py-5 md:px-0 lg:px-10 '>
            <section className='w-full sm:w-[90%] md:w-4/5 lg:w-2/3 mx-auto shadow-lg border p-2 md:p-5 lg:p-10 rounded-lg'>
                <form onSubmit={handleAddClass} className='flex flex-col justify-between gap-5'>
                    {/* Class Image input field */}
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-blue-500 ">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-100"><span className="font-semibold text-white">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-100">{uploadButtonText}</p>
                            </div>
                            <input onChange={(e) => handleImageChange(e.target.files[0])} id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                    <section className='sm:flex justify-between items-center gap-5 lg:gap-10 text-gray-800 '>
                        <article className='sm:w-1/2 space-y-5'>
                            {/* Class Name input field */}
                            <div className='space-y-1 relative'>
                                <label htmlFor="className">Class Name</label><br />
                                <input type="text" name='className'
                                    className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin'
                                    placeholder='Class Name' autoComplete="off" required />
                            </div>
                            {/* Available seats and price input field */}
                            <div className="sm:flex justify-between items-center gap-4">
                                {/* Available Seats input field */}
                                <div className='w-full  md:w-1/2 space-y-2 relative'>
                                    <label htmlFor="seats">Seats</label><br />
                                    <input type="number" name='seats'
                                        className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin'
                                        placeholder='Seats' autoComplete="off" required />
                                </div>
                                {/* Class price input field */}
                                <div className='w-full md:w-1/2 space-y-1 relative'>
                                    <label htmlFor="price">Price</label><br />
                                    <input type="number" name='price'
                                        className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin'
                                        placeholder='price' autoComplete="off" required />
                                </div>
                            </div>
                        </article>
                        <article className='sm:w-1/2 space-y-5'>
                            {/* Instructor Name input field */}
                            <div className='space-y-1 relative'>
                                <label htmlFor="instructorName">Instructor Name</label><br />
                                <input type="text" name='instructorName'
                                    className='p-2 text-sm  border focus:outline-0 w-full rounded-md  placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin read-only:bg-blue-500 read-only:text-white read-only:cursor-not-allowed'
                                    defaultValue={user?.displayName} readOnly />
                            </div>
                            {/* Instructor Email input field */}
                            <div className='space-y-1 relative'>
                                <label htmlFor="instructorEmail">Instructor Email</label><br />
                                <input type="email" name='instructorEmail'
                                    className='p-2 text-sm  border focus:outline-0 w-full rounded-md  placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin read-only:bg-blue-500 read-only:text-white read-only:cursor-not-allowed'
                                    defaultValue={user?.email} readOnly />
                            </div>
                        </article>
                    </section>
                    {/* Add Class Button */}
                    <div className="mt-5">
                        <button
                            type="submit"
                            className='w-full py-3 flex justify-center bg-gradient-to-tr from-blue-500 to-blue-900 text-white  hover:from-blue-600 hover:to-blue-900 duration-300 rounded-md disabled:cursor-not-allowed'
                            disabled={classUploading}
                        >
                            {classUploading ? <ImSpinner9 size={24} className="text-white animate-spin duration-300 text-center" /> : 'Add Class'}
                        </button>
                    </div>
                </form>
            </section>
        </section>
    );
};

export default AddClass;
