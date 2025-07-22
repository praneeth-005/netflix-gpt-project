import { useRef, useState } from "react";
import { BG_URL } from "../utils/Constants"
import Header from "./Header"
import { validateUserCredintials } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true);
    const[errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toogleClick = () => {
        setIsSignInForm(!isSignInForm);
    };
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleButtonClick = () => {
        console.log(email.current.value);
        console.log(password.current.value);
        const errorMessage = validateUserCredintials(email.current.value, password.current.value);
        setErrorMessage(errorMessage);
        if(errorMessage) return; //if errorMessage has a string value i.e password is not valid or email is not valid then it return it do not go further

        if(!isSignInForm){
            //Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed up 
                        updateProfile(auth.currentUser, {
                                                            displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/v2/D4E03AQHruhYnJNR7UQ/profile-displayphoto-scale_100_100/B4EZfVLIhPGwAc-/0/1751628157629?e=1756339200&v=beta&t=BfkeYTFowKT42V-FPWirRxAzSFg11VLH3IXWql6TwO4"
                                                        }).then(() => {
                                                            const {uid, email, displayName, photoURL} = auth.currentUser;
                                                            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                                                            navigate("/browse")
                                                        }).catch((error) => {
                                                            setErrorMessage(error.message);
                        });
                        const user = userCredential.user;
                        console.log(user);
                        navigate(
                            "/browse"
                        )
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode + " " + errorMessage);
                    });
        }else{
            //Sign In logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user);
                        navigate(
                            "/browse"
                        )
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode + " " + errorMessage);
                    });
        }
    };
    return(
        <div>
            <Header />
            <div className="absolute">
                <img src={BG_URL}/>
            </div>
            <form className="bg-black p-12 absolute my-42 w-3/12 mx-auto right-0 left-0 rounded-lg opacity-90" onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-white text-3xl font-bold py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" ref={name} placeholder="Enter your Full Name:" className="p-4 my-4 bg-gray-700 w-full text-lg text-gray-100"/>}
            <input type="text" ref={email} placeholder="Enter your Email Id:" className="p-4 my-4 bg-gray-700 w-full text-lg text-gray-100"/>
            <input type="password" ref={password} placeholder="Enter your Password:" className="p-4 my-4 bg-gray-700 w-full text-lg text-gray-100"/>
            <p className="text-red-500 text-lg">{errorMessage}</p>            
            <button onClick={handleButtonClick} className="p-4 my-6 w-full bg-red-700 text-white rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p className="text-white text-lg cursor-pointer" onClick={toogleClick}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In"}</p>
            </form>
        </div>
        
    )
}
export default Login