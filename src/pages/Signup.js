import React from "react";
import Template from "../components/Template"
import signupImg from "../assets/signup.png";
function Signup({setIsLoggedIn}){
    return(
        <Template
        title="Join the million learnung to code with studyNotion for free"
        des1="Build skill today, tomorrow and beyound."
        des2="Education to future-proof your career"
        image={signupImg}
        formType="signup"
        setIsLoggedIn={setIsLoggedIn}/>
    );
}
export default Signup;