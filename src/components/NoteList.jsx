// import {useState} from 'react'

// const NoteList = (props) => {

//     const editNote = (index) => {
//         props.setCurrentNote(props.notes[index]);
//         props.setIsEditing(index + 1);
//       };
    
//       const deleteNote = (index) => {
//         const updatedNotes = [...props.notes];
//         updatedNotes.filter(index, 1);
//         props.setNotes(updatedNotes);
//       };

//   return (
// <ul>
//         {props.notes.map((note, index) => (
//           <li key={index}>
//             {note}
//             <button onClick={() => editNote(index)}>Edit</button>
//             <button onClick={() => deleteNote(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//         ); 
// }

// export default NoteList
// // const NoteList = (props) => {
// //     const [currentNote, setCurrentNote] = useState('');
// //     const [isEditing, setIsEditing] = useState(false);
// //     return (
// //         <ul>
// //         {notes.map((note, index) => (
// //           <li key={index}>
// //             {note}
// //             <button onClick={() => editNote(index)}>Edit</button>
// //             <button onClick={() => deleteNote(index)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     )
// // }
// // export default NoteList

import {useContext} from "react"
import{NoteContext} from '../contexts/Note'

const NoteList = () => {
	const ctxValue = useContext(NoteContext)
    const removeHandler = (noteId) => {
		const newNotes = ctxValue.notes.filter((note) => note.id !== noteId);
		ctxValue.setNotes(newNotes);
			};

	const editHandler = (note) => {
		ctxValue.setEditMode(true);
		ctxValue.setNoteTitle(note.title);
		ctxValue.setEditableNote(note);
	};

  return (
    <ul className="note-list">
				{ctxValue.notes.map((note) => (
					<li key={note.id}>
						<span>{note.title}</span>
						<button onClick={() => editHandler(note)}>Edit</button>
						<button onClick={() => removeHandler(note.id)}>
							Remove
						</button>
					</li>
				))}
			</ul>
    )
}

export default NoteList