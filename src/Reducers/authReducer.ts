import { reducerActionType } from "../Types/reducersActions";

export type AuthType = {
    status: Object | null
}

export const authInitialStatus: AuthType = {
    status: null
}


export const authReducer = (state: AuthType, action: reducerActionType) => {

    switch(action.type) {
        case 'CHANGE_STATUS':
            return {...state,  status: action.payload.status}
        break
    }

    return state
}