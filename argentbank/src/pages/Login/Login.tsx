import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import SignInForm from "../../components/SignInForm/SignInForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../../redux/selectors/auth.selector";

const Login = () => {
    const userInfo = useSelector(selectLogin);
    const navigate = useNavigate();
    // console.log(userInfo);

    useEffect(() => {
        console.log(userInfo);
        
        if(userInfo && userInfo.token){
        //    return redirect("/login");
        return navigate("/profile");
        }
    },[userInfo])

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} className="uesrCircle"/>
                <h1>Sign In</h1>
                <SignInForm />
            </section>
        </main>
    )
}

export default Login