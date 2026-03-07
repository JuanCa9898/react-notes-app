import {useState} from "react";

function NoteItem({note, index, deleteNote, setView, setEditingIndex}) {

    function handleEdit() {
        setEditingIndex(index);
        setView("edit");
    }

    return (
        <li>
            {note.title}

            <button onClick={handleEdit}>
                Edit
            </button>
            <button onClick={() => deleteNote(index)}>
                Delete
            </button>

        </li>
    );
}

export default NoteItem;