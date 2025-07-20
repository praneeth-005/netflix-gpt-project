import { LOGO_URL } from "../utils/Constants"
const Header = () => {
    return(
        <div className="w-3xs absolute bg-gradient-to-b from-black z-10">
            <img src={LOGO_URL}/>
        </div>
    )
}
export default Header