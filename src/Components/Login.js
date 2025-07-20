import { useState } from "react";
import { BG_URL } from "../utils/Constants"
import Header from "./Header"
const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true);
    const toogleClick = () => {
        setIsSignInForm(!isSignInForm);
    };
    return(
        <div>
            <Header />
            <div className="absolute">
                <img src={BG_URL}/>
            </div>
            <form className="bg-black p-12 absolute my-42 w-3/12 mx-auto right-0 left-0 rounded-lg opacity-90">
            <h1 className="text-white text-3xl font-bold py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Enter your Full Name:" className="p-4 my-4 bg-gray-700 w-full text-lg text-gray-100"/>}
            <input type="text" placeholder="Enter your Email Id:" className="p-4 my-4 bg-gray-700 w-full text-lg text-gray-100"/>
            <input type="password" placeholder="Enter your Password:" className="p-4 my-4 bg-gray-700 w-full text-lg text-gray-100"/>            
            <button className="p-4 my-6 w-full bg-red-700 text-white rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p className="text-white text-lg cursor-pointer" onClick={toogleClick}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In"}</p>
            </form>
        </div>
        
    )
}
export default Login