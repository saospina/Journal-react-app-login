import { db } from "../firebase/firebase-config";

import { activeNoteAction, setNotesAction } from '../actions/notes';
import { loadNotes } from '../helpers/loadNotes';


export const startNewNote = () => async (dispatch, getState) => {
    try {
        // getState() segundo argumento en un callback usando Thunk para obtener el estado
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNoteAction(docRef.id, newNote))
    } catch (e) {
        console.error(e);
    }
};

export const startLoadingNotes = (uid) => async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotesAction(notes))
};