import axios from 'axios';

const StorePaymentInvoice = async (paymentInvoice) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/store-payment-details`, {...paymentInvoice});
    return res.data;
};

export default StorePaymentInvoice;