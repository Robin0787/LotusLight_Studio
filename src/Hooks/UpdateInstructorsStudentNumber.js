import axios from 'axios';

const UpdateInstructorsStudentNumber = async (email) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/update-students-number/${email}`);
    return res.data;
};

export default UpdateInstructorsStudentNumber;