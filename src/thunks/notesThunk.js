import { db } from "../firebase/firebase-config";
import Swal from "sweetalert2";

import { activeNoteAction, setNotesAction, refreshNoteAction } from '../actions/notes';
import { loadNotes } from '../helpers/loadNotes';
import { fileUpload } from '../helpers/fileUpload';


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

export const startSaveNote = (note) => async (dispatch, getState) => {
    try {
        // getState() segundo argumento en un callback usando Thunk para obtener el estado
        const { uid } = getState().auth;
        if (!note.url) {
            delete note.url
        }
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)
        dispatch(refreshNoteAction(note.id, noteToFirestore));
        Swal.fire('Saved', note.title, 'success')

    } catch (e) {
        console.error(e);
        Swal.fire('Unsaved', 'System could not save the entry changes', 'error')
    }
};

export const startUploading = (file) => async (dispatch, getState) => {
    try {
        const { active: activeNote } = getState().notes;
        const fileUrl = await fileUpload(file);
    } catch (err) {
        console.error(err)

    }
}

