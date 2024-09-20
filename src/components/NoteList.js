import React, { useState } from 'react';
import NoteItem from './NoteItem'; // Import the NoteItem component

const NoteList = ({ notes, editNote, deleteNote, searchNotes }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    searchNotes(searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search notes..."
          style={{ width: '80%', maxWidth: '500px', padding: '10px', marginBottom: '10px' }}
        />
        <button onClick={handleSearch} style={{ padding: '10px', marginLeft: '5px' }}>
          Search
        </button>
      </div>
      <h2>Your Notes</h2>
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            editNote={editNote}
            deleteNote={deleteNote}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
