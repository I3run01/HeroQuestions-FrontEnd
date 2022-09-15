import { Routes, Route, useRoutes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Home } from "../pages/home"
import { SignUP } from "../pages/signup"
import { Page01 } from "../pages/page01"
import { Page02 } from "../pages/page02"
import { RequireAuth } from "../Auth/RequireAuth"
import { NotFounded } from "../pages/NotFounded"
import { ReviewPage } from "../pages/reviewPage"
 
export const MainRoutes = () => {

    return useRoutes([
        
        {path: '/login', element: <Login/>},
        {path: '/', element: <Home/>},
        {path: '/signup', element: <SignUP/>},
        {path: '/page01', element: <RequireAuth><Page01/></RequireAuth>},
        {path: '/page02', element: <RequireAuth><Page02/></RequireAuth>},
        {path: '/reviewPage', element: <RequireAuth><ReviewPage/></RequireAuth>},
        {path: '*' , element: <NotFounded/>}
    ])
}