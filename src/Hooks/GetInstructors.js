import axios from "axios";

export const GetInstructors = async () => { 
    const url = `${import.meta.env.VITE_BASE_URL}/instructors`;
    const res = await axios.get(url);
    const data = await res.data;
    return data;
}