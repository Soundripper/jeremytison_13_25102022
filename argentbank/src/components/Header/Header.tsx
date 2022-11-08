import Logo from "../../img/argentBankLogo.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { store } from "../../utils/reduxService";
import { useDispatch } from "react-redux";
import { logout } from "../../utils/reduxService";

const Header = () => {

    const location = useLocation();

    const dispatch = useDispatch();
    const SignOutClick = () => {
        dispatch(logout({
            // loggedIn: true
        }));
    }
    
    let navContent = () => {
        const userInfo = store.getState();
        console.log(userInfo.login.firstName);
        
        if(location.pathname === "/profile"){
            return (
                <nav className="main-nav">
                    <Link to="/" className="main-nav-logo">
                        <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                        />
                    </Link>
                    <div>
                        <Link to="/profile" className="main-nav-item">
                            <FontAwesomeIcon icon={faUserCircle} className="userCircle"/>
                            {userInfo.login.firstName}
                        </Link>
                        <Link to="/" className="main-nav-item" onClick={SignOutClick}>
                            <FontAwesomeIcon icon={faSignOut} className="userCircle"/>
                            Sign Out
                        </Link>
                    </div>
                </nav>
            )
        }
        else {
            return (
                <nav className="main-nav">
                    <Link to="/" className="main-nav-logo">
                        <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                        />
                    </Link>
                    <div>
                        <Link to="/login" className="main-nav-item">
                            <FontAwesomeIcon icon={faUserCircle} className="userCircle"/>
                            Sign In
                        </Link>
                    </div>
                </nav>
            )
        }
    }

    return (
        <div>
            {navContent()}
        </div>
    )
}

export default Header