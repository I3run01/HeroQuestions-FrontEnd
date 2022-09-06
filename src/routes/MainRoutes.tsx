import { Routes, Route, useRoutes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Home } from "../pages/home"
import { SignUP } from "../pages/signup"
import { Main } from "../pages/main"
import { RequireAuth } from "../Auth/RequireAuth"

export const MainRoutes = () => {

    return useRoutes([
        
        {path: '/login', element: <Login/>},
        {path: '/', element: <Home/>},
        {path: '/signup', element: <SignUP/>},
        {path: '/main', element: <RequireAuth><Main/></RequireAuth>}
    ])
}