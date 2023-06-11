import axios from 'axios';

const UpdateClassStatus = async (id, updatedInfo) => {
    const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/update-class-status/${id}`, {...updatedInfo});
    return res.data;
};

export default UpdateClassStatus;