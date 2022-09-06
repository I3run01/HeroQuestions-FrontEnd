import { useContext } from "react"
import { Context } from "../contexts/Context"

const API_URL = 'https://teppaaplication.herokuapp.com/'

export const SignIn = async (email: string, password: string) => {
    const {state, dispatch} = useContext(Context)

    let ApiRoute = 'register'

    try {
        let response = await fetch(API_URL+ApiRoute,
        {
            method: 'POST',
            body: new URLSearchParams ({
                'email': email,
                'password': password,
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
        })

        let json = await response.json()
        localStorage.setItem('token', json.token)

        dispatch({
            type: 'CHANGE_USER',
            payload: {
                user: {email: email}
            }
        })
        
        return JSON.stringify(json)
 
    } catch {
        return "{status: 'Conection Error'}"
    }

}

export const Login =  async (email: string, password: string) => {
    const {state, dispatch} = useContext(Context)

    let ApiRoute = 'login'

    try {
        let response = await fetch(API_URL+ApiRoute,
        {
            method: 'POST',
            body: new URLSearchParams ({
                'email': email,
                'password': password,
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
        })

        let json = await response.json()
        localStorage.setItem('token', json.token)

        dispatch({
            type: 'CHANGE_USER',
            payload: {
                user: {email: email}
            }
        })

        return JSON.stringify(json)
        
    } catch {
        return "{status: 'Conection Error'}"
    }
}

export const TokenValidation = async (email: string, token: string) => {
    let ApiRoute = 'tokenValidation'
    
    try {
        let response = await fetch(API_URL+ApiRoute,
        {
            method: 'POST',
            body: new URLSearchParams ({
                'email': email,
                'token': token,
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
        })

        let json = await response.json()
        return JSON.stringify(json)
        
    } catch {
        return "{status: 'Conection Error'}"
    }
}