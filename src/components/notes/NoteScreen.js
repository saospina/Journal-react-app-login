import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNoteAction } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title } = formValues;
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
                    <div className="notes__image">
                        <img src="https://wallpaperaccess.com/full/4545965.png" alt="dragon ball z" />

                    </div>}



            </div>
        </div>
    )
}
