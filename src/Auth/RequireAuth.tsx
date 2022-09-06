import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../contexts/Context'
import * as request from './Request'

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({children}: Props) =>  {
    const {state, dispatch} = useContext(Context)

    if(!state.status.status) {
        return <Navigate to="/login" />
    } return children
}