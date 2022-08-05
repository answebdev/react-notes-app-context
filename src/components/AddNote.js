import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    // If user types number of characters withing the limit,
    // the 'noteText' state will be set.
    // If the user types more characters than allowed (200),
    // it will skip over the following condition block and not set the state (i.e., user won't be able to type any more)
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    // Check that value user types is valid before saving it to state -
    // use 'trim' to remove whitespace from the start and end of a string:
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);

      // Reset textarea after submit
      setNoteText('');
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
        <button className='save' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
