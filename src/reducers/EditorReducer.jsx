/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
export const EditorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_TEXT':
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        default:
            return state;
    }
};
