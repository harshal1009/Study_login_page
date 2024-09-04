import React from "react";
import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate
 } from "react-router-dom";
const SignupForm=({setIsLoggedIn})=>{
   
    const navigate=useNavigate()
    const[formData,setFormdata]=useState({firstname:"" ,lastname:"",email:"",password:"",confirmpassword:""})
    const[showPassword1,setShowPassword1]=useState(false);
    const[showPassword2,setShowPassword2]=useState(false);
    const[btnColor,setBtnColor]=useState({student:true,instructor:false});
    function changeHandler(event){

        setFormdata((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.confirmpassword==formData.password){
            setIsLoggedIn(true)
            toast.success("Signed in successfully")
            navigate("/dashboard")
            const accountData={
                ...btnColor,formData
            }
            console.log("printing all data")
            console.log(accountData)
        }
        else{
            toast.error("Password doesnt match")
        }
    }
    function colorHandler(event){
        setBtnColor((prevObject) => ({
            ...prevObject,
            student: false, // Set all boolean values to false explicitly
            instructor: false,
            
          }));

          setBtnColor((event)=({[event.target.name]:!event.target.value}))

    }
    return(
        <div>
             {/* student instructor tab */}
             <div className=" p-1 bg-richblack-800  gap-x-1 my-6  rounded-full max-w-max border-b-2 border-richblack-700 flex    ">
                <button className={`my-button ${btnColor.student ==true?"bg-richblack-900 text-richblack-5 py-2 px-5  rounded-full transition-colors duration-200": " bg-transparent text-richblack-5 py-2 px-5  rounded-full transition-colors duration-200"}`} name="student" onClick={colorHandler}>Student</button>
                <button className={`my-button ${btnColor.instructor ==true? 'bg-richblack-900 text-richblack-5 py-2 px-5  rounded-full transition-colors duration-200': ' bg-transparent text-richblack-5 py-2 px-5 rounded-full transition-colors duration-200' }`} name="instructor" onClick={colorHandler}>Instructor</button>
             </div>
             <form onSubmit={submitHandler}>

                <div className="flex gap-4">
                    <label>
                        <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">First Name<sup className="text-pink-500">*</sup></p>
                        <input required type="text" name="firstname"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstname}
                        className="w-full bg-richblack-800 rounded-[0.5rem] p-[12px] border-b-2 border-richblack-700"
                        ></input>
                    </label>
                    
                    <label>
                        <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]" >Last Name<sup className="text-pink-500">*</sup></p>
                        <input required 
                        type="text" 
                        name="lastname"
                        onChange={changeHandler}
                        placeholder="Enter Last Name"
                        value={formData.lastname}
                        className="w-full bg-richblack-800 rounded-[0.5rem] p-[12px] border-b-2 border-richblack-700"
                        ></input>
                    </label>
                </div>
                <div>
                    <label>
                        <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]"> Email Address<sup className="text-pink-500">*</sup></p>
                        <input
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    onChange={changeHandler}
                    className="w-full bg-richblack-800 rounded-[0.5rem] p-[12px] border-b-2 border-richblack-700"
                    ></input>

                    </label>
                </div >
                {/* create confirm pass */}
                <div className="flex relative gap-4">
                <label>
                    <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">Create Password<sup className="text-pink-500">*</sup></p>

                <input
                    name="password" 
                    type={showPassword1?("text"):("password")}
                    placeholder="Enter password"
                    onChange={changeHandler}
                    className="w-full  bg-richblack-800 rounded-[0.5rem] p-[12px] border-b-2 border-richblack-700"
                    ></input>
                     <span onClick={()=>setShowPassword1((prev)=>!prev)}
                     className="absolute bottom-3 left-[170px] cursor-pointer">
                {showPassword1?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />):(<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
            </span>

                </label>
                <label>
                    <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">Confirm Password<sup className="text-pink-500">*</sup></p>

                <input
                    name="confirmpassword"
                    type={showPassword2?("text"):("password")}
                    placeholder="confirm password"
                    onChange={changeHandler}
                    className="w-full bg-richblack-800 rounded-[0.5rem] p-[12px] border-b-2 border-richblack-700"
                    ></input>
                     <span onClick={()=>setShowPassword2((prev)=>!prev)}
                     className="absolute bottom-3 right-[35px] cursor-pointer"
                     >
                {showPassword2?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>
                </label>
                </div>
                <button className="bg-yellow-400  gap-x-2 mt-6 py-[8px]  rounded-[8px] text-black font-medium w-full p-[12px]">Create Account</button>
             </form>
        </div>
    );
}
export default SignupForm;