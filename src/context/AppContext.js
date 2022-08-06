import { createContext, useReducer } from 'react';
import { nanoid } from 'nanoid';

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTES':
      return {
        ...state,
      };
    case 'ADD_NOTE':
      return {
        // Copy the current state:
        ...state,
        notes: [...state.notes, action.payload],
      };
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case 'FILTER_NOTES':
      return {
        ...state,
        notes: state.notes.filter((note) =>
          note.text.toLowerCase().includes(action.payload)
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  notes: [
    {
      id: nanoid(),
      text: 'First note of the app!',
      date: '08/04/2022',
    },
    {
      id: nanoid(),
      text: 'Add Context API to app.',
      date: '08/04/2022',
    },
  ],
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        notes: state.notes,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
