import { createContext, useReducer } from 'react';
import { nanoid } from 'nanoid';

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTES':
      return {
        ...state,
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
