import React from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
import toast from 'react-hot-toast'


function Navbar(props){

    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/"> <img src={logo}></img></Link> 
            <nav className="">
               
               <ul className="flex gap-7 text-richblack-100 text-[16px]">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>About</li></Link>
                    <Link to="/"><li>Contact</li></Link>
               </ul>
            </nav>
            {/* login logout signup dashboard */}
            <div className=" flex   items-center gap-x-4">
                {!isLoggedIn &&
                    <Link setIsLoggedIn={setIsLoggedIn} to="/login"><button className="  border-[1px] border-richblack-700 rounded-[8px] text-richblack-100 bg-richblack-800 py-[8px] px-[12px]">Log in</button></Link>
                }
                {
                    !isLoggedIn &&
                    <Link to="/signup"><button className="  border-[1px] border-richblack-700 rounded-[8px] text-richblack-100 bg-richblack-800 py-[8px] px-[12px]">Sign up</button></Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/"><button className=" border-[1px] border-richblack-700 rounded-[8px] text-richblack-100 bg-richblack-800 py-[8px] px-[12px]" onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out Successfully")
                    }}>Log Out</button></Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard"><button className=" border-[1px] border-richblack-700 rounded-[8px] text-richblack-100 bg-richblack-800 py-[8px] px-[12px]">Dashboard</button></Link>
                }
            </div>
        </div>
    );
}
export default Navbar;