/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'SIGNUP':
            return { ...state, authError: { ...state.authError, signError: null } };
        case 'LOGIN':
            return { ...state, user: action.payload, authError: { ...state.authError, loginError: null } };
        case 'LOGOUT':
            return {
                ...state, user: action.payload, currentUser: action.payload, authError: { signError: null, loginError: null },
            };
        case 'CURRENT_USER':
            return { ...state, currentUser: action.payload };
        case 'LOGIN_ERROR':
            return { ...state, authError: { ...state.authError, loginError: action.payload } };
        case 'SIGNUP_ERROR':
            return { ...state, authError: { ...state.authError, signError: action.payload } };
        case 'FETCH_ERROR':
            return { ...state, authError: { ...state.authError, loginError: action.payload } };
        default:
            return state;
    }
};
