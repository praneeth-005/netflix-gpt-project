import { LOGO_URL } from "../utils/Constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router";
const Header = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }
  return (
    <div className="absolute top-0 w-full px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <div>
        <img src={LOGO_URL} className="w-32" alt="Netflix Logo" />
      </div>

      <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 font-semibold shadow" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};
export default Header