import { Navigate } from 'react-router-dom'
import * as request from './Request'

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({children}: Props) =>  {
    const isAuth = {email: 'as@', token: 'qraffsa'}

    if(!isAuth) {
        return <Navigate to="/login" />
    } return children
}