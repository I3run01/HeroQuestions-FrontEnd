import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../contexts/Context'
import * as request from './Request'

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({children}: Props) =>  {
    const isAuth = useContext(Context)

    if(!isAuth.state.status) {
        return <Navigate to="/login" />
    } return children
}