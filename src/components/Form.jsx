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

import React from 'react'

const Form = (props) => {

    const createHandler = (event) => {
		event.preventDefault();
		if (!props.noteTitle) {
			return alert("Please Enter Note Title");
		}
		const newNote = {
			id: Date.now() + "",
			title: props.noteTitle,
		};

		props.setNotes([...props.notes, newNote]); //
		// notes = [...notes, newNote]
		props.setNoteTitle("");
		//noteTitle = ""
	};
    const updateHandler = (event) => {
		event.preventDefault();

		if (!props.noteTitle.trim()) {
			return alert("Please Enter Note Title");
		}
		const updatedNotesArray = props.notes.map((note) => {
			if (note.id === props.editableNote.id) {
				// 3 === 2
				// 2 === 2
				// 1 === 2
				return {
					...note,
					title: props.noteTitle,
				};

				// {id: 2, title: "note 222"}
			}

			return note; // {id: 1, title: "note 1"} // {id: 3, title: 'note 3}
		});
		// updatedNotesArray = [{id: 1, title: "note 1"}, {id: 2, title: "note 222"}, {id: 3, title: 'note 3}]

		props.setNotes(updatedNotesArray);
		props.setEditMode(false);
		props.setEditableNote(null);
		props.setNoteTitle("");
	};
    
  return (
    <form onSubmit={props.editMode ? updateHandler : createHandler}>
				<input
					type="text"
					value={props.noteTitle}
					onChange={(event) => props.setNoteTitle(event.target.value)}
				/>
				<button type="submit">
					{props.editMode ? "Update Note" : "Add Note"}
				</button>
			</form>
  )
}

export default Form