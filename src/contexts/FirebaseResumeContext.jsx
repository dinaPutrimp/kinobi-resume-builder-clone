/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useReducer, createContext } from 'react';
import { ResumeReducer } from '../reducers/ResumeReducer';

export const FirebaseResumeContext = createContext();

function FirebaseResumeContextProvider(props) {
    const initialState = {
        resume: [],
        currentResume: {},
        resumeError: null,
        modal: true,
    };

    const [resumeState, dispatchResume] = useReducer(ResumeReducer, initialState);
    return (
        <FirebaseResumeContext.Provider value={{ resumeState, dispatchResume }}>
            {props.children}
        </FirebaseResumeContext.Provider>
    );
}

export default FirebaseResumeContextProvider;