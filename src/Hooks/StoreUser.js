import axios from "axios";

const StoreUser = async (email, details) => {
    const url = `${import.meta.env.VITE_BASE_URL}/store-user/${email}`;
    const res = await axios.put(url, {details: details})
    return res.data;
};

export default StoreUser;