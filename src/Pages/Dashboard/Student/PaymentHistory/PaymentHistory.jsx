import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { authContext } from '../../../../Provider/AuthProvider';
// import HistoryCard from './HistoryCard';
import { RadioGroup } from '@headlessui/react';
const plans = [
    {
      name: 'Startup',
      ram: '12GB',
      cpus: '6 CPUs',
      disk: '160 GB SSD disk',
    },
    {
      name: 'Business',
      ram: '16GB',
      cpus: '8 CPUs',
      disk: '512 GB SSD disk',
    },
    {
      name: 'Enterprise',
      ram: '32GB',
      cpus: '12 CPUs',
      disk: '1024 GB SSD disk',
    },
  ]



const PaymentHistory = () => {
    const { user, loading } = useContext(authContext);
    const [selected, setSelected] = useState(plans[0]);
    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['payments'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/payments/${user.email}`);
            return res.data;
        }
    })

    return (
        <section className='p-5 md:p-10'>
            {
                payments.length > 0 ? (
                    <div className="w-full px-4 py-16">
                        <div className="mx-auto w-full ">
                            <RadioGroup value={selected} onChange={setSelected}>
                                <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                                <div className="space-y-5">
                                    {payments.map((plan, index) => (
                                        <RadioGroup.Option
                                            key={plan.className}
                                            value={plan}
                                            className={({ active, checked }) =>
                                                `${active
                                                    ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                                    : ''
                                                }
                                ${checked ? 'bg-blue-600 bg-opacity-75 text-white' : (index == 0? 'bg-blue-600' :'bg-white')
                                                }
                                  relative flex cursor-pointer rounded-lg px-5 py-4 shadow-lg
                                  shadow-blue-200 focus:outline-none`
                                            }
                                        >
                                            {({ active, checked }) => (
                                                <>
                                                    <div className="flex w-full items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="text-base space-y-2">
                                                                <RadioGroup.Label
                                                                    as="p"
                                                                    className={`font-medium text-lg  ${checked ? 'text-white' :  (index == 0? 'text-white' :'text-gray-900')
                                                                        }`}
                                                                >
                                                                    {plan.className}
                                                                </RadioGroup.Label>
                                                                <RadioGroup.Description
                                                                    as="span"
                                                                    className={`inline ${checked ? 'text-sky-100' : (index ==0 ? 'text-gray-200': 'text-gray-500')
                                                                        }`}
                                                                >
                                                                    
                                                                    <p>{plan.instructorName}</p>
                                                                    <p>Email: {plan.instructorEmail}</p>
                                                                    <p>Price: {plan.price}</p>
                                                                    <p>Transaction ID: {plan.transactionId}</p>
                                                                </RadioGroup.Description>
                                                            </div>
                                                        </div>
                                                        {checked && (
                                                            <div className="shrink-0 text-white">
                                                                <CheckIcon className="h-6 w-6" />
                                                            </div>
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </RadioGroup.Option>
                                    ))}
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                )
                    :
                    (isLoading ? (<>
                        <div className='flex justify-center items-center h-[160px]'>
                            <ImSpinner9 size={30} className="text-blue-500 animate-spin duration-300 text-center" />
                        </div>
                    </>) : (<>
                        <article className='flex flex-col gap-5 justify-center items-center h-[80vh]'>
                            <h2 className="text-4xl font-thin">No Payment History!</h2>
                            <Link
                                to={'/classes'}
                                className='text-white bg-blue-600 px-6 py-2 rounded-lg ring-2 ring-blue-200 hover:ring-blue-600 duration-300'>
                                See Classes
                            </Link>
                        </article>
                    </>))
            }
        </section>
    );
};

export default PaymentHistory;








function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}