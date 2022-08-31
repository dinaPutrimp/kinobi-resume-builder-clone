const PersonalReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_PERSONAL":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        default:
            return state;
    }
}

export default PersonalReducer;