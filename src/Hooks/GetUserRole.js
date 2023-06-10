import axios from "axios";

export const GetUserRole = async (email) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user-role/${email}`);
    return res.data?.role;
}