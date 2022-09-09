import { useContext } from 'react'
import { Context } from '../contexts/Context'
import {Login} from '../pages/Login'


type Props = {
    children: JSX.Element
}

export const RequireAuth = ({children}: Props) =>  {
    const {state, dispatch} = useContext(Context)

    if(!state.user.user) {
        return <Login/>
    }else return children
}