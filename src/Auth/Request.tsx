import axios from "axios"

const API_URL = 'http://heroquestionsbackend-env.eba-vzyspjgy.sa-east-1.elasticbeanstalk.com'

export const fetchRequest = {
    SignUp: async (email: string, password: string) => {
        let ApiRoute = '/register'

        try {
            let json = await axios.post(API_URL+ApiRoute, new URLSearchParams({
                "email": email,
                "password": password,
            }))
            localStorage.setItem('token', json.data.token)
            return JSON.stringify(json.data)
     
        } catch {
            return "{status: 'Conection Error'}"
        } 
    },

    Login: async (email: string, password: string) => {
        let ApiRoute = '/login'

        try {
            let json = await axios.post(API_URL+ApiRoute, new URLSearchParams({
                "email": email,
                "password": password,
            }))
            localStorage.setItem('token', json.data.token)
            return JSON.stringify(json.data)
        } catch {
            return "{status: 'Conection Error'}"
        }

    },

    TokenValidation: async () => {
        let ApiRoute = '/tokenValidation'
        let token = localStorage.getItem('token') as string

        try {
            let json = await axios.post(API_URL+ApiRoute, new URLSearchParams({
                "token": token,
            }))
            return JSON.stringify(json.data)
        } catch {
            return "{status: 'Conection Error'}"
        }
    },

    sendHeroQuestions: async (paramater: string, value: string) => {

        let ApiRoute = '/heroQuestions'
        let token = localStorage.getItem('token') as string

        try {
            let json = await axios.post(API_URL+ApiRoute, new URLSearchParams({
                "value": value,
                "parameter": paramater,
                "token": token,
            }))
            return JSON.stringify(json.data)
            
        } catch {
            return "{status: 'Conection Error'}"
        } 
    },

    allHeroAnswer: async () => {
        let ApiRoute = '/allHeroAnswer'
        let token = localStorage.getItem('token') as string

        try {
            let json = await axios.post(API_URL+ApiRoute, new URLSearchParams({
                "token": token
            }))
            return JSON.stringify(json.data)
        } catch {
            return "{status: 'Conection Error'}"
        }
    } 
}