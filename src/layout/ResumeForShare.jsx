/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
// import DOMPurify from 'isomorphic-dompurify';
// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { accessResumeWithoutAuthorized } from '../actions/resumeActions';

function ResumeForShare() {
    // const location = useLocation();
    // const [currentResume, setCurrentResume] = useState([]);

    // useEffect(() => {
    //     accessResumeWithoutAuthorized().then((resumes) => {
    //         resumes.forEach((resume) => {
    //             setCurrentResume([...currentResume, resume]);
    //         });
    //     });
    // }, [location.pathname.split('/').at(-1)]);

    return (
        <div className="shadow-t-side rounded-lg bg-white h-fit hidden md:block p-6">
            pppppp
            {/* <div className="mb-3">
                <div className="text-3xl font-bold uppercase mb-2">{resumeState.currentResume.personal.name}</div>
                <div className="text-blue-500 underline-offsite-2">
                    <span>{resumeState.currentResume.personal.phone}</span>
                    <span>{resumeState.currentResume.personal.email !== '' ? ` | ${resumeState.currentResume.personal.email}` : ''}</span>
                    <span>
                        {resumeState.currentResume.personal.linkedin !== '' ? (
                            <a target="_blank" href={resumeState.currentResume.personal.linkedin} rel="noreferrer">
                                {' '}
                                |
                                {' '}
                                {resumeState.currentResume.personal.linkedin}
                            </a>
                        ) : ''}
                    </span>
                    <span>
                        {resumeState.currentResume.personal.portofolio !== '' ? (
                            <a target="_blank" href={resumeState.currentResume.personal.portofolio} rel="noreferrer">
                                {' '}
                                |
                                {' '}
                                {resumeState.currentResume.personal.portofolio}
                            </a>
                        ) : ''}
                    </span>
                </div>
                <div className="text-gray-400 mb-1.5">{resumeState.currentResume.personal.address}</div>
                <div>
                    {resumeState.currentResume.personal.summary}
                </div>
            </div>
            <div className="mb-2">
                {resumeState.currentResume.experiences.length > 0 ? <div className="font-semibold border-b border-black mb-1">Work Experience</div> : ''}
                {resumeState.currentResume.experiences.map((experience, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                            <div>
                                <span className="font-semibold">{experience.company}</span>
                                {' '}
                                -
                                {' '}
                                <span className="font-semibold text-gray-500">{experience.companyLocation}</span>
                            </div>
                            <div>
                                <span>{experience.startMonth}</span>
                                <span>
                                    {' '}
                                    {experience.startYear}
                                </span>
                                <span>
                                    {experience.current === true ? ' - Present' : (
                                        <span>
                                            {' '}
                                            -
                                            {' '}
                                            {experience.endMonth}
                                            {' '}
                                            {experience.endYear}
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className="mb-1 italic">{experience.role}</div>
                        <div className="px-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(experience.jobdesk) }} />
                    </div>
                ))}
            </div>
            <div className="mb-2">
                {resumeState.currentResume.educations.length > 0 ? <div className="font-semibold border-b border-black mb-1">Education</div> : ''}
                {resumeState.currentResume.educations.map((education, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                            <div>
                                <span className="font-semibold">{education.school}</span>
                                {' '}
                                -
                                {' '}
                                <span className="font-semibold text-gray-500">{education.location}</span>
                            </div>
                            <div className="text-right">
                                <span>{education.startMonth}</span>
                                <span>
                                    {' '}
                                    {education.startYear}
                                </span>
                                <span>
                                    <span>
                                        {' '}
                                        -
                                        {' '}
                                        {education.endMonth}
                                        {' '}
                                        {education.endYear}
                                    </span>
                                </span>
                                {education.endYear > (new Date()).getFullYear() ? <div>(Expexted)</div> : <div />}
                            </div>
                        </div>
                        <div className="mb-1 italic">
                            <span>
                                {education.educationLevel}
                                {' '}
                            </span>
                            {education.description !== '' ? (
                                <span>
                                    in
                                    {' '}
                                    {education.description}
                                    ,
                                </span>
                            ) : ''}
                            <span>
                                {' '}
                                {education.gpa !== '' ? education.gpa : ''}
                            </span>
                            {education.max !== '' ? (
                                <span>
                                    /
                                    {education.max}
                                </span>
                            ) : ''}
                        </div>
                        <div className="px-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(education.achievment) }} />
                    </div>
                ))}
            </div>
            <div className="mb-2">
                {resumeState.currentResume.organizations.length > 0 ? <div className="font-semibold border-b border-black mb-1">Oragnisational Experience</div> : ''}
                {resumeState.currentResume.organizations.map((organization, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                            <div>
                                <span className="font-semibold">{organization.name}</span>
                                {' '}
                                -
                                {' '}
                                <span className="font-semibold text-gray-500">{organization.location}</span>
                            </div>
                            <div className="text-right">
                                <span>{organization.startMonth}</span>
                                <span>
                                    {' '}
                                    {organization.startYear}
                                </span>
                                <span>
                                    {organization.current === true ? ' - Present' : (
                                        <span>
                                            {' '}
                                            -
                                            {' '}
                                            {organization.endMonth}
                                            {' '}
                                            {organization.endYear}
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className="mb-1 italic">{organization.role}</div>
                        <div className="px-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(organization.description) }} />
                    </div>
                ))}
            </div>
            <div className="mb-2">
                {resumeState.currentResume.others.length > 0 ? <div className="font-semibold border-b border-black mb-1">Skills, Achievements, & Other Experience</div> : ''}
                <div>
                    {resumeState.currentResume.others.map((other, index) => (
                        <ul className="list-disc pl-4" key={index}>
                            <li>
                                <span className="font-semibold">{other.category}</span>
                                {other.year !== '' ? (
                                    <span>
                                        {' '}
                                        (
                                        {other.year}
                                        ):
                                    </span>
                                ) : ''}
                                <span>
                                    {' '}
                                    {other.elaboration}
                                </span>
                            </li>
                        </ul>
                    ))}
                </div>
            </div> */}
        </div>
    );
}

export default ResumeForShare;
