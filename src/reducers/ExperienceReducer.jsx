const ExperienceReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPERIENCE":
            return [
                ...state,
                action.payload.experience
            ];
        case "CHANGE_EXPERIENCE":
            return state.map((exp, idx) => {
                if (Number(idx) === Number(action.payload.index)) {
                    if (action.payload.name === "current") {
                        return { ...exp, [action.payload.name]: !exp.current }
                    }
                    return { ...exp, [action.payload.name]: action.payload.value }
                };
                return exp;
            });
        case "CHANGE_JOBS":
            return state.map((exp, idx) => {
                if (Number(idx) === Number(action.payload.index)) {
                    if (action.payload.name === "jobdesk") {
                        return { ...exp, [action.payload.name]: action.payload.value }
                    }
                }
                return exp;
            });
        case "DRAG_AND_DROP_CARD_EXPERIENCE":
            return action.payload;
        case "REMOVE_FORM":
            return state.filter((exp, index) => index !== action.payload.index);
        default:
            return state;
    }
}

export default ExperienceReducer;