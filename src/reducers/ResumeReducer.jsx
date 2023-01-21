export const ResumeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_MODAL":
            return {
                ...state,
                modal: action.payload
            }
        case "ADD_NEW_RESUME":
            return {
                ...state,
                resume: [...state.resume, action.payload]
            }
        case "FETCH_RESUME":
            const index = state.resume.findIndex(res => res.id === action.payload.id)
            if (index > -1) {
                return state
            } else {
                return {
                    ...state,
                    resume: [...state.resume, action.payload],
                    resumeError: null
                }
            }
        case "UPDATE_FETCH_RESUME":
            return {
                ...state,
                resume: state.resume.map(resume => {
                    if (resume.id === action.payload.id) {
                        return action.payload
                    }
                    return resume
                }),
                resumeError: null
            }
        case "UPDATE_TITLE_RESUME":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    projectName: action.payload.value
                }
            }
        case "FETCH_CURRENT_RESUME":
            return { ...state, currentResume: action.payload, resumeError: null }
        case "DELETE_RESUME":
            return {
                ...state,
                resume: state.resume.filter(resume => resume.id !== action.payload),
                resumeError: null
            }
        case "CREATE_ERROR":
            return {
                ...state,
                resumeError: action.payload
            }
        case "FETCH_ERROR":
            return {
                ...state,
                resumeError: action.payload
            }
        case "UPDATE_PERSONAL":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    personal: {
                        ...state.currentResume.personal,
                        [action.payload.name]: action.payload.value
                    }
                },
                resumeError: null
            }
        case "ADD_EXPERIENCE":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    experiences: [
                        ...state.currentResume.experiences,
                        action.payload
                    ]
                },
                resumeError: null
            }
        case "UPDATE_EXPERIENCE":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    experiences: state.currentResume.experiences.map((experience, index) => {
                        if (Number(index) === Number(action.payload.index)) {
                            if (action.payload.name === "current") {
                                return { ...experience, [action.payload.name]: !experience.current }
                            }
                            return { ...experience, [action.payload.name]: action.payload.value }
                        }
                        return experience
                    })
                },
                resumeError: null
            }
        case "DRAG_AND_DROP_CARD_EXPERIENCE":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    experiences: action.payload
                },
                resumeError: null
            }
        case "REMOVE_FORM_EXPERIENCE":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    experiences: state.currentResume.experiences.filter((experience, index) => index !== action.payload.index)
                },
                resumeError: null
            }
        case "ADD_EDUCATION":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    educations: [
                        ...state.currentResume.educations,
                        action.payload
                    ]
                },
                resumeError: null
            }
        case "UPDATE_EDUCATION":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    educations: state.currentResume.educations.map((education, index) => {
                        if (Number(index) === Number(action.payload.index)) {
                            if (action.payload.name === "achievment") {
                                return { ...education, [action.payload.name]: action.payload.value }
                            }
                            return { ...education, [action.payload.name]: action.payload.value }
                        }
                    })
                },
                resumeError: null
            }
        case "DRAG_AND_DROP_CARD_EDUCATION":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    educations: action.payload
                },
                resumeError: null
            }
        case "REMOVE_FORM_EDUCATION":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    educations: state.currentResume.educations.filter((education, index) => index !== action.payload.index)
                },
                resumeError: null
            }
        case "ADD_ORGANIZATION_EXP":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    organizations: [
                        ...state.currentResume.organizations,
                        action.payload
                    ]
                },
                resumeError: null
            }
        case "UPDATE_ORGANIZATION":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    organizations: state.currentResume.organizations.map((organization, index) => {
                        if (Number(index) === Number(action.payload.index)) {
                            if (action.payload.name === "current") {
                                return { ...organization, [action.payload.name]: !organization.current }
                            }
                            return { ...organization, [action.payload.name]: action.payload.value }
                        }
                        return organization
                    })
                },
                resumeError: null
            }
        case "DRAG_AND_DROP_CARD_ORGANIZATION":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    organizations: action.payload
                },
                resumeError: null
            }
        case "REMOVE_FORM_ORGANIZATION":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    organizations: state.currentResume.organizations.filter((organization, index) => index !== action.payload.index)
                },
                resumeError: null
            }
        case "ADD_OTHER":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    others: [
                        ...state.currentResume.others,
                        action.payload
                    ]
                },
                resumeError: null
            }
        case "UPDATE_OTHER":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    others: state.currentResume.others.map((other, index) => {
                        if (Number(index) === Number(action.payload.index)) {
                            return { ...other, [action.payload.name]: action.payload.value }
                        }
                        return other
                    })
                },
                resumeError: null
            }
        case "DRAG_AND_DROP_CARD_OTHER":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    others: action.payload
                },
                resumeError: null
            }
        case "REMOVE_FORM_OTHER":
            return {
                ...state,
                currentResume: {
                    ...state.currentResume,
                    others: state.currentResume.others.filter((other, index) => index !== action.payload.index)
                },
                resumeError: null
            }
        case "UPDATE_ERROR":
            return {
                ...state,
                resumeError: action.payload
            }
        default:
            return state;
    }
}