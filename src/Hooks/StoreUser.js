import axios from "axios";

const StoreUser = async (email, details) => {
    // const url = `http://localhost:5000/store-user/${email}`;
    const url = `${import.meta.env.VITE_BASE_URL}/store-user/${email}`;
    const res = await axios.put(url, {details: details})
    console.log(res.data);
    return res.data;
};

export default StoreUser;