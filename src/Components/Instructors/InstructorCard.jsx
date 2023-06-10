import React from 'react';

const InstructorCard = ({ item }) => {
    const { displayName, image, email, classes = 0 } = item;
    const colors = ['#ff3811', '#40afff', '#ff4b40', '#ff26ff', '#40fff2'];

    function getColor() {
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }
    const color = getColor();
    return (
        <article className='rounded-lg shadow-xl shadow-blue-200 p-4 flex flex-col justify-between gap-2'>
            <img src={image} alt="" className={` object-cover rounded-lg h-2/3`} style={{ backgroundColor: color}} />
            <div>
                <h2 className='text-xl tracking-[2px]'>{displayName}</h2>
                <p className='text-md font-thin tracking-[1px] text-gray-600'>{email}</p>
            </div>
            <div className="flex justify-between items-center mt-5">
                <button className='rounded-md text-sm px-4 py-1 text-gray-500 ring-1 ring-blue-400 cursor-default'>Classes: {classes}</button>
                <button
                    className='rounded-md text-sm px-4 py-1 ring-1 ring-blue-500 text-white  bg-blue-600 hover:bg-white hover:text-blue-700 duration-300'>
                    See Classes</button>
            </div>
        </article>
    );
};

export default InstructorCard;