// import {useState} from 'react'

// export const Form = (props) => {
//     // const [notes, setNotes] = useState([]);
//     // const [currentNote, setCurrentNote] = useState('');

//     const addNote = () => {
//         if (props.currentNote.trim() !== "") {
//           if (props.isEditing) {
//             // If editing, update the current note
//             const updatedNotes = [...props.notes];
//             updatedNotes[props.isEditing - 1] = props.currentNote;
//             props.setNotes(updatedNotes);
//             props.setIsEditing(false);
//           } else {
//             props.setNotes([...props.notes, props.currentNote]);
//           }
//           props.setCurrentNote("");
//         }
//       };

//   return (
//     <form >
//       <input
//         type="text"
//         placeholder="Enter a note"
//         value={props.currentNote}
//         onChange={(e) => props.setCurrentNote(e.target.value)}
//       />
//       <button onClick={addNote}>{props.isEditing ? 'Update Note' : 'Create Note'}</button>
//     </form>
//   )
// }
// export default Form;

import {useContext} from "react"
import{NoteContext} from '../contexts/Note'
const Form = () => {
	const ctxValue = useContext(NoteContext)
    const createHandler = (event) => {
		event.preventDefault();
		if (!ctxValue.noteTitle) {
			return alert("Please Enter Note Title");
		}
		const newNote = {
			id: Date.now() + "",
			title: ctxValue.noteTitle,
		};

		ctxValue.setNotes([...ctxValue.notes, newNote]); //
		ctxValue.setNoteTitle("");
	};
    const updateHandler = (event) => {
		event.preventDefault();

		if (!ctxValue.noteTitle.trim()) {
			return alert("Please Enter Note Title");
		}
		const updatedNotesArray = ctxValue.notes.map((note) => {
			if (note.id === ctxValue.editableNote.id) {

				return {
					...note,
					title: ctxValue.noteTitle,
				};

			}

			return note; 
        	});

		ctxValue.setNotes(updatedNotesArray);
		ctxValue.setEditMode(false);
		ctxValue.setEditableNote(null);
		ctxValue.setNoteTitle("");
	};
    
  return (
    <form onSubmit={ctxValue.editMode ? updateHandler : createHandler}>
				<input
					type="text"
					value={ctxValue.noteTitle}
					onChange={(event) => ctxValue.setNoteTitle(event.target.value)}
				/>
				<button type="submit">
					{ctxValue.editMode ? "Update Note" : "Add Note"}
				</button>
			</form>
  )
}

export default Form