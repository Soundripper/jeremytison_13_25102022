import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile"
import Login from "../pages/Login/Login"
import { Navigate } from 'react-router-dom';

interface RouteI {
    path: string,
    component: any
}

export const routesArray:RouteI[] = [
    {
        path: "/",
        component: <Home />
    },
    {
        path: "/login",
        component: <Login />
    }, 
    {
        path: "/profile",
        component: <Profile />
    },  
    {
        path: "*",
        component: <Navigate replace to="/"/>
    },   
]