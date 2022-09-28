import { createContext, useReducer, useEffect } from "react";
import { loginStatusType, userInicialState, userReducer } from "../reducers/loginStatusReducer";
import { heroQuestionsType, heroQuestionsInicialState, heroQuestionsReducer } from '../reducers/heroQuestionsReducer'
import { reducerActionType } from "../types/reducerActionsType";
import {fetchRequest} from '../Auth/Request'

type initialStateType = {
    loginStatus: loginStatusType
    heroQuestions: heroQuestionsType
} //Change Here

type ContextType = {
    state: initialStateType
    dispatch: React.Dispatch<any>
}

const initialState = {
    loginStatus: userInicialState,
    heroQuestions: heroQuestionsInicialState
} //Change Here



export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    loginStatus: userReducer(state.loginStatus, action),
    heroQuestions: heroQuestionsReducer(state.heroQuestions, action)
}) //Change Here

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    
    
    const [state, dispatch] = useReducer(mainReducer, initialState)

    useEffect(()=>  {
        fetchRequest.TokenValidation()
        .then((response)=> JSON.parse(response))   
        .then((json)=>{
            if(json.user) {
                
                dispatch({
                    type: 'change_loginStatus',
                    payload: {
                        loginStatus: true
                    }
                })
            } else {
                dispatch({
                    type: 'change_loginStatus',
                    payload: {
                        loginStatus: false
                    }
                })
            }
        })
    },[])
    

    return (
        <Context.Provider value={{state, dispatch}} >
            {children}
        </Context.Provider>
    )

}