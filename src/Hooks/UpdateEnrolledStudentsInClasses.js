import axios from 'axios';

const UpdateEnrolledStudentsInClasses = async (id) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/update-enrolled-students/${id}`);
    return res.data;
};

export default UpdateEnrolledStudentsInClasses;