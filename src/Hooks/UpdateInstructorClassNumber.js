
import axios from 'axios';

const UpdateInstructorClassNumber = async (email) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/update-class-number/${email}`);
    return res.data;
};

export default UpdateInstructorClassNumber;