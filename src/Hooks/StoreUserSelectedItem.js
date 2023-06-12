import axios from 'axios';

const StoreUserSelectedItem = async (selectedItem) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/add-selected-class`, 
    {...selectedItem});
    return res.data;
};

export default StoreUserSelectedItem;