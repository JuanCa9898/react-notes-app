import { useState, useEffect } from 'react';
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import NotesListPage from "./components/NotesListPage";
import CreateNotePage from "./components/CreateNotePage";
import EditNotePage from "./components/EditNotePage";
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [view, setView] = useState("list");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    console.log("Saving Notes: ", notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(title, text) {
    setNotes([
      ...notes,
      {title, text}
    ]);
  }

  function deleteNote(index) {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  }

  function startEdit(index) {
    setEditingIndex(index);
  }

  function saveEdit(index, newTitle, newText) {
    const updatedNotes = notes.map((note, i) =>
      i === index ? 
        {...note, title: newTitle, text: newText} 
        : note
    );

    setNotes(updatedNotes);
  }

  if (view === "list") {
    return (
      <NotesListPage
        notes={notes}
        setView={setView}
        setEditingIndex={setEditingIndex}
        deleteNote={deleteNote}
      />
    );
  }

  if (view === "create") {
    return (
      <CreateNotePage
        addNote={addNote}
        setView={setView}
      />
    );
  }

  if (view === "edit") {
    return (
      <EditNotePage
        notes={notes}
        editingIndex={editingIndex}
        saveEdit={saveEdit}
        setView={setView}
      />
    );
  }

  return (
    <div className = "container">
      <Header />
      <NoteInput addNote={addNote} />
      <NoteList  
        notes={notes} 
        deleteNote={deleteNote}
        startEdit={startEdit}
        saveEdit={saveEdit}
        editingIndex={editingIndex}
      />
    </div>
  );
}

export default App
