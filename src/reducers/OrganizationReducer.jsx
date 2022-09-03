const OrganizationReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ORGANIZATION_EXP":
            return [
                ...state,
                action.payload.organization
            ];
        case "CHANGE_ORGANIZATION":
            return state.map((org, idx) => {
                if (Number(idx) === Number(action.payload.index)) {
                    if (action.payload.name === "current") {
                        return { ...org, [action.payload.name]: !org.current }
                    }
                    return { ...org, [action.payload.name]: action.payload.value }
                }
                return org;
            });
        case "CHANGE_DESCRIPTION":
            return state.map((org, idx) => {
                if (Number(idx) === Number(action.payload.index)) {
                    if (action.payload.name === "description") {
                        return { ...org, [action.payload.name]: action.payload.value }
                    }
                }
                return org;
            });
        case "DRAG_AND_DROP_CARD_ORGANIZATION":
            return action.payload;
        case "REMOVE_FORM":
            return state.filter((org, index) => index !== action.payload.index);
        default:
            return state;
    }
}

export default OrganizationReducer;