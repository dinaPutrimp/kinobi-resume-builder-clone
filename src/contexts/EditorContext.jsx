/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useReducer } from "react";
import { EditorReducer } from "../reducers/EditorReducer";

export const EditorContext = createContext();

const EditorContextProvider = (props) => {
    const initialState = {
        fontFamily: "font-sans",
        fontSize: "text-xs",
        lineHeight: "",
        textAlign: "text-left"
    }

    const [editorState, dispatchEditor] = useReducer(EditorReducer, initialState);

    return (
        <EditorContext.Provider value={{ editorState, dispatchEditor }}>
            {props.children}
        </EditorContext.Provider>
    );
}

export default EditorContextProvider;