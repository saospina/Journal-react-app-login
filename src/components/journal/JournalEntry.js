import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { activeNoteAction } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body, url }) => {

    const dispatch = useDispatch();

    const noteDate = moment(date);

    const handleEntryClick = () => {
        dispatch(activeNoteAction(id, { date, title, body, url }))
    }

    return (
        <div
            className="journal__entry pointer"
            onClick={handleEntryClick}
        >
            {
                url &&
                <div
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}
                ></div>
            }
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('D')}</h4>

            </div>

        </div>
    )
}
