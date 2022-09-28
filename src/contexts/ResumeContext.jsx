import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { EditorReducer } from "../reducers/EditorReducer";
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

    const editorState = {
        fontFamily: "font-sans",
        fontSize: "text-xs",
        lineHeight: "",
        textAlign: "text-left"
    }

    const [editor, dispatchEditor] = useReducer(EditorReducer, editorState);
    const [personalInfo, dispatchPersonal] = useReducer(PersonalReducer, initialState.personal, () => {
        return localStorage.getItem("personal") ? JSON.parse(localStorage.getItem("personal")) : initialState.personal;
    });
    const [worksExperience, dispatchWorkExp] = useReducer(ExperienceReducer, initialState.experiences, () => {
        return localStorage.getItem("experience") ? JSON.parse(localStorage.getItem("experience")) : initialState.experiences;
    });
    const [educationBackground, dispatchEducation] = useReducer(EducationReducer, initialState.educations, () => {
        return localStorage.getItem("education") ? JSON.parse(localStorage.getItem("education")) : initialState.educations;
    });
    const [organizationsExperience, dispatchOrgExp] = useReducer(OrganizationReducer, initialState.organizations, () => {
        return localStorage.getItem("organization") ? JSON.parse(localStorage.getItem("organization")) : initialState.organizations;
    });
    const [othersAchievement, dispatchOthers] = useReducer(OthersReducer, initialState.others, () => {
        return localStorage.getItem("other") ? JSON.parse(localStorage.getItem("other")) : initialState.others;
    });

    useEffect(() => {
        localStorage.setItem("personal", JSON.stringify(personalInfo));
        localStorage.setItem("experience", JSON.stringify(worksExperience));
        localStorage.setItem("education", JSON.stringify(educationBackground));
        localStorage.setItem("organization", JSON.stringify(organizationsExperience));
        localStorage.setItem("other", JSON.stringify(othersAchievement));
    }, [personalInfo]);

    return (
        <ResumeContext.Provider value={{ personalInfo, dispatchPersonal, worksExperience, dispatchWorkExp, educationBackground, dispatchEducation, organizationsExperience, dispatchOrgExp, othersAchievement, dispatchOthers, editor, dispatchEditor }}>
            {props.children}
        </ResumeContext.Provider>
    );
}

export default ResumeContextProvider;