import NoteItem from "./NoteItem";

function NoteList ({notes, deleteNote}) {
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
                />
            ))}
        </ul>
    ); 
}

export default NoteList;