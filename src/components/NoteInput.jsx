import {useState} from "react";

function NoteInput({addNote}) {
    const [text, setText] = useState("");

    function handleAdd() {
        addNote(text);
        setText("");
    }

    return (
        <div>
            <input 
                placeholder="Write a note..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleAdd();
                }}
            />

            <button onClick={handleAdd}>
                Add
            </button>
        </div>
    );
}

export default NoteInput;