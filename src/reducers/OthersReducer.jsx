const OthersReducer = (state, action) => {
    switch (action.type) {
        case "ADD_OTHER":
            return [
                ...state,
                action.payload.other
            ];
        case "CHANGE_OTHER":
            return state.map((other, idx) => {
                if (Number(idx) === Number(action.payload.index)) {
                    return { ...other, [action.payload.name]: action.payload.value }
                }
                return other;
            });
        case "REMOVE_FORM":
            return state.filter((other, index) => index !== action.payload.index);
        default:
            return state;
    }
}

export default OthersReducer;