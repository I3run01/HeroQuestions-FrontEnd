import axios from "axios"

const API_URL = 'http://heroquestions-env.eba-ttxwjjpe.sa-east-1.elasticbeanstalk.com'

export const fetchRequest = {
    SignIn: async (email: string, password: string) => {
        let ApiRoute = '/register'

        try {
            let response = await fetch(API_URL+ApiRoute,
            {
                method: 'POST',
                body: new URLSearchParams ({
                    email: email,
                    password: password,
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
    },

    Login: async (email: string, password: string) => {
        let ApiRoute = '/login'

        try {
            let response = await fetch(API_URL+ApiRoute,
            {
                method: 'POST',
                body: new URLSearchParams ({
                    email: email,
                    password: password,
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

    },

    TokenValidation: async () => {
        let ApiRoute = '/tokenValidation'
        let token = localStorage.getItem('token') as string

        try {
            let response = await fetch(API_URL+ApiRoute,
            {
                method: 'POST',
                body: new URLSearchParams ({
                    token: token,
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
    },

    sendHeroQuestions: async (paramater: string, value: string) => {
        let ApiRoute = '/heroQuestions'
        let token = localStorage.getItem('token') as string

        
        try {
            
            let json = await axios.post(API_URL+ApiRoute, new URLSearchParams({
                value: value,
                parameter: paramater,
                token: token,
            }))
            return JSON.stringify(json)
        } catch {
            return "{status: 'Conection Error'}"
        }
    },

    allHeroAnswer: async () => {
        let apiRouter = '/allHeroAnswer'
        let token = localStorage.getItem('token') as string

        try {
            let response = await fetch(API_URL+apiRouter, 
            {
                method: 'POST',
                body: new URLSearchParams ({
                    token: token
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
}