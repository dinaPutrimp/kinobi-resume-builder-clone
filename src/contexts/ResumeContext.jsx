import { createContext, useReducer } from "react";
import useCombinedReducers from "use-combined-reducers";
import EducationReducer from "../reducers/EducationReducer";
import ExperienceReducer from "../reducers/ExperienceReducer";
import OrganizationReducer from "../reducers/OrganizationReducer";
import OthersReducer from "../reducers/OthersReducer";
import PersonalReducer from "../reducers/PersonalReducer";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
    const initialState = {
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
                jobdesk: '<ul><li class=\"list-disc\">Colaborate with team members</li></ul>',
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
                achievment: '<ul><li class=\"list-disc\">Lead team for web development project</li></ul>',
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
                current: false,
                description: '<ul><li class=\"list-disc\">Lead team for web development project</li></ul>'
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
    const [resume, dispatch] = useCombinedReducers({
        personalInfo: useReducer(PersonalReducer, initialState.personal),
        worksExperience: useReducer(ExperienceReducer, initialState.experiences),
        educationBackground: useReducer(EducationReducer, initialState.educations),
        organizationsExperience: useReducer(OrganizationReducer, initialState.organizations),
        othersAchievement: useReducer(OthersReducer, initialState.others)
    });
    const { personalInfo, worksExperience, educationBackground, organizationsExperience, othersAchievement } = resume;
    return (
        <ResumeContext.Provider value={{ personalInfo, worksExperience, educationBackground, organizationsExperience, othersAchievement, dispatch }}>
            {props.children}
        </ResumeContext.Provider>
    );
}

export default ResumeContextProvider;