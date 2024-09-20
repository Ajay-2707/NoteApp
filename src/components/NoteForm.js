import React, { useState, useEffect } from 'react';

const NoteForm = ({ addOrEditNote, currentNote, clearCurrentNote }) => {
  const [note, setNote] = useState({ id: null, title: '', content: '', timestamp: '' });

  useEffect(() => {
    if (currentNote) {
      setNote(currentNote);
    }
  }, [currentNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
      timestamp: new Date().toLocaleString()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditNote(note);
    setNote({ id: null, title: '', content: '', timestamp: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        value={note.content}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Save Note</button>
      {currentNote && <button onClick={clearCurrentNote}>Cancel</button>}
    </form>
  );
};

export default NoteForm;
