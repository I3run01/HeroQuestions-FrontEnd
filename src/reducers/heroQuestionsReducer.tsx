import { reducerActionType } from "../types/reducerActionsType";

export type heroQuestionsType = {
    heroName: string | null,
    heroCity: string | null,
    heroExperience: string | null,
    heroLocomotion: string | null,
    heroAbilities: string | null,
    heroSuperPower: string | null,
}

export const heroQuestionsInicialState: heroQuestionsType = {
    heroName:'af',
    heroCity:null,
    heroExperience:null,
    heroLocomotion:null,
    heroAbilities:'wfgwrghwt',
    heroSuperPower:null,
}

export const heroQuestionsReducer = (state: heroQuestionsType, action: reducerActionType) => {
    switch(action.type) {
        case 'CHANGE_USER':
            return {...state, heroQuestions: action.payload.heroQuestions}
        break
    }

    return state
}