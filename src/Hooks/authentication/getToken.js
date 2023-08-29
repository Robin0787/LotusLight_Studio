
import axios from 'axios';

const getToken = async (email) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/get-token`, {user: {email}});
    return res.data.userToken;
};

export default getToken;