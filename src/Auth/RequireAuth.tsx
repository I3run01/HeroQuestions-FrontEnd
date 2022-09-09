import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../contexts/Context'
import {Login} from '../pages/Login'

const navigate = useNavigate()

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({children}: Props) =>  {
    const {state, dispatch} = useContext(Context)

    if(!state.user.user) {
       // return <Login/>
       return navigate('../login')
    }else return children
}