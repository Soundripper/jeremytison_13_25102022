import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import SignInForm from "../../components/SignInForm/SignInForm";

const SignIn = () => {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                {/* <i className="fa fa-user-circle sign-in-icon"></i> */}
                <FontAwesomeIcon icon={faUserCircle} className="uesrCircle"/>
                <h1>Sign In</h1>
                <SignInForm />
            </section>
        </main>
    )
}

export default SignIn