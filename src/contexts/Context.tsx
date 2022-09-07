import { createContext, useReducer, useEffect } from "react";

import { userType, userInicialState, userReducer } from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionsType";

import { TokenValidation } from '../Auth/Request'

type initialStateType = {
    user: userType
} //Change Here

type ContextType = {
    state: initialStateType
    dispatch: React.Dispatch<any>
}

const initialState = {
    user: userInicialState
} //Change Here



export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action)

}) //Change Here

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    
    const [state, dispatch] = useReducer(mainReducer, initialState)

    useEffect(()=>  {
        TokenValidation(localStorage.getItem('token') ? localStorage.getItem('token') as string : 'generic' )
        .then((response)=> JSON.parse(response))   
        .then((json)=>{
            if(json.user) {
                

                dispatch({
                    type: 'CHANGE_USER',
                    payload: {
                        user: {email: json.user}
                    }
                })

                localStorage.setItem('user', json.user)
                localStorage.setItem('state', state.user.user)

            } else {
                localStorage.setItem('user', json.user)
                localStorage.setItem('state', state.user.user)
            }
        })
    })
    

    return (
        <Context.Provider value={{state, dispatch}} >
            {children}
        </Context.Provider>
    )

}