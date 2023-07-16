import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from "../../../assets/logo.png";
const Footer = () => {
    return (
        <section className='bg-black text-gray-200 py-24 mt-12 lg:mt-16 xl:mt-20 mx-auto'>
            <article className='w-[90%] mx-auto grid grid-cols-2 md:grid-cols-[3fr_1fr_1fr] 
            lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 '>
                <div className='space-y-5'>
                    <div className='md:flex items-center gap-5'>
                        <img src={logo} alt="" className='h-12 w-12  rounded-full' />
                        <h2 className="text-2xl font-bold">Lotus Light Studio</h2>
                    </div>
                    <p className="text-md text-justify text-gray-400">Step into a world of adventure and imagination with our captivating collection of animal-inspired toys..</p>
                    <div className='flex items-center justify-start gap-4'>
                        <a target='_blank' rel='noreferrer' href='https://github.com/Robin0787'
                            className='bg-gray-100 duration-300 p-2 cursor-pointer rounded-full text-blue-600 hover:bg-black hover:ring ring-white hover:text-white '>
                            <FaGithub size={20} /></a>
                        <a target='_blank' rel='noreferrer' href='https://web.facebook.com/robinhossen636' className='bg-gray-100 duration-300 p-2 cursor-pointer rounded-full text-blue-500 hover:bg-black hover:ring ring-white hover:text-white'>
                            <FaFacebook size={20} /></a>
                        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/robin0787/' className='bg-gray-100  duration-300 p-2 cursor-pointer rounded-full text-blue-500 hover:bg-black hover:ring ring-white hover:text-white'>
                            <FaLinkedinIn size={20} /></a>
                        <a target='_blank' rel='noreferrer' href='https://twitter.com/Mohamma19904459' className='bg-gray-100  duration-300 p-2 cursor-pointer rounded-full text-blue-500 hover:bg-black hover:ring ring-white hover:text-white'>
                            <FaTwitter size={20} /></a>
                    </div>
                </div>
                <div className='space-y-5'>
                    <h2 className="text-xl">Company</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h2 className="text-xl">Product</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h2 className="text-xl">Support</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h2 className="text-xl">Contact</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>mohammadrobin636@gmail.com</li>
                        <li>+880 17996 18056</li>
                        <li>Brahmanbaria, Dhaka, Bangladesh</li>
                    </ul>
                </div>
            </article>
            <hr className='border-gray-800 my-10 w-[90%] mx-auto' />
            <div className='w-[90%] mx-auto flex justify-between items-center text-sm text-gray-400'>
                <p>@2023 Lotus Light Studio. All Rights Reserved</p>
                <p>Powered by Lotus Light Studio</p>
            </div>
        </section>
    );
};

export default Footer;