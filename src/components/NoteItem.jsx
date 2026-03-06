function NoteItem({note, index, deleteNote}) {
    return (
        <li>
            {note}
            <button onClick={() => deleteNote(index)}>
                Delete
            </button>
        </li>
    );
}

export default NoteItem;