import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Note from './Note';
import AddNote from './AddNote';

const NotesList = () => {
  const { notes } = useContext(AppContext);

  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Note
          // key={note.id}
          key={note.text}
          id={note.id}
          text={note.text}
          date={note.date}
          // handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote />
    </div>
  );
};

export default NotesList;
