import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
const Header = () => {

    const [barActive, setBarActive] = useState(true)

    const hamActive = () => {
        barActive ? setBarActive(false) : setBarActive(true)
    }

    const useHeaderList = [{ "url": "/", "list": "Home" },
    { url: "/about", "list": "About" },
    { url: "/add/post", "list": "Add Post" },
    { url: "/contact", "list": "Contact" },
    ]

    return (
        <header className='flex w-full   md:pl-14 md:pr-6 lg:pl-16 lg:pr-8 lg:p-3 px-6 sm:px-10 text-black items-center justify-between z-[100] py-[6px] shadow-[-1px_1px_7px_#000] fixed top-0 left-0'>
            <div className=' w-[2rem] h-[2rem] flex items-center justify-center md:hidden cursor-pointer text-[#bd4aff]' onClick={hamActive}>
                {barActive ? <RxHamburgerMenu className='text-[1.3rem]' />
                    : <RxCross1 className='text-[1.6rem]' />}
            </div>
            <div className='md:mr-6 lg:mr-10'>LOGO</div>
            <nav className={` text-white md:border-0 shadow-[0px_160px_1000px_#12073ac5] md:shadow-none flex border-t-[#201154] border-t-2  p-4 pb-10 md:p-0 w-screen md:max-w-[80vw]  items-center justify-between gap-3 md:gap-0 flex-col absolute 
            ${barActive ? "top-[2.95rem] left-[-60rem] duration-[0.5s]" : "top-[2.85rem] left-0 duration-[0.5s]"}
             md:flex-row md:static `}>
                <div className="flex flex-col md:flex-row gap-3 md:gap-0 ">
                    {useHeaderList.map((val, ind) => {
                        return (<NavLink key={ind + 1} style={({ isActive }) => ({
                            color: isActive ? '#c35dfe' : 'black'
                        })} to={val?.url} end>
                            <div className='text-[1.1rem] 
                font-[500] tracking-wide 
                w-[90vw] md:w-fit text-center md:border-0
                md:hover:border-b-2
                pb-4 pt-1 md:p-[3px_7px] md:m-[0px_6px]
                lg:p-[3px_9px] lg:m-[0px_11px]
                 border-grey hover:border-[#bd4aff] hover:text-[#c35dfe]
                 duration-200 cursor-pointer 
                 border-b-[1px]'>
                                {val?.list}
                            </div >
                        </NavLink>)
                    })}
                </div>
                <Link to="/login" className='text-center w-[90vw] bg-[#A22EFF] rounded-md md:w-fit p-3 mt-6 md:m-0 md:mr-4 md:p-[6px_16px] md:rounded-[4px] md hover:bg-[#bd4aff] duration-300'>Login/Signup</Link>
            </nav>
        </header>
    )
}

export default Header