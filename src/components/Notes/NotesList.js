import React from 'react';

const NotesList = (props) => {
    return (
        <ul className="notes-list">
            {props.children}
        </ul>
    );
};

export default NotesList;