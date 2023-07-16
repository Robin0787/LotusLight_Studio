import Categories from './Categories/Categories';
import ClassesSlider from './PopularClasses/ClassesSlider';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import Slider from './Slider/Slider';
import Technologies from './Technologies/Technologies';

const Home = () => {
    return (
        <section>
            <Slider />
            <Categories />
            <ClassesSlider />
            <PopularInstructors />
            <Technologies />
        </section>
    );
};

export default Home;