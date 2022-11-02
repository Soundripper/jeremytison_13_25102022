// import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { login } from "../../utils/redux"
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        dispatch(login({
            username: username,
            password: password,
            // loggedIn: true
        }));
        navigate('/profile');
    }

    useEffect (() => {
        console.log("username = " + username);
        console.log("password = " + password);
    }, [password, username])

    return (
        <form onSubmit = {(e) => handleSubmit(e)}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label
                ><input type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)}/>
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