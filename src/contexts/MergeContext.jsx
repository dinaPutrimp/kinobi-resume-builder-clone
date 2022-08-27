import { Component, createContext } from "react";

export const MergeContext = createContext();

class MergeContextProvider extends Component {
    state = {
        personal: {
            name: '',
            phone: '',
            email: '',
            linkedin: '',
            portofolio: '',
            address: '',
            summary: '',
        },
        experiences: [
            {
                company: '',
                role: '',
                companyLocation: '',
                description: '',
                startMonth: '',
                startYear: '',
                endMonth: '',
                endYear: '',
                current: false,
                jobdesk: '',
            }
        ],
        educations: [
            {
                school: '',
                location: '',
                startMonth: '',
                startYear: '',
                endMonth: '',
                endYear: '',
                educationLevel: '',
                description: '',
                gpa: 0,
                max: '',
                achievment: '',
            }
        ],
        organizations: [
            {
                name: '',
                role: '',
                location: '',
                startMonth: '',
                startYear: '',
                endMonth: '',
                endYear: '',
                current: '',
                description: ''
            }
        ],
        others: [
            {
                category: '',
                year: '',
                elaboration: ''
            }
        ]
    }

    storePersonalInformation = (state = this.state.personal, action) => {
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

    storeExperiences = (state = this.state.experiences, action) => {
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
            default:
                return state;
        }
    }

    storeEducations = (state = this.state.educations, action) => {
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
            default:
                return state;
        }
    }


    render() {
        return (
            <MergeContext.Provider value={{ ...this.state, storePersonalInformation: this.storePersonalInformation, storeExperiences: this.storeExperiences, storeEducations: this.storeEducations }}>
                {this.props.children}
            </MergeContext.Provider>
        )
    }
}

export default MergeContextProvider;