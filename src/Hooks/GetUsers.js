import axios from "axios";


export async function GetUser () {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`);
    console.log(res.data);
}