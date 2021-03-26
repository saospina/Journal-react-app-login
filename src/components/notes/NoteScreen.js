import React from 'react'
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="An awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    className="notes__textarea"
                    placeholder="What happended today?"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>

                <div className="notes__image">
                    <img src="https://wallpaperaccess.com/full/4545965.png" alt="dragon ball z"/>

                </div>



            </div>
        </div>
    )
}
