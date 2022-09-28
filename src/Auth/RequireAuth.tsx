import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../contexts/Context'
import {Login} from '../pages/Login'

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({children}: Props) =>  {
    const {state, dispatch} = useContext(Context)

    if(!state.loginStatus.loginStatus) {
        return <Login/>
    }else return children
}