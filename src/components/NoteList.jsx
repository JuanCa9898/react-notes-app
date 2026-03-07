import NoteItem from "./NoteItem";

function NoteList ({notes, deleteNote, setView, setEditingIndex}) {
    if (notes.length === 0) {
        return <p>No notes yet</p>;
    }

    return (
        <ul>
             {notes.map((note, index) => (
                <NoteItem 
                    key={index} 
                    note={note}
                    index={index}
                    deleteNote={deleteNote}
                    setView={setView}
                    setEditingIndex={setEditingIndex}
                />
            ))}
        </ul>
    ); 
}

export default NoteList;