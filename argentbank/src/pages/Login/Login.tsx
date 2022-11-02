import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import SignInForm from "../../components/SignInForm/SignInForm";

const Login = () => {
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