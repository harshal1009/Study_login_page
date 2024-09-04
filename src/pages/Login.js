import React from "react";
import Template from "../components/Template"
import loginImg from "../assets/login.png";

const Login=({setIsLoggedIn})=>{
    return(
        <Template
        title="Welcome Back"
        des1="Build skill today, tomorrow and beyound."
        des2="Education to future-proof your career"
        image={loginImg}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
         />
    );
}
export default Login;