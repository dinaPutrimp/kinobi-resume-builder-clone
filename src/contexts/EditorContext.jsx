/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useReducer } from 'react';
import { EditorReducer } from '../reducers/EditorReducer';

export const EditorContext = createContext();

function EditorContextProvider(props) {
    const initialState = {
        fontFamily: 'font-sans',
        fontSize: 'text-xs',
        lineHeight: '',
        textAlign: 'text-left',
    };

    const [editorState, dispatchEditor] = useReducer(EditorReducer, initialState);

    return (
        <EditorContext.Provider value={{ editorState, dispatchEditor }}>
            {props.children}
        </EditorContext.Provider>
    );
}

export default EditorContextProvider;
