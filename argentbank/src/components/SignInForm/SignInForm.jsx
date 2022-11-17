import { useEffect, useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { useNavigate } from "react-router-dom";
import {loginAuth, loginName} from "../../utils/authService"
import { succesfullLoginAction } from "../../redux/actions/auth.actions";
import { apiErrorAction } from "../../redux/actions/auth.actions";

const SignInForm = () => {
    const [email, setUserName] = useState('steve@rogers.com')
    const [password, setPassword] = useState('password456')
    const [errorApi, setErrorApi] = useState(false)
    const [errorApiMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (errorApi === "ERR_BAD_REQUEST") {
            setErrorMessage('Utilisateur non reconnu') 
        }
        if (errorApi === 'ERR_NETWORK') {
            setErrorMessage('Erreur de connexion') 
        }
    },[errorApi])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginAuth(email, password);
        console.log('Token response :');
        console.log(token);
        if (token.status === 200){
            const userInfos = await loginName(token.body.token);
            dispatch(succesfullLoginAction({
            token: token.body.token,
            firstName: userInfos.body.firstName,
            lastName: userInfos.body.lastName,
            email: email
            }));
            navigate('/profile');
        }
        else if (token.code === "ERR_BAD_REQUEST"){
            setErrorApi(token.code)
            dispatch(apiErrorAction({
                apiError: token.code
            }));
        }
        else if (token.code === 'ERR_NETWORK'){
            dispatch(apiErrorAction({
                apiError: token.code
            }));
            setErrorApi(token.code)
            console.log('not 200 not 400');
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
                <h1 className="error">{errorApiMessage}</h1>
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