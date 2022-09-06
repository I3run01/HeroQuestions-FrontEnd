import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../contexts/Context'
import { TokenValidation } from './Request'
import * as request from './Request'

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({children}: Props) =>  {
    const {state, dispatch} = useContext(Context)

    useEffect(()=>  {
        TokenValidation(localStorage.getItem('token') ? localStorage.getItem('token') as string : 'generic' )
            .then((json)=> { return JSON.parse(json)})
            .then((obj)=> {
                if(obj.status) {

                    dispatch({
                        type: 'CHANGE_USER',
                        payload: {
                            user: {email: obj.user}
                        }
                    })
                }
            })
    })
    

    if(!state.user.user) {
        return <Navigate to="/login" />
    } return children
}