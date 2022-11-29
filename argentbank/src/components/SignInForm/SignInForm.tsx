import { useEffect, useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { useNavigate } from "react-router-dom";
import { loginAuth, loginName } from "../../utils/authService"
import { succesfullLoginAction } from "../../redux/actions/auth.actions";
import { apiErrorAction } from "../../redux/actions/auth.actions";

const SignInForm = () => {
    const [email, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorApi, setErrorApi] = useState('false')
    const [errorApiMessage, setErrorMessage] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const rememberMeButtonToggle = (e:any) => {
        setRememberMe(e.target.checked);
    }

    useEffect(() => {
        if (errorApi === "ERR_BAD_REQUEST") {
            setErrorMessage('Utilisateur non reconnu') 
        }
        if (errorApi === 'ERR_NETWORK') {
            setErrorMessage('Erreur de connexion') 
        }
    },[errorApi])

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const apiResponse = await loginAuth(email, password);
        if (apiResponse.status === 200){
            const userInfos = await loginName(apiResponse.body.token);
            dispatch(succesfullLoginAction({
                token: apiResponse.body.token,
                firstName: userInfos.body.firstName,
                lastName: userInfos.body.lastName,
                email: email,
                rememberMe
            }));         
            navigate('/profile');
        }
        else if (apiResponse.code === "ERR_BAD_REQUEST"){
            setErrorApi(apiResponse.code)
            dispatch(apiErrorAction({
                apiError: apiResponse.code
            }));
        }
        else if (apiResponse.code === 'ERR_NETWORK'){
            dispatch(apiErrorAction({
                apiError: apiResponse.code
            }));
            setErrorApi(apiResponse.code)
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
                <input type="checkbox" id="remember-me" defaultChecked={false} onChange={(e) => rememberMeButtonToggle(e)}/><label htmlFor="remember-me">Remember me</label>
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