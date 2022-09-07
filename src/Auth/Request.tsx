import { useContext } from "react"
import { Context } from "../contexts/Context"

const API_URL = 'https://teppaaplication.herokuapp.com/'

export const ChangeState = (value: object | null) => {
    const {state, dispatch} = useContext(Context)

    dispatch({
        type: 'CHANGE_USER',
        payload: {
            user: value
        }
    })
    localStorage.setItem('test', String(value))

    
}

export const SignIn = async (email: string, password: string) => {
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
        return JSON.stringify(json)
 
    } catch {
        return "{status: 'Conection Error'}"
    }

}

export const Login =  async (email: string, password: string) => {
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
        return JSON.stringify(json)
        
    } catch {
        return "{status: 'Conection Error'}"
    }
}

export const TokenValidation = async (token: string) => {
    let ApiRoute = 'tokenValidation'
    
    try {
        let response = await fetch(API_URL+ApiRoute,
        {
            method: 'POST',
            body: new URLSearchParams ({
                'token': token,
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
        })

        let json = await response.json()
        ChangeState({email: json.email})
        return JSON.stringify(json)
        
    } catch {
        return "{status: 'Conection Error'}"
    }
}