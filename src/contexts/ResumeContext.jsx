/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, createContext, useReducer } from 'react';
import useCombinedReducers from 'use-combined-reducers';
import { EditorReducer } from '../reducers/EditorReducer';
import EducationReducer from '../reducers/EducationReducer';
import ExperienceReducer from '../reducers/ExperienceReducer';
import OrganizationReducer from '../reducers/OrganizationReducer';
import OthersReducer from '../reducers/OthersReducer';
import PersonalReducer from '../reducers/PersonalReducer';

export const ResumeContext = createContext();

function ResumeContextProvider(props) {
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
                jobdesk: '<ul><li class=\\"list-disc\\">Colaborate with team members</li></ul>',
            },
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
                achievment: '<ul><li class=\\"list-disc\\">Lead team for web development project</li></ul>',
            },
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
                description: '<ul><li class=\\"list-disc\\">Lead team for web development project</li></ul>',
            },
        ],
        others: [
            {
                category: '',
                year: '',
                elaboration: '',
            },
        ],
    };

    const editorState = {
        fontFamily: 'font-sans',
        fontSize: 'text-xs',
        lineHeight: '',
        textAlign: 'text-left',
    };

    const [editor, dispatchEditor] = useReducer(EditorReducer, editorState);
    const [resume, dispatch] = useCombinedReducers({
        personalInfo: useReducer(PersonalReducer, initialState.personal, () => (localStorage.getItem('personal') ? JSON.parse(localStorage.getItem('personal')) : initialState.personal)),
        worksExperience: useReducer(ExperienceReducer, initialState.experiences, () => (localStorage.getItem('experience') ? JSON.parse(localStorage.getItem('experience')) : initialState.experiences)),
        educationBackground: useReducer(EducationReducer, initialState.educations, () => (localStorage.getItem('education') ? JSON.parse(localStorage.getItem('education')) : initialState.educations)),
        organizationsExperience: useReducer(OrganizationReducer, initialState.organizations, () => (localStorage.getItem('organization') ? JSON.parse(localStorage.getItem('organization')) : initialState.organizations)),
        othersAchievement: useReducer(OthersReducer, initialState.others, () => (localStorage.getItem('other') ? JSON.parse(localStorage.getItem('other')) : initialState.others)),
    });
    const {
        personalInfo, worksExperience, educationBackground, organizationsExperience, othersAchievement,
    } = resume;

    useEffect(() => {
        localStorage.setItem('personal', JSON.stringify(personalInfo));
        localStorage.setItem('experience', JSON.stringify(worksExperience));
        localStorage.setItem('education', JSON.stringify(educationBackground));
        localStorage.setItem('organization', JSON.stringify(organizationsExperience));
        localStorage.setItem('other', JSON.stringify(othersAchievement));
    }, [personalInfo, worksExperience, educationBackground, organizationsExperience, othersAchievement]);

    return (
        <ResumeContext.Provider value={{
            personalInfo, worksExperience, educationBackground, organizationsExperience, othersAchievement, dispatch, editor, dispatchEditor,
        }}
        >
            {props.children}
        </ResumeContext.Provider>
    );
}

export default ResumeContextProvider;
