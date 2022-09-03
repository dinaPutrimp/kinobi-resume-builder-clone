const EducationReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EDUCATION":
            return [
                ...state,
                action.payload.education
            ];
        case "CHANGE_EDUCATION":
            return state.map((edu, idx) => {
                if (Number(idx) === Number(action.payload.index)) {
                    return { ...edu, [action.payload.name]: action.payload.value }
                }
                return edu;
            });
        case "CHANGE_ACHIEVMENT":
            return state.map((edu, idx) => {
                if (Number(idx) === Number(action.payload.index)) {
                    if (action.payload.name === "achievment") {
                        return { ...edu, [action.payload.name]: action.payload.value }
                    }
                }
                return edu;
            });
        case "DRAG_AND_DROP_CARD_EDUCATION":
            return action.payload;
        case "REMOVE_FORM":
            return state.filter((edu, index) => index !== action.payload.index);
        default:
            return state;
    }
}

export default EducationReducer;