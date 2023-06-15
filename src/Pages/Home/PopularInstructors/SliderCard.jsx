import React from 'react';

const SliderCard = ({item}) => {
    return (
        <div className="carousel__cell number-slide1 cursor-pointer">
            <div className="flex flex-col justify-between h-full p-3 gap-1 md:gap-3">
                <img src={item.image} alt=""
                    className="lg:scale-110 h-40 sm:h-52" />
                <div className="flex justify-between items-center gap-2">
                    <button
                        className="text-white ring-1 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1 hover:text-blue-500 hover:bg-white duration-300">Classes: {item.classes}
                    </button>
                    <button
                        className="text-white ring-1 ring-white rounded-full text-xs px-1 md:px-3 py-[2px] md:py-1  hover:text-blue-500 hover:bg-white duration-300">Students: {item.students}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;