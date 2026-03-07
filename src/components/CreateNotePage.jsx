import {useState} from "react";

function CreateNotePage ({addNote, setView}) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function handleSave() {
        if (!title.trim() && !text.trim()) return;
        addNote(title, text);
        setView("list");
    }

    return (
        <div className="container">
            <h2>Create Note</h2>
            <input
                placeholder="Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Write your note..."
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

export default CreateNotePage;