import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import logo from '../assets/Image/logoPrak.png'
const Header = () => {

    const [barActive, setBarActive] = useState(true)

    const hamActive = () => {
        barActive ? setBarActive(false) : setBarActive(true)
    }

    const useHeaderList = [{ "url": "/", "list": "होम" },

    { url: "/add/post", "list": "खबरें भेजें" },
    { url: "/about", "list": "प्रकृतिवाद क्या है ?" },
    { url: "/contact", "list": "संपर्क करें" },
    { url: "/coming", "list": "पंच तत्वों का कलयुगी परिचय" },
    ]

    return (
        <header className='flex w-full  bg-white   lg:pl-16 lg:pr-8 lg:p-3 px-6 sm:px-10 text-black items-center justify-between z-[1000] py-[6px] shadow-[-1px_1px_7px_#000] fixed top-0 left-0'>
            <div className=' w-[2rem] h-[2rem] flex items-center justify-center lg:hidden cursor-pointer text-[#bd4aff]' onClick={hamActive}>
                {barActive ? <RxHamburgerMenu className='text-[1.3rem]' />
                    : <RxCross1 className='text-[1.3rem]' />}
            </div>
            <div className='flex items-center justify-center gap-2 lg:mr-10'>
                <img src={logo} alt="" className='size-[2.5rem]' />
                <p className='text-[1.2rem] font-semibold text-[#3cac1a]'>प्रकृतिवाद</p></div>
            <nav className={` text-white z-[1000] bg-white lg:border-0 shadow-[0px_160px_1000px_#12073ac5] lg:shadow-none flex border-t-[#201154] border-t-2  p-4 pb-10 lg:p-0 w-screen lg:max-w-[80vw]  items-center justify-between gap-3 lg:gap-0 flex-col absolute 
            ${barActive ? "top-[2.95rem] left-[-70rem] duration-[0.5s]" : "top-[2.85rem] left-0 duration-[0.5s]"}
             lg:flex-row lg:static `}>
                <div className="flex z-[1000] flex-col gap-3 bg-white lg:flex-row lg:gap-0 ">
                    {useHeaderList.map((val, ind) => {
                        return (<NavLink key={ind + 1} style={({ isActive }) => ({
                            color: isActive ? '#c35dfe' : 'black'
                        })} to={val?.url} end>
                            <div className='text-[1.1rem] 
                font-[500] tracking-wide 
                w-[90vw] lg:w-fit text-center lg:border-0
                lg:hover:border-b-2 bg-white
                pb-4 pt-1 lg:p-[3px_7px] lg:m-[0px_6px]
                lg:p-[3px_9px] lg:m-[0px_11px]
                 border-grey hover:border-[#bd4aff] hover:text-[#c35dfe]
                 duration-200 cursor-pointer 
                 border-b-[1px]'>
                                {val?.list}
                            </div >
                        </NavLink>)
                    })}
                </div>
                <Link to="/login" className='text-center w-[90vw] bg-[#A22EFF] rounded-lg lg:w-fit p-3 mt-6 lg:m-0 lg:mr-4 lg:p-[6px_16px] lg:rounded-[4px] lg hover:bg-[#bd4aff] duration-300'>लाग इन करें</Link>
            </nav>
        </header>
    )
}

export default Header