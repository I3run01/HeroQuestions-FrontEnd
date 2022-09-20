import { useContext } from "react"
import { Context } from "../contexts/Context"

const API_URL = 'https://teppaaplication.herokuapp.com/'

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
        return JSON.stringify(json)
        
    } catch {
        return "{status: 'Conection Error'}"
    }
}

export const sendHeroQuestions = async (paramater: string, value: string) => {
    let ApiRoute = 'heroQuestions'
    let token = localStorage.getItem('token') as string

    try {
        let response = await fetch(API_URL+ApiRoute,
        {
            method: 'POST',
            body: new URLSearchParams ({
                'value': value,
                'parameter': paramater,
                'token': token
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
        let json = await response.json()
        return JSON.stringify(json)

    } catch {
        return "{status: 'Conection Error'}"
    }
}

export const allHeroAnswer = async () => {
    let apiRouter = ''

}