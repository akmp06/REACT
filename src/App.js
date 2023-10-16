import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import NoteList from "./components/NoteList";

const App = () => {

	////my code some prob in page load
  // const [noteTitle, setNoteTitle] = useState("");
  // const [notes, setNotes] = useState([]);
  // const [isEditing, setIsEditing] = useState(false);

  // /**
  //  * note = {
  //  * 		id: 1,
  //  * 		title: "My First Note"
  //  *
  //  * }
  //  */

  // const createHandler = (event) => {
  // 	event.preventDefault();
  // 	if (!noteTitle) {
  // 		return alert("Please Enter Note Title");
  // 	}
  // 	const newNote = {
  // 		id: Date.now() + "",
  // 		title: noteTitle,
  // 	};

  // 	setNotes([...notes, newNote]); //
  // 	// notes = [...notes, newNote]
  // 	setNoteTitle("");
  // 	//noteTitle = ""
  // };
  // const removeHandler = (noteId) => {
  // 	// 2
  // 	const newNotes = notes.filter((note) => note.id !== noteId);
  // 	// 							(({id: 1, title: note-1}) => 1 !== 2)
  // 	//							(({id: 2, title: note-2}) => 2 !== 2)

  // 	setNotes(newNotes);
  // 	// notes = [{id: 1, title: note-1}, {id: 2, title: note-2}, {id: 3, title: note-3}] --> Removed/ Falaya Dibe
  // 	// notes = [{id: 1, title: note-1}, {id: 2, title: note-2}]
  // };

  // const editNote = (index) => {
  // 	setCurrentNote(notes[index]);
  // 	setIsEditing(index + 1); // Use a non-zero value as a flag to indicate editing
  //   };

  // return (
  // 	<div className="App">
  // 		<div className="input-note">
  // 		<form onSubmit={createHandler}>
  // 			<input
  // 				type="text"
  // 				value={noteTitle}
  // 				onChange={(event) => setNoteTitle(event.target.value)}
  // 			/>
  // 			<button type="submit">Add Note</button>
  // 		</form>
  // 		</div>
  // 		<ul className="note-list">
  // 			{notes.map((note) => (
  // 				<li key={note.id}>
  // 					<span>{note.title}</span>
  // 					<button onClick={() => editNote(note.id)}>Edit</button>
  // 					{/* <button onClick={() => editHandler(note.id)}>Edit</button> */}
  // 					<button onClick={() => removeHandler(note.id)}>
  // 						Remove
  // 					</button>
  // 					{/* <Edit
  //                     key={note.id}
  //                     note={note}
  //                     onUpdateNote={(updatedNote) => handleUpdateNote(updatedNote)}
  //                 /> */}
  // 				</li>
  // 			))}
  // 		</ul>
  // 	</div>
  // );

  /////////////////////
    // const [notes, setNotes] = useState([]);
    // const [currentNote, setCurrentNote] = useState('');
    // const [isEditing, setIsEditing] = useState(false);

//   const addNote = () => {
//     if (currentNote.trim() !== "") {
//       if (isEditing) {
//         // If editing, update the current note
//         const updatedNotes = [...notes];
//         updatedNotes[isEditing - 1] = currentNote;
//         setNotes(updatedNotes);
//         setIsEditing(false);
//       } else {
//         setNotes([...notes, currentNote]);
//       }
//       setCurrentNote("");
//     }
//   };

//   const editNote = (index) => {
//     setCurrentNote(notes[index]);
//     setIsEditing(index + 1);
//   };

//   const deleteNote = (index) => {
//     const updatedNotes = [...notes];
//     updatedNotes.filter(index, 1);
//     setNotes(updatedNotes);
//   };

//mycode some prob in page load


    const [noteTitle, setNoteTitle] = useState("");
	const [notes, setNotes] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableNote, setEditableNote] = useState(null);
  return (
    <div className="App">
      <Form 
	    // setCurrentNote={setCurrentNote}
		// setIsEditing={setIsEditing}
		// setNotes={setNotes}
		// notes={notes}
		// isEditing={isEditing}
		// currentNote={currentNote}
		
		noteTitle={noteTitle}
		setNoteTitle={setNoteTitle}
		notes={notes}
		setNotes={setNotes}
		editableNote={editableNote}
		setEditMode={setEditMode}
		setEditableNote={setEditableNote}
		editMode={editMode}
	  />
      <div className="note-list">
        <NoteList 
		//  setCurrentNote={setCurrentNote}
		//  setIsEditing={setIsEditing}
		//  notes={notes}
		//  setNotes={setNotes}
		// isEditing={isEditing}
		// currentNote={currentNote}

		setNoteTitle={setNoteTitle}
		notes={notes}
		setNotes={setNotes}
		setEditMode={setEditMode}
		setEditableNote={setEditableNote}
		/>
      </div>
    </div>
  );
};

export default App;
