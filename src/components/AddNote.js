import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { nanoid } from 'nanoid';

const AddNote = () => {
  const { dispatch } = useContext(AppContext);
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = (text) => {
    // Check that value user types is valid before saving it to state -
    // use 'trim' to remove whitespace from the start and end of a string:
    if (noteText.trim().length > 0) {
      // handleAddNote(noteText);
      console.log(noteText);

      // Reset textarea after submit
      setNoteText('');

      const date = new Date();
      const newNote = {
        id: nanoid,
        text: text,
        date: date.toLocaleDateString(),
      };

      // // Create a  new array of new notes - use spread operator so as not to mutate the state, which is bad
      // const newNotes = [...notes, newNote];

      // // Update the state with the new array of new notes
      // setNotes(newNotes);

      dispatch({
        type: 'ADD_NOTE',
        payload: newNote,
      });
    }
  };

  return (
    <div className='note new'>
      <textarea
        rows='8'
        cols='10'
        placeholder='Type to add a note...'
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className='note-footer'>
        <small>{characterLimit - noteText.length} Remaining</small>
        {/* <button className='save' onClick={handleSaveClick}> */}
        <button className='save' onClick={() => handleSaveClick(noteText)}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
