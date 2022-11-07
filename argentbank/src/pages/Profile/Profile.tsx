import { useEffect, useState } from "react";
import Account from "../../components/Account/Account"
import { store } from "../../utils/reduxService";

const List = [
    {
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        description: "Available Balance"
    },
    {
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        description: "Available Balance"
    },
    {
        title: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        description: "Current Balance"
    },
]


const Profile = () => {
    const [userFirstName, userFirstNameSetState] = useState("");
    const [userLastName, userSecondNameSetState] = useState("");

    useEffect(() => {
        const userInfo = store.getState();
        userFirstNameSetState(userInfo.login.firstName);
        userSecondNameSetState(userInfo.login.lastName);
    }, [])

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userFirstName} {userLastName}</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {List.map((value, index) => (
                <Account title={value.title} amount={value.amount} description={value.description} key={index}/>
            ))}
        </main>
    )
}

export default Profile
