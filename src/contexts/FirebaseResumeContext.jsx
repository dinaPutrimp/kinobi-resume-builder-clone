/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useReducer } from "react";
import { createContext } from "react";
import { ResumeReducer } from "../reducers/ResumeReducer";

export const FirebaseResumeContext = createContext();

const FirebaseResumeContextProvider = (props) => {
    const initialState = {
        resume: [],
        currentResume: {},
        resumeError: null,
        modal: true
    }

    const [resumeState, dispatchResume] = useReducer(ResumeReducer, initialState);
    return (
        <FirebaseResumeContext.Provider value={{ resumeState, dispatchResume }}>
            {props.children}
        </FirebaseResumeContext.Provider>
    )
}

export default FirebaseResumeContextProvider;