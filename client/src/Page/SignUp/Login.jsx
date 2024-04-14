import AuthHeader from "./AuthHeader"

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-16">
            <AuthHeader />
            <form action=""
                className="shadow-[0px_0px_5px_#808080] flex flex-col text-center text-black border w-[19.5rem] xs:w-[22rem]">
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                    <label htmlFor="" className="text-[16.5px] font-[500]">Email</label>
                    <input
                        type="text"
                        placeholder="Enter email..."
                        className="border w-full rounded-[3px] outline-none p-1 text-[16px]" />
                </div>
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem] font-[500]">
                    <label htmlFor="" className="text-[16.5px]">Password</label>
                    <input placeholder="Enter password..." type="password" className="border w-full rounded-[3px] outline-none p-1" />
                </div>
                <button className='text-center bg-[#A22EFF] rounded-md p-2 m-[1rem_0.5rem] xs:m-[1rem_1.5rem] hover:bg-[#bd4aff] duration-300 text-white'>Login</button>
            </form>
        </div>
    )
}

export default Login