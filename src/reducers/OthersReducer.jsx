/* eslint-disable linebreak-style */
/* eslint-disable indent */
const OthersReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_OTHER':
            return [
                ...state,
                action.payload.other,
            ];
        case 'CHANGE_OTHER':
            return state.map((other, idx) => {
                if (Number(idx) === Number(action.payload.index)) {
                    return { ...other, [action.payload.name]: action.payload.value };
                }
                return other;
            });
        case 'DRAG_AND_DROP_CARD_OTHER':
            return action.payload;
        case 'REMOVE_FORM_OTHER':
            return state.filter((other, index) => index !== action.payload.index);
        default:
            return state;
    }
};

export default OthersReducer;
