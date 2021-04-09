import { types } from '../types/types';


export const activeNoteAction = (id, note) => ({
    type: types.notesActive,
    payload: { id, ...note }
});

export const setNotesAction = (notes) => ({
    type: types.notesLoad,
    payload: notes
});

export const refreshNoteAction = (id, note) => ({
    type: types.notesUpdated,
    payload: { id, note: { id, ...note } }
});

export const deleteNoteAction = (id) => ({
    type: types.notesDelete,
    payload: id
});

export const noteLogoutAction = () => ({
    type: types.notesLogoutCleaning
});

export const addNewNoteAction = (id, note) => ({
    type: types.notesAddNewEntry,
    payload: { id, ...note }
})





