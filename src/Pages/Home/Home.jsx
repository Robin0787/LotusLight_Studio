import React from 'react';
import ClassesSlider from './PopularClasses/ClassesSlider';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import Slider from './Slider/Slider';

const Home = () => {

    return (
        <section>
            <Slider />
            <ClassesSlider />
            <PopularInstructors />
        </section>
    );
};

export default Home;