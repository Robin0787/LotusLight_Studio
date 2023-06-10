import React from 'react';
import { GetUser } from '../../Hooks/GetUsers';
import ClassesSlider from './PopularClasses/ClassesSlider';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import Slider from './Slider/Slider';

const Home = () => {
    GetUser();
    return (
        <section>
            <Slider />
            <ClassesSlider />
            <PopularInstructors />
        </section>
    );
};

export default Home;