import NotesList from "./NoteList";

function NotesListPage ({notes, deleteNote, setView, setEditingIndex}) {
    return (
        <div className="container">

            <h1>Notes App</h1>

            <NotesList
                notes={notes}
                deleteNote={deleteNote}
                setView={setView}
                setEditingIndex={setEditingIndex}
            />

            <button
                className="new-note-btn"
                onClick={() => setView("create")}
            >
                +
            </button>

        </div>
    );
}



export default NotesListPage;