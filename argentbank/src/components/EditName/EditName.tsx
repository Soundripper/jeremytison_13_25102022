import { useState } from "react";
import "../EditName/EditName.css"
import { editName } from "../../utils/authService";
import { succesfullLoginAction } from "../../redux/actions/auth.actions";
import { useDispatch } from "react-redux";

const EditName = () => {

    const [isOpened, setIsOpened] = useState(false);
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const dispatch = useDispatch()

    const toggle = () => {
        setIsOpened(isOpened => !isOpened);
        console.log("toggle");
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const userInfos = await editName(firstname, lastname);
        console.log(userInfos);
        dispatch(succesfullLoginAction({
            firstName: firstname,
            lastName: lastname,
            // loggedIn: true
        }));
        toggle()
    }

    return (
        <>
        {!isOpened && (
            <button className="edit-button" onClick={toggle}>Edit Name</button>
        )}
        {isOpened && (
            <div className="editNameForm">
                <form onSubmit = {(e) => handleSubmit(e)}>
                    <div className="nameEditInputs">
                        <div className="input-wrapper">
                            <input type="text" id="firstname" placeholder={firstname} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" id="lastname" placeholder={lastname} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="nameEditInputs">
                        <button type="submit" className="save-cancel-button" >Save</button>
                        <button className="save-cancel-button" onClick={toggle}>Cancel</button>
                    </div>
                </form>
            </div> 
        )}
        </>
    )
}

export default EditName