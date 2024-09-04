import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import toast from "react-hot-toast";
import {Navigate, useNavigate} from "react-router-dom";

const LoginForm=({setIsLoggedIn})=>
{
    
    const navigate=useNavigate();
    const[formData,setFormData]=useState({email:"",password:""});
    const[showPassword,setShowPassword]=useState(false);
    function changeHandler(event){

        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true)
        toast.success("Logged in successfully");

        navigate("/dashboard")
    }
 
    return(

        <form onSubmit={submitHandler}
        className="flex flex-col w-full mt-6 gap-y-4"
        >
        
        <label className="w-full">
            <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">Email Address<sup className="text-pink-200">*</sup></p>
            <input required type="email" name="email" value={formData.email} onChange={changeHandler}
            placeholder="Enter Email"
            className="w-full bg-richblack-800 rounded-[0.5rem] p-[12px] border-b-2 border-richblack-700"
            ></input>
        </label>

        <label className="w-full relative">
            <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">Password<sup className="text-pink-500">*</sup></p>
            
            <input required type={showPassword?("text"):("password")} name="password" value={formData.password} onChange={changeHandler}
            placeholder="Enter Password"
            className="w-full bg-richblack-800 rounded-[0.5rem] p-[12px] border-b-2 border-richblack-700"></input>

            <span onClick={()=>setShowPassword((prev)=>!prev)}
            className="absolute right-3 top-[38px]  cursor-pointer"
            >
                {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>

            <Link to="#"><p className="max-w-max ml-auto  text-sm text-blue-300">Forgot Password</p></Link>
        </label>

        <button className="bg-yellow-400  gap-x-2 mt-6 py-[8px]  rounded-[8px] text-black font-medium w-full p-[12px]" >Sign In</button>
        

    </form>

    );
}
export default LoginForm;