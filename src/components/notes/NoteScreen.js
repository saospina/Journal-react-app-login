import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNoteAction } from '../../actions/notes';
import { startDeleting } from '../../thunks/notesThunk';

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title, id } = formValues;
    const refActiveId = useRef(note.id)

    useEffect(() => {

        if (note.id !== refActiveId.current) {
            reset(note);
            refActiveId.current = note.id
        }

    }, [note, reset])

    useEffect(() => {
        dispatch(activeNoteAction(formValues.id, { ...formValues }))

    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch(startDeleting(id))
    }



    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="An awesome title"
                    className="notes__title-input"
                    name="title"
                    autoComplete="off"
                    autoFocus
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    className="notes__textarea"
                    placeholder="What happended today?"
                    name="body"
                    id=""
                    cols="30"
                    rows="10"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {
                    (note.url) &&
                    <div>
                        <img className="notes__img" src={note.url} alt="img-cloudinary" />
                    </div>}



            </div>
            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                <i className="far fa-trash-alt fa-lg mr-1"></i>
                Delete
                </button>
        </div>
    )
}
