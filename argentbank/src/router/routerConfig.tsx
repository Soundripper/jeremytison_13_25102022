import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile"
import Login from "../pages/Login/Login"

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
]