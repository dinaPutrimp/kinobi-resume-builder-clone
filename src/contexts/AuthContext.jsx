import { createContext, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const initialState = {
        user: {},
        currentUser: {},
        authError: {
            signError: null,
            loginError: null
        }
    }

    const [authState, dispatchAuth] = useReducer(AuthReducer, initialState);
    return (
        <AuthContext.Provider value={{ authState, dispatchAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;