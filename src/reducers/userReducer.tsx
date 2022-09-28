import { reducerActionType } from "../types/reducerActionsType";

export type userType = {
    user: boolean | null
}

export const userInicialState: userType = {
    user: null
}

export const userReducer = (state: userType, action: reducerActionType) => {
    switch(action.type) {
        case 'CHANGE_USER':
            return {...state, user: action.payload.user}
        break
    }

    return state
}