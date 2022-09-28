import { reducerActionType } from "../types/reducerActionsType";

export type loginStatusType = {
    loginStatus: boolean | null
}

export const userInicialState: loginStatusType = {
    loginStatus: null
}

export const userReducer = (state: loginStatusType, action: reducerActionType) => {
    switch(action.type) {
        case 'change_loginStatus':
            return {...state, loginStatus: action.payload.loginStatus}
        break
    }

    return state
}