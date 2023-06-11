import axios from 'axios';

const DeleteInstructorClass = async (id) => {
    const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/delete-class/${id}`);
    return res.data;
};

export default DeleteInstructorClass;