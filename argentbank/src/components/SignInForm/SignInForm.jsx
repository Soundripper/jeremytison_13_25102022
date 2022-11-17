import { useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { useNavigate } from "react-router-dom";
import {loginAuth, loginName} from "../../utils/authService"
import { succesfullLoginAction } from "../../redux/actions/auth.actions";
import { apiErrorAction } from "../../redux/actions/auth.actions";
import '../SignInForm/SignInForm.css'

const SignInForm = () => {
    const [email, setUserName] = useState('steve@rogers.com')
    const [password, setPassword] = useState('password456')
    const [errorApi, setErrorApi] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginAuth(email, password);
        // console.log(token);
        if (token){
            const userInfos = await loginName(token.body.token);
            dispatch(succesfullLoginAction({
            token: token.body.token,
            firstName: userInfos.body.firstName,
            lastName: userInfos.body.lastName,
            email: email
            }));
            navigate('/profile');
        }
        else {
            setErrorApi(true)
            // console.log(token);
            dispatch(apiErrorAction({
                apiError: token.data.status
            }));
        }
    }
    
    return (
        <form onSubmit = {(e) => handleSubmit(e)}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={email} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
            </div>
            { errorApi && (
                <div>
                <h1 className="error">Erreur de connexion</h1>
                </div>
                )
            }
            
            {/* PLACEHOLDER DUE TO STATIC SITE */}
            {/* <Link to="/profile"  className="sign-in-button">Sign In</Link> */}
            {/* SHOULD BE THE BUTTON BELOW
                <button className="sign-in-button">Sign In</button> */}
            <button type="submit" className="sign-in-button" >Submit</button>
        </form>
    )
}

export default SignInForm