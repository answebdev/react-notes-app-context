import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import NotesList from './components/NotesList';
import Search from './components/Search';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: 'This is my first note!',
    //   date: '07/28/2022',
    // },
    // {
    //   id: nanoid(),
    //   text: 'This is my second note!',
    //   date: '07/29/2022',
    // },
    // {
    //   id: nanoid(),
    //   text: 'This is my third note!',
    //   date: '08/02/2022',
    // },
    // {
    //   id: nanoid(),
    //   text: 'This is my fourth note!',
    //   date: '08/05/2022',
    // },
  ]);

  // Add a note
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString(),
    };
    // Create a  new array of new notes - use spread operator so as not to mutate the state, which is bad
    const newNotes = [...notes, newNote];

    // Update the state with the new array of new notes
    setNotes(newNotes);
  };

  // Retrieve notes that are saved in local storage when app loads
  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  //   if (savedNotes) {
  //     setNotes(savedNotes);
  //   }
  // }, []);

  // Save notes to local storage
  // useEffect(() => {
  //   localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  // }, [notes]);

  return (
    // if 'darkMode' is equal to true (&&), then add the 'dark-mode' class:
    <div className={`${darkMode && 'dark-mode'}`}>
      <AppProvider>
        <div className='container'>
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText} />
          <NotesList
            // Filter the notes based on the search term before it gets passed to the notes list:
            // 'note.text' is the text of the note.
            // So, take the current list of notes, filter those notes to return only the ones that include the search text,
            // which is what the user has typed into the search bar.
            // It will then pass the result of this to the 'NotesList' component as a 'notes' prop:
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
          />
        </div>
      </AppProvider>
    </div>
  );
};

export default App;
