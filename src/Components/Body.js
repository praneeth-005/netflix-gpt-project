import { createBrowserRouter, RouterProvider } from "react-router"
import Browse from "./Browse"
import Login from "./Login"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login /> 
        },
        {
            path: "/browse",
            element: <Browse /> 
        }
    ]);

    useEffect(() => {
         onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            } else {
                dispatch(removeUser())    
        }
    });
}, [])
       


    return(

        <div>
            
            <RouterProvider router={appRouter} />
        </div>
       
    )
}
export default Body