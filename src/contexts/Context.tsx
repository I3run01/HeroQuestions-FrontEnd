import { createContext, useReducer } from "react";

import {userType, userInicialState, userReducer} from '../reducers/authReducer'
import { reducerActionType } from "../types/reducerActionsType";

type initialStateType = {
    user: userType
} //Change Here //language

type ContextType = {
    state: initialStateType
    dispatch: React.Dispatch<any>
}

const initialState = {
    user: userInicialState,
} //Change Here



export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
}) //Change Here

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}} >
            {children}
        </Context.Provider>
    )

}