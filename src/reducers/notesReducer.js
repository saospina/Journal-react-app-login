import { types } from '../types/types';

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.notesActive:
            return {
                ...state,
                active: { ...payload }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...payload]
            }
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map(note => (
                    //Si son iguales, es la nota que se tiene que actualizar
                    note.id === payload.id ? payload.note : note
                ))
            }

        default:
            return state
    }
}
