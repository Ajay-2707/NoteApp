import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addOrEditNote = (note) => {
    if (note.id === null) {
      note.id = Date.now();
      setNotes([...notes, note]);
    } else {
      setNotes(notes.map((n) => (n.id === note.id ? note : n)));
    }
    setCurrentNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (note) => {
    setCurrentNote(note);
  };

  const clearCurrentNote = () => {
    setCurrentNote(null);
  };

  const searchNotes = (query) => {
    if (query === '') {
      const storedNotes = JSON.parse(localStorage.getItem('notes'));
      if (storedNotes) setNotes(storedNotes);
    } else {
      setNotes(notes.filter(note => 
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
      ));
    }
  };

  return (
    <div className="App">
      <h1>Simple Note Taking App</h1>
      <NoteForm
        addOrEditNote={addOrEditNote}
        currentNote={currentNote}
        clearCurrentNote={clearCurrentNote}
      />
      <NoteList
        notes={notes}
        editNote={editNote}
        deleteNote={deleteNote}
        searchNotes={searchNotes}
      />
    </div>
  );
};

export default App;
