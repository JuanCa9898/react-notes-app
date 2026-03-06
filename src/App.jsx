import { useState } from 'react'
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(text) {
    if (!text.trim()) return;
    setNotes([...notes, text]);
  }

  function deleteNote(index) {
    const updatedNotes = notes.filter((_, i))
    setNotes(updatedNotes);
  }

  return (
    <div className = "container">
      <Header />
      <NoteInput addNote={addNote} />
      <NoteList  notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App
