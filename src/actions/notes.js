import { types } from '../types/types';


export const activeNoteAction = (id, note) => ({
    type: types.notesActive,
    payload: { id, ...note }
});

export const setNotesAction = (notes) => ({
    type: types.notesLoad,
    payload: notes
})

