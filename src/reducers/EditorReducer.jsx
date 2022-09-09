export const EditorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_TEXT":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        default:
            return state;
    }
}
