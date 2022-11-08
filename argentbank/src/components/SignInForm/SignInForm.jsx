// import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { loginReducer } from "../../utils/reduxService"
import { useNavigate } from "react-router-dom";
import {loginAuth} from "../../utils/authService"
import {loginName} from "../../utils/authService"

const SignInForm = () => {
    const [email, setUserName] = useState('steve@rogers.com')
    const [password, setPassword] = useState('password456')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginAuth(email, password);
        const userInfos = await loginName(token.body.token);
        // console.log(token.body.token);
        console.log(userInfos);
        dispatch(loginReducer({
            token: token.body.token,
            firstName: userInfos.body.firstName,
            lastName: userInfos.body.lastName,
            email: email
            // loggedIn: true
        }));
        navigate('/profile');
    }

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