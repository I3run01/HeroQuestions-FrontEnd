import axios from "axios";

const http = axios.create({
    baseURL: 'http://heroquestions-env.eba-ttxwjjpe.sa-east-1.elasticbeanstalk.com'
})

export const api = {
    SignIn: async (email: string, password: string) => {
        try {
            let response = await http.post('/register', {
                'email': email,
                'password': password
            }, )
            return JSON.stringify(response)
        }catch {
            return "{status: 'Conection Error'}"
        }
    },

    Login: async (email: string, password: string) => {
        try {
            let response = await http.post('/login', {
                'email': email,
                'password': password,
            }, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
            })
            return JSON.stringify(response)
        }catch {
            return "{status: 'Conection Error'}"
        }
    },  

    TokenValidation: async () => {
        let token = localStorage.getItem('token')

        try {
            let response = await http.post('/tokenValidation', {
                'token': token,
            })
            return JSON.stringify(response)
        } catch {
            return "{status: 'Conection Error'}"
        }
    },

    sendHeroQuestions: async (parameter: string, value: string) => {
        let token = localStorage.getItem('token')
        try {
            let response = await http.post('/heroQuestions', {
                'value': value,
                'parameter': parameter,
                'token': token,
            })
            return JSON.stringify(response)
        } catch {
            return "{status: 'Conection Error'}"
        }
    },

    allHeroAnswer: async () => {
        let token = localStorage.getItem('token')

        try {
            let response = await http.post('/allHeroAnswer', {
                'token': token
            })
            return JSON.stringify(response)
        } catch {
            return "{status: 'Conection Error'}"
        }
    }





}