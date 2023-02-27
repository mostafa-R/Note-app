import React from 'react';

const Notes = (props) => {
    return (
        <div className="notes-section">
            {props.children}
        </div>
    )
};

export default Notes;