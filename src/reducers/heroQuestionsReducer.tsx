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
    heroName:null,
    heroCity:null,
    heroExperience:null,
    heroLocomotion:null,
    heroAbilities:null,
    heroSuperPower:null,
}

export const heroQuestionsReducer = (state: heroQuestionsType, action: reducerActionType) => {
    switch(action.type) {
        case 'changeHeroName':
            return {...state, heroName: action.payload.heroName}
        break

        case 'changeHeroCity':
            return {...state, heroCity: action.payload.heroCity}
        break

        case 'changeHeroExperience':
            return {...state, heroExperience: action.payload.heroExperience}
        break

        case 'changeHeroLocomotion':
            return {...state, heroLocomotion: action.payload.heroLocomotion}
        break

        case 'changeHeroAbilities':
            return {...state, heroAbilities: action.payload.heroAbilities}
        break

        case 'changeHeroSuperPower':
            return {...state, heroSuperPower: action.payload.heroSuperPower}
        break

    }
    

    return state
}