import React, { useState } from 'react';

function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: Date.now(),
      title,
      content,
      timestamp: new Date().toISOString(),
    };
    onAdd(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
        className="form-input"
      />
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="Content"
        className="form-input"
      />
      <button type="submit" className="btn btn-add">Add Note</button>
    </form>
  );
}

export default NoteForm;