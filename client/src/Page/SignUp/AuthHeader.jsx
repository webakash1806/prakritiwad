import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AuthHeader = () => {

    const [active, setActive] = useState(true)

    const formActive = () => {
        active ? setActive(false) : setActive(true)
    }

    return (
        <div className='mt-[5rem] shadow-[0px_0px_5px_#808080] text-black  border  rounded-t-md w-[19.5rem] xs:w-[22rem]  flex '>
            <Link to="/login"
                onClick={formActive}
                className={`p-[0.5rem_0] w-[50%] text-center  ${active ? 'bg-[#A22EFF] text-white' : "bg-transparent text-black"}`}>Login</Link>
            <Link to="/signup"
                onClick={formActive}
                className={`p-[0.5rem_0] w-[50%] text-center  ${!active ? 'bg-[#A22EFF] text-white' : "bg-transparent text-black"}`}>SignUp</Link>
        </div>
    )
}

export default AuthHeader