import { useDispatch, useSelector } from "react-redux"
import AuthHeader from "./AuthHeader"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { LoginAccount } from "../../redux/slice/AuthSlice"
import { Link } from "react-router-dom"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
const Login = () => {
    
    const dispatch=useDispatch()
    const navigate=useNavigate()


    const [loginData,setLoginData]=useState({
        email:"",
        password:""
    })
    const [showPassword, setShowPassword] = useState(false);

    function handleUserInput(e){
        const {name,value}=e.target
        setLoginData({
         ...loginData,
         [name]:value
        })
     }


     async function Login(event){
        console.log("ayush");
         event.preventDefault()
         if(email=="" || password==""){
          toast.error("Please fill All the details")
          return 
         }
         
       
        const LoginData={
          "email":loginData.email,
          "password":loginData.password
        }
        const response=await dispatch(LoginAccount(LoginData))
        if(response?.payload?.success)
        navigate("/")
        
        setLoginData({
          email:"",
          password:""
        })
      }


    return (
        <div className="flex flex-col items-center justify-center mt-16">
            <AuthHeader />
            <form action="" 
                className="shadow-[0px_0px_5px_#808080] flex flex-col text-center text-black border w-[19.5rem] lg:w-[26rem]  xs:w-[22rem]"
                noValidate
                onSubmit={Login}
                >
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                    <label htmlFor="email" className='font-semibold'>Email</label>
                   <input type="email" required name='email' id='email' placeholder='Enter your email' className='w-full bg-transparent border rounded-md px focus:none' onChange={handleUserInput} value={loginData.email} />
                </div>
                <div className="flex relative flex-col items-start justify-center gap-[0.5px]">
                     <label htmlFor="password" className='font-semibold'>Password</label>
                     <input  type={showPassword ? "text" : "password"} required name='password' id='password' placeholder='Enter your Password' className='w-full bg-transparent border rounded-md px focus:none' onChange={handleUserInput} value={loginData.password}  />
                     <div className='absolute right-[0.1rem] bg-[#FFFFFF] top-[1.41rem] p-[6px] ' onClick={() =>setShowPassword(!showPassword)}>
                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                </div>
                <button type="submit"   className='text-center bg-[#A22EFF] rounded-md p-2 m-[1rem_0.5rem] xs:m-[1rem_1.5rem] hover:bg-[#bd4aff] duration-300 text-white'>Login</button>
                
                <Link to={"/forget"}  className="text-[#f10707] ">Forget Password?</Link>
              
            </form>
        </div>
    )
}

export default Login