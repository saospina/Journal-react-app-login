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
        case types.notesAddNewEntry:
            return {
                ...state,
                notes: [...state.notes, payload]
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
        case types.notesDelete:
            return {
                ...state,
                active: null,
                //regresa todas las notas, menos la seleccionada
                notes: state.notes.filter(note => note.id !== payload)
            }
        case types.notesLogoutCleaning:
            return {
                ...state,
                active: null,
                notes: []
            }

        default:
            return state
    }
}
