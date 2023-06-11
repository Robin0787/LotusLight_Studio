import axios from 'axios';

const UpdateClass = async (updateInfo) => {
    const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/update-class/${updateInfo.id}`, {...updateInfo});
    return res.data;
};

export default UpdateClass;