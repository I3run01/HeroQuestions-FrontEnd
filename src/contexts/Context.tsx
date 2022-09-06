import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { reducerActionType } from "../Types/reducersActions";

//Imports
import {AuthType, authInitialStatus, authReducer} from '../Reducers/authReducer'


//Campo editável
type initialStateType = {
    status: AuthType;
}

type ContextType = {
    state: initialStateType
    dispatch: React.Dispatch<any>
}

///Campo editável
const initialState = {
    status: authInitialStatus,

}



export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

///Campo editável
const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    status: authReducer(state.status, action),

})

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}} >
            {children}
        </Context.Provider>
    )

}