import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import AddClassToEnroll from '../../Hooks/AddClassToEnroll';
import DeleteClassFromSelectedClasses from '../../Hooks/DeleteClassFromSelectedClasses';
import StorePaymentInvoice from '../../Hooks/StorePaymentInvoice';
import UpdateEnrolledStudentsInClasses from '../../Hooks/UpdateEnrolledStudentsInClasses';
import UpdateInstructorsStudentNumber from '../../Hooks/UpdateInstructorsStudentNumber';
import { authContext } from '../../Provider/AuthProvider';

const CheckOutForm = ({classDetails}) => {
    const {price, _id, classId, className,image,instructorName,instructorEmail,userName,userEmail,} = classDetails;
    const stripe = useStripe();
    const elements = useElements();
    const [paymentLoading, setPaymentLoading] = useState(false);
    const [cardError, setCardError] = useState('');
    const {user} = useContext(authContext);
    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        console.log('inside form useEffect');
        axios.post(`${import.meta.env.VITE_BASE_URL}/create-payment-intent`, {price})
        .then(res => {
            setClientSecret(res.data.ClientSecret);
        });
    }, [price]);
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        setPaymentLoading(true);
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            setPaymentLoading(false);
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            setPaymentLoading(false);
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
            console.log('[error]', error);
            setPaymentLoading(false);
            return;
        } else {
            setCardError('');
            setPaymentLoading(false);
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'Anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        )
        if (confirmError) {
            toast.error(confirmError.message);
            setCardError(confirmError.message);
            console.log(confirmError);
            return;
        }
        if(paymentIntent.status === 'succeeded'){
            setPaymentLoading(false);
            const paymentInvoice = {
                className,image,price,instructorName,instructorEmail,userName,
                userEmail,classId,transactionId: paymentIntent.id
            }
            UpdateInstructorsStudentNumber(instructorEmail);
            UpdateEnrolledStudentsInClasses(classId);
            DeleteClassFromSelectedClasses(_id);
            AddClassToEnroll(classDetails);
            StorePaymentInvoice(paymentInvoice)
            .then(data => {
                if(data.insertedId){
                    toast.success('Successful');
                    navigate('/dashboard/enrolled-classes');
                }
            })
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className='relative'>
            <button 
            disabled={!stripe || !clientSecret || paymentLoading}
            className='w-full py-3 flex justify-center bg-gradient-to-tr from-blue-500 to-blue-900 text-white focus:outline-0  hover:from-blue-600 hover:to-blue-900 duration-300 rounded-md disabled:cursor-not-allowed disabled:opacity-60 mt-8'
            type="submit" 
            >
                {
                    paymentLoading ?
                        <ImSpinner9 size={24} className='animate-spin duration-300 text-white' /> : "Pay"
                }
            </button>
            <>{cardError && <em className='text-sm text-blue-600 absolute -bottom-6'>
                {cardError}</em>}</>
            </div>
        </form>
    );
};


export default CheckOutForm;