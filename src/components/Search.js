import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MdSearch } from 'react-icons/md';

const Search = () => {
  const { dispatch } = useContext(AppContext);
  const [searchText, setSearchText] = useState('');

  const handleSearchNote = (event) => {
    setSearchText(event.target.value);
    console.log(searchText);

    dispatch({
      type: 'FILTER_NOTES',
      payload: searchText,
    });
  };

  return (
    <div className='search'>
      <MdSearch className='search-icons' size='1.3em' />
      <input
        onChange={handleSearchNote}
        type='text'
        placeholder='Type to search...'
      />
    </div>
  );
};

export default Search;

// import React from 'react';
// import { MdSearch } from 'react-icons/md';

// const Search = ({ handleSearchNote }) => {
//   return (
//     <div className='search'>
//       <MdSearch className='search-icons' size='1.3em' />
//       <input
//         onChange={(event) => handleSearchNote(event.target.value)}
//         type='text'
//         placeholder='Type to search...'
//       />
//     </div>
//   );
// };

// export default Search;
