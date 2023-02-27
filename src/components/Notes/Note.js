import React from "react";

const Note = (props) => {
  const { title, noteClicked, active } = props;
  // let classes = ['note-item'];
  // if (active) {
  //     classes.push('active')
  // }
  return (
    <li className={`note-item ${active && "active"}`} onClick={noteClicked}>
      {title}
    </li>
    // <li className={classes.join(' ')} onClick={noteClicked}>{title}</li>
  );
};

export default Note;
