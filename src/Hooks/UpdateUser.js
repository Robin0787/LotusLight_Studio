import axios from 'axios';

const UpdateUser = async (id, status) => {
    const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/update-user/${id}`, {status: status});
    return res.data;
};

export default UpdateUser;