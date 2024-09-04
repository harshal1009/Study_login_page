import React from "react";
import frameImage from "../assets/frame.png"
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import { FcGoogle } from "react-icons/fc";

 const Template=({title,des1,des2,image,formType,setIsLoggedIn})=>{
    return (
        <div className="flex justify-between  w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12gap-y-0 "> 
             <div className=" w-11/12 max-w-[450px]  text-white ">
             <h1
             className="text-richblack-5  text-4xl font-semibold text-[1.875rem] leading-[2.375rem]"
             >{title}</h1>

             <p className=" mt-5 text-[1.125rem] leading-[1.625rem]  tracking-wider">
                <span className="text-richblack-100 ">{des1}</span><br></br>
                <span className="text-blue-100 italic">{des2}.</span>
             </p>
             {
                formType=="signup"?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)
             }

             <div className="flex flex-row items-center my-4 gap-x-2 w-full">
               <div className=" w-full h-[1px] bg-richblack-700 "></div>
               <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
               <div className="h-[1px] w-full bg-richblack-700"></div>
             </div>

             <button className="flex px-[12px] gap-x-2 mt-6 py-[8px] bg-richblack-900 text-richblack-100  justify-center  border rounded-[8px] border-richblack-700 w-full">
               <span className=" flex   justify-center items-center font-semibold text-center"> <FcGoogle className="mr-2"/>
                Sign up With Google</span></button>
             </div>

             <div className=" relative max-w-[450px] w-11/12 ">
               <img
               className="absolute top-3 left-3"
                src={frameImage}
               alt="pattern"
               width={558}
               height={504}
               loading="lazy"></img>

               <img 
               className="absolute"
               src={image}
               alt="student"
               width={558}
               height={490}
               loading="lazy"></img>
             </div>
        </div>
    );
 }
 export default Template;