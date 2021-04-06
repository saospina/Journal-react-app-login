import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { JournalEntries } from './JournalEntries';
import { startLogut } from '../../thunks/authThunk';
import { startNewNote } from '../../thunks/notesThunk';

export const SideBar = () => {

    const { name } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogut())
    };

    const handleAddNewEntry = () => {
        dispatch(startNewNote());
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span className="ml-1">{name}</span>
                </h3>
                <button
                    className="btn"
                    onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div
                onClick={handleAddNewEntry}
                className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New entry</p>
            </div>
            <JournalEntries />
        </aside>
    )
}
