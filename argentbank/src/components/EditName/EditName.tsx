import { useState } from "react";
import "../EditName/EditName.css"

const EditName = () => {

    const [isOpened, setIsOpened] = useState(false);
    const [firstname, setFirstName] = useState('Steve')
    const [secondname, setSecondName] = useState('Rogers')

    const toggle = () => {
        setIsOpened(isOpened => !isOpened);
        console.log("toggle");
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
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
                            <input type="text" id="secondname" placeholder={secondname} onChange={(e) => setSecondName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="nameEditInputs">
                        <button className="save-cancel-button" >Save</button>
                        <button className="save-cancel-button" onClick={toggle}>Cancel</button>
                    </div>
                </form>
            </div> 
        )}
        </>
    )
}

export default EditName