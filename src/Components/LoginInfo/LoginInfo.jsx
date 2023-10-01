

const LoginInfo = () => {
    return (
        <section className="absolute top-5 left-5 w-[280px] bg-blue-500  text-white rounded-md p-5">
            <div className="pb-2">
                <h1 className='text-xl font-bold text-center pb-2'>Admin</h1>
                <p className="text-start text-base pb-1">Email: harry@maguire.com</p>
                <p className="text-start text-base">Password: Harry12@</p>
            </div>
            <div className="pb-2">
                <h1 className='text-xl font-bold text-center pb-2'>Instructor</h1>
                <p className="text-start text-base pb-1">Email: aida@bugg.com</p>
                <p className="text-start text-base">Password: Aida12@</p>
            </div>
            <div className="pb-2">
                <h1 className='text-lg font-bold text-center pb-2'>User/Student</h1>
                <p className="text-start text-base pb-1">Email: harry@kane.com</p>
                <p className="text-start text-base">Password: Harry12@</p>
            </div>
        </section>
    );
};

export default LoginInfo;