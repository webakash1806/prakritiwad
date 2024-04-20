import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RxHamburgerMenu, RxCross1, RxButton } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from 'react-redux';
import logo from '../assets/Image/logoPrak.png'
// import { logout } from '../../../server/controllers/user.controller';
const Header = () => {

    const [barActive, setBarActive] = useState(true)

    const hamActive = () => {
        barActive ? setBarActive(false) : setBarActive(true)
    }

    const isLoggedIn=useSelector((state)=>state?.auth?.isLoggedIn)

    const useHeaderList = [{ "url": "/", "list": "होम" },

    { url: "/add/post", "list": "खबरें भेजें" },
    { url: "/contact", "list": "संपर्क करें" },
    { url: "/coming", "list": "कविताएँ" },
    { url: "/coming", "list": "कहानियां" },
    { url: "/घटनाएं", "list": "घटनाएं" },
    { url: "/पत्रिका", "list": "त्रैमासिक पत्रिका" },
    ]

    // async function handleLogout(e) {
    //     e.preventDefault();

    //     const res = await dispatch(logout());
    //     if(res?.payload?.success)
    //     navigate("/");
    // } 

    return (
        <header className='flex w-full  bg-white   lg:px-8 lg:p-3 px-6 sm:px-10 text-black items-center justify-between z-[1000] py-[6px] shadow-[-1px_1px_7px_#000] fixed top-0 left-0'>
            <div className=' w-[2rem] h-[2rem] flex items-center justify-center lg:hidden cursor-pointer text-[#bd4aff]' onClick={hamActive}>
                {barActive ? <RxHamburgerMenu className='text-[1.3rem]' />
                    : <RxCross1 className='text-[1.3rem]' />}
            </div>
            <Link to="/" className='flex items-center justify-center gap-2 lg:mr-10'>
                <img src={logo} alt="" className='size-[2.5rem]' />
                <p className='text-[1.2rem] font-semibold text-[#3cac1a]'>प्रकृतिवाद</p></Link>
            <nav className={` text-white z-[1000] bg-white lg:border-0 shadow-[0px_160px_1000px_#12073ac5] lg:shadow-none flex border-t-[#201154] border-t-2  p-4 pb-10 lg:p-0 h-[100vh] lg:h-fit w-screen lg:max-w-[80vw]  items-center lg:justify-between gap-3 lg:gap-0 flex-col absolute 
            ${barActive ? "top-[3.3rem]  left-[-70rem] duration-[0.5s]" : "top-[3.3rem]  left-0 duration-[0.5s]"}
             lg:flex-row lg:static `}>
                <div className="flex z-[1000] flex-col gap-3 bg-white lg:flex-row lg:gap-0 ">
                    {useHeaderList.map((val, ind) => {
                        return (<NavLink onClick={() => setBarActive(true)} key={ind + 1} style={({ isActive }) => ({
                            color: isActive ? '#c35dfe' : 'black'
                        })} to={val?.url} end>
                            <div className='text-[1rem] 
                 tracking-wider 
                w-[90vw] lg:w-fit text-center lg:border-0
                lg:hover:border-b-2 bg-white font-[550]
                pb-2 lg:p-[3px] lg:m-[0px_6px]
                
                 border-grey hover:border-[#bd4aff] hover:text-[#c35dfe]
                 duration-200 cursor-pointer 
                 border-b-[1px]'>
                                {val?.list}
                            </div >
                        </NavLink>)
                    })}
                    <NavLink >
                        <div className="text-black dropdown dropdown-hover ">
                            <div className='text-[1rem] 
                 tracking-wide 
                w-[90vw] lg:w-fit text-center lg:border-0
                lg:hover:border-b-2 bg-white font-semibold
                pb-4 pt-1 lg:p-[3px] lg:m-[0px_6px]
                
                 border-grey hover:border-[#bd4aff] hover:text-[#c35dfe]
                 duration-200 cursor-pointer 
                 border-b-[1px] flex items-center justify-center gap-1' tabIndex={0} role="button">प्रकृतिवाद<IoIosArrowDown /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 w-full lg:w-[16rem] overflow-x-hidden border-none lg:h-fit lg:overflow-hidden h-[11rem] overflow-scroll">
                                <li className='flex flex-col gap-1 bg-white' onClick={hamActive}>
                                    <Link to={'/about'} >क्या है ?</Link>
                                    <Link to={'/coming'} >भोजन</Link>
                                    <Link to={'/coming'} >वस्त्र</Link>
                                    <Link to={'/coming'}>शिक्षा</Link>
                                    <Link to={'/coming'} >चिकित्सा</Link>
                                    <Link to={'/coming'} >आवास</Link>
                                    <Link to={'/coming'} >संस्कार</Link>
                                    <Link to={'/coming'}>मोक्ष</Link>
                                </li>
                            </ul>
                        </div>
                    </NavLink>
                </div>
                {isLoggedIn && <Link  to="/postAdd"   className='text-center w-[20vw] bg-[#A22EFF] rounded-lg lg:w-fit p-3 mt-6 lg:m-0 lg:mr-4 lg:p-[6px_10px] lg:rounded-[4px] lg hover:bg-[#bd4aff] duration-300'>Add Post</Link>}
                {isLoggedIn && <Link  to="/viewPost"   className='text-center w-[20vw] bg-[#A22EFF] rounded-lg lg:w-fit p-1 mt-2 lg:m-0 lg:mr-4 lg:p-[6px_10px] lg:rounded-[4px] lg hover:bg-[#bd4aff] duration-300'>Admin</Link>}
                <Link to="/login" className='text-center w-[90vw] bg-[#A22EFF] rounded-lg lg:w-fit p-3 mt-6 lg:m-0 lg:mr-4 lg:p-[6px_10px] lg:rounded-[4px] lg hover:bg-[#bd4aff] duration-300'>लाग इन करें</Link>
            </nav>
        </header>
    )
}

export default Header