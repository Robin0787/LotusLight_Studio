import axios from 'axios';

const AddClassToEnroll = async (classDetails) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/add-class-to-enrolled`, 
    {...classDetails});
    return res.data;
};

export default AddClassToEnroll;