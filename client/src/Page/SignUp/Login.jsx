import { useDispatch, useSelector } from "react-redux"
import AuthHeader from "./AuthHeader"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { LoginAccount } from "../../redux/slice/AuthSlice"

const Login = () => {
    
    const dispatch=useDispatch()
    const navigate=useNavigate()


    const [loginData,setLoginData]=useState({
        email:"",
        password:""
    })

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
                className="shadow-[0px_0px_5px_#808080] flex flex-col text-center text-black border w-[19.5rem] xs:w-[22rem]"
                noValidate
                onSubmit={Login}
                >
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                    <label htmlFor="email" className='font-semibold'>Email</label>
                   <input type="email" required name='email' id='email' placeholder='Enter your email' className='bg-transparent border rounded-md px focus:none' onChange={handleUserInput} value={loginData.email} />
                </div>
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem] font-[500]">
                <label htmlFor="password" className='font-semibold'>Password</label>
                <input type="password" required name='password' id='password' placeholder='Enter your Password' className='bg-transparent border rounded-md px focus:none' onChange={handleUserInput} value={loginData.password}  />
                </div>
                <button type="submit"   className='text-center bg-[#A22EFF] rounded-md p-2 m-[1rem_0.5rem] xs:m-[1rem_1.5rem] hover:bg-[#bd4aff] duration-300 text-white'>Login</button>
            </form>
        </div>
    )
}

export default Login