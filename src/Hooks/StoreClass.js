import axios from "axios";

 const StoreClass = async (classInfo) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/add-class`, {...classInfo});
    return res.data;
}

export default StoreClass;