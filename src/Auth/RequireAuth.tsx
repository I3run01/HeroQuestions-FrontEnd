import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { json } from 'stream/consumers'
import * as request from './Request'

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({children}: Props) =>  {
    let isAuth = false

    useEffect(() => {
        validationToken()
    }, [])

    const validationToken = async () => {
        const email = localStorage.getItem('email') ? localStorage.getItem('email') : null
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : null

        let response = await request.TokenValidation(email as string, token as string)
        let json = JSON.parse(response)
        if(json.status) return true
        
    }

    if(!isAuth) {
        return <Navigate to="/login" />
    } return children
}