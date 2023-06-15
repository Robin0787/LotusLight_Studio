import React from 'react';
import ExtraSection from './ExtraSection/ExtraSection';
import ClassesSlider from './PopularClasses/ClassesSlider';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <section>
            <Slider />
            <ClassesSlider />
            <PopularInstructors />
            <ExtraSection />
        </section>
    );
};

export default Home;