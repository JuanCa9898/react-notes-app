import {useState} from "react";

function NoteItem({note, index, deleteNote, setView, setEditingIndex}) {

    function handleEdit() {
        setEditingIndex(index);
        setView("edit");
    }

    return (
        <li className = " note-card" onClick={handleEdit}>
            {note.title}

            <button onClick={(e) => {
                e.stopPropagation();
                handleEdit();
            }}>
                Edit
            </button>
            <button onClick={(e) => {
                e.stopPropagation();
                deleteNote(index);
            }}>
                Delete
            </button>

        </li>
    );
}

export default NoteItem;