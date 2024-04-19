import AuthHeader from "./AuthHeader"

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 ">
            <AuthHeader />
            <form action=""
                className=" flex border shadow-[0px_0px_5px_#808080] rounded-b-md w-[19.5rem] xs:w-[22rem] flex-col text-center text-black ">
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        placeholder="Enter name..."
                        className="border w-full rounded-[3px] bg-white outline-none p-1 text-[16px]" />
                </div>
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        placeholder="Enter email..."
                        className="border w-full rounded-[3px] bg-white outline-none p-1 text-[16px]" />
                </div>
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                    <label htmlFor="">Password</label>

                    <input
                        placeholder="Enter password..."
                        type="password" className="border w-full bg-white rounded-[3px] outline-none p-1" />
                </div>
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                    <label htmlFor="">Confirm Password</label>
                    <input
                        placeholder="Enter confirm password..."
                        type="password" className="border w-full bg-white rounded-[3px] outline-none p-1" />
                </div>
                <button className='text-center bg-[#A22EFF] rounded-md p-2 m-[1rem_0.5rem] xs:m-[1rem_1.5rem] hover:bg-[#bd4aff] duration-300 text-white'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp