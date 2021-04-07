import React from 'react'
import { useSelector } from 'react-redux';

import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';

export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange] = useForm(note);

    const { body, title } = formValues;


    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="An awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    autoFocus
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    className="notes__textarea"
                    placeholder="What happended today?"
                    name=""
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
