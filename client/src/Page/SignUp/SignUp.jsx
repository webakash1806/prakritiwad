import { useDispatch } from "react-redux"
import AuthHeader from "./AuthHeader"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { createAccount } from "../../redux/slice/AuthSlice"

const SignUp = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const [signupData,setSignData]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:"",
        phoneNumber:""
    })

    console.log(signupData);

    function handleUserInput(e){
        const {name,value}=e.target
        setSignData({
            ...signupData,
          [name]:value
        })
    }

    async function createNewAccount(event){
        event.preventDefault()
        if(!signupData.email || !signupData.fullName || !signupData.password){
         toast.error("Please fill all the details")
         return 
        }
 
      if(!signupData.email.match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       )){
         toast.error("Invalid Email Id ")
         return 
       }
    
       
     const formData=new FormData()

     formData.append("fullName",signupData.fullName)
     formData.append("email",signupData.email)
     formData.append("password",signupData.password)
     formData.append("confirmPassword",signupData.confirmPassword)
     formData.append("phoneNumber",signupData.phoneNumber)
 
     
     // dispatch create account action
 
     const response=await dispatch(createAccount(formData))
     if(response?.payload?.success)
     navigate("/")
 
     setSignData({
         fullName:"",
         email:"",
         password:"",
         confirmPassword:"",
         phoneNumber:""
     })
     }



    return (
        <div className="flex flex-col items-center justify-center mt-10 ">
            <AuthHeader />
            <form noValidate    onSubmit={createNewAccount}  
                className=" flex shadow-[0px_0px_5px_#808080] rounded-b-md  w-[19.5rem] lg:w-[26rem]  xs:w-[22rem] flex-col text-center text-black  ]">
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                    <label htmlFor="">Full Name</label>
                    <input type="fullName" required name='fullName' id='fullName' placeholder='Enter your Full Name' className='"border w-full rounded-[3px] bg-white outline-none p-1 text-[16px]' onChange={handleUserInput} value={signupData.fullName}/>
                </div>
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                    <label htmlFor="">Email</label>
                    <input type="email" required name='email' id='email' placeholder='Enter your email' className='"border w-full rounded-[3px] bg-white outline-none p-1 text-[16px]' onChange={handleUserInput} value={signupData.email}/>
                </div>
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                    <label htmlFor="">Password</label>

                    <input type="password" required name='password' id='password' placeholder='Enter your password' className='"border w-full rounded-[3px] bg-white outline-none p-1 text-[16px]' onChange={handleUserInput} value={signupData.password}/>
                </div>
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                    <label htmlFor="">Confirm Password</label>
                    <input type="confirmPassword" required name='confirmPassword' id='confirmPassword' placeholder='Enter your Confirm Password' className='"border w-full rounded-[3px] bg-white outline-none p-1 text-[16px]' onChange={handleUserInput} value={signupData.confirmPassword}/>
                </div>
                <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                    <label htmlFor="">Phone Number</label>
                    <input type="phoneNumber" required name='phoneNumber' id='phoneNumber' placeholder='Enter your password' className='"border w-full rounded-[3px] bg-white outline-none p-1 text-[16px]' onChange={handleUserInput} value={signupData.phoneNumber}/>
                </div>
                <button className='text-center bg-[#A22EFF] rounded-md p-2 m-[1rem_0.5rem] xs:m-[1rem_1.5rem] hover:bg-[#bd4aff] duration-300 text-white'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp