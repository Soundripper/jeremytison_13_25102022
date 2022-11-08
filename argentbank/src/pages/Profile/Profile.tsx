import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Account from "../../components/Account/Account"
// import { store } from "../../utils/reduxService";
import { selectLogin } from "../../redux/selectors/auth.selector";

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
    // const userInfo = store.getState(); uTILE DANS LE CAS D4UN COMPOSANT JS 5PAS REACT°
    const userInfo = useSelector(selectLogin);
    console.log(userInfo);
    

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userInfo.firstName} {userInfo.lastName}</h1>
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
