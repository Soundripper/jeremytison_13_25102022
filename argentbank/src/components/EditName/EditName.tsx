import { useEffect, useState } from "react";
import "../EditName/EditName.css"
import { editName } from "../../utils/authService";
import { updateFullnameAction } from "../../redux/actions/auth.actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectLogin } from "../../redux/selectors/auth.selector";

const EditName = () => {

    const [isOpened, setIsOpened] = useState(false);
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const dispatch = useDispatch()

    const userTodayInfo = useSelector(selectLogin);

    useEffect(() => {
        if (userTodayInfo) {
            setFirstName(userTodayInfo.firstName)
            setLastName(userTodayInfo.lastName)
        }
    },[userTodayInfo])

    const toggle = () => {
        setIsOpened(isOpened => !isOpened);
    }

    const handleEditSubmit = async (e:any) => {
        e.preventDefault();
        await editName(firstname, lastname);
        dispatch(updateFullnameAction({
            firstName: firstname,
            lastName: lastname,
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
                <form onSubmit = {(e) => handleEditSubmit(e)}>
                    <div className="nameEditInputs">
                        <div className="input-wrapper">
                            <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" id="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
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