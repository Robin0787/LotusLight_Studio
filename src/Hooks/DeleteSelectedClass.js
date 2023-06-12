import axios from 'axios';

const DeleteSelectedClass = async (id) => {
    const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/delete-selected-class/${id}`);
    return res.data;
};

export default DeleteSelectedClass;
