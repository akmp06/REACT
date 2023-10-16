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

import React from 'react'

const NoteList = (props) => {
    const removeHandler = (noteId) => {
		// 2
		const newNotes = props.notes.filter((note) => note.id !== noteId);
		// 							(({id: 1, title: note-1}) => 1 !== 2)
		//							(({id: 2, title: note-2}) => 2 !== 2)

		props.setNotes(newNotes);
		// notes = [{id: 1, title: note-1}, {id: 2, title: note-2}, {id: 3, title: note-3}] --> Removed/ Falaya Dibe
		// notes = [{id: 1, title: note-1}, {id: 2, title: note-2}]
	};

	const editHandler = (note) => {
		props.setEditMode(true);
		props.setNoteTitle(note.title);
		props.setEditableNote(note);
	};

  return (
    <ul className="note-list">
				{props.notes.map((note) => (
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