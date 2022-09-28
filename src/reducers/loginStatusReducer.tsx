import { reducerActionType } from "../types/reducerActionsType";

export type loginStatusType = {
    loginStatus: boolean
}

export const userInicialState: loginStatusType = {
    loginStatus: false
}

export const userReducer = (state: loginStatusType, action: reducerActionType) => {
    switch(action.type) {
        case 'change_loginStatus':
            return {...state, loginStatus: action.payload.loginStatus}
        break
    }

    return state
}