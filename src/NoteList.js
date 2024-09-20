import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onUpdate }) {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default NoteList;