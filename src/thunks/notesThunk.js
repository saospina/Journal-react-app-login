import { db } from "../firebase/firebase-config";
import Swal from "sweetalert2";

import {
    activeNoteAction,
    setNotesAction,
    refreshNoteAction,
    deleteNoteAction,
    addNewNoteAction
} from '../actions/notes';
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
        dispatch(addNewNoteAction(note.id, noteToFirestore));
        Swal.fire('Saved', note.title, 'success')

    } catch (e) {
        console.error(e);
        Swal.fire('Unsaved', 'System could not save the entry changes', 'error')
    }
};

export const startUploading = (file) => async (dispatch, getState) => {

    const { active: activeNote } = getState().notes;
    Swal.fire({
        title: 'Loading...',
        text: 'Please wait...',
        allowOutsideClick: false,
        willOpen: () => {
            Swal.showLoading();
        }
    })
    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl
    dispatch(startSaveNote(activeNote))
    Swal.close();

};

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        try {
            await db.doc(`${uid}/journal/notes/${id}`).delete()
            dispatch(deleteNoteAction(id))
        } catch (err) {
            console.error(err)
        }

    }
}

