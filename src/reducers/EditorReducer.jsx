export const EditorReducer = (state, action) => {
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
