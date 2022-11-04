// import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { login } from "../../utils/redux"
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../utils/redux";
import {loginAuth} from "../../utils/authService"

const SignInForm = () => {
    const [email, setUserName] = useState('tony@stark.com')
    const [password, setPassword] = useState('password123')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(login({
        //     username: email,
        //     password: password,
        //     // loggedIn: true
        // }));
        // dispatch(userLogin({'email': 'tony@stark.com', 'password': 'password123' }));
        loginAuth(email, password)
        navigate('/profile');
    }

    // useEffect (() => {
    //     console.log("email = " + email);
    //     console.log("password = " + password);
    // }, [password, email])

    return (
        <form onSubmit = {(e) => handleSubmit(e)}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label
                ><input type="text" id="username" value={email} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label
                ><input type="password" id="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                >Remember me</label
                >
            </div>
            {/* PLACEHOLDER DUE TO STATIC SITE */}
            {/* <Link to="/profile"  className="sign-in-button">Sign In</Link> */}
            {/* SHOULD BE THE BUTTON BELOW
                <button className="sign-in-button">Sign In</button> */}
            <button type="submit" className="sign-in-button" >Submit</button>
        </form>
    )
}

export default SignInForm