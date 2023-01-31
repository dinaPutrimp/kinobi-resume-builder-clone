/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useReducer } from 'react';
import { AuthReducer } from '../reducers/AuthReducer';

export const AuthContext = createContext();

function AuthContextProvider(props) {
    const initialState = {
        user: {},
        currentUser: {},
        authError: {
            signError: null,
            loginError: null,
        },
    };

    const [authState, dispatchAuth] = useReducer(AuthReducer, initialState);
    return (
        <AuthContext.Provider value={{ authState, dispatchAuth }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
