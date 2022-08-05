import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MdDeleteForever } from 'react-icons/md';

const Note = (props) => {
  const { dispatch } = useContext(AppContext);

  // Delete a note
  const handleDeleteNote = () => {
    dispatch({
      type: 'DELETE_NOTE',
      payload: props.id,
    });
  };

  return (
    <div className='note'>
      <span>{props.text}</span>
      <div className='note-footer'>
        <small>{props.date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(props.id)}
          // onClick={handleDeleteNote}
          className='delete-icon'
          size='1.3em'
        />
      </div>
    </div>
  );
};

export default Note;
