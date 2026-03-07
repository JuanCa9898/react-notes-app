import {useState} from "react";

function EditNotePage({notes, editingIndex, saveEdit, setView}) {
    
    const note = notes[editingIndex];
    const [title, setTitle] = useState(note.title);
    const [text, setText] = useState(note.text);

    function handleSave () {
        saveEdit(editingIndex, title, text);
        setView("list");
    }

    return (
        <div className="container">

            <h2>Edit Note</h2>
            
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <div className="buttons">

                <button onClick={handleSave}>
                    Save
                </button>
                <button onClick={() => setView("list")}>
                    Cancel
                </button>

            </div>
        </div>
    );
}

export default EditNotePage;