import React from 'react';

const NoteItem = ({ note, editNote, deleteNote }) => {
  return (
    <div className="note-item">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <span>{note.timestamp}</span>
      <button onClick={() => editNote(note)}>Edit</button>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
