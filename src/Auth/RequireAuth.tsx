import { useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Context } from '../contexts/Context'
import { TokenValidation } from './Request'
import * as request from './Request'

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({children}: Props) =>  {
    const {state, dispatch} = useContext(Context)
    const navigate = useNavigate()

    useEffect(()=>  {
        TokenValidation(localStorage.getItem('token') ? localStorage.getItem('token') as string : 'generic' )      
    })
    

    if(!state.user.user) {
        setTimeout(()=> {
            if(state.user.user === null) {
                //return <Navigate to="/login" />
                localStorage.setItem('state', state.user.user+'3' )
                navigate('../login')
            }else return children
        }, 200)  
    }else return children
}