/* eslint-disable react/react-in-jsx-scope */
import DOMPurify from "isomorphic-dompurify";
import { useContext } from "react";
import { EditorContext } from "../contexts/EditorContext";
import { FirebaseResumeContext } from "../contexts/FirebaseResumeContext";
import { StepperContext } from "../contexts/StepperContext";

const ResumeView = () => {
    const { editorState } = useContext(EditorContext);
    const { resumeState } = useContext(FirebaseResumeContext);
    const { pdfID } = useContext(StepperContext);

    return (
        <div className={`shadow-t-side rounded-lg bg-white h-fit ${editorState.fontFamily} ${editorState.textAlign} hidden md:block p-6`}>
            <div id={pdfID}>
                <div className="mb-3">
                    <div className="text-3xl font-bold uppercase mb-2">{resumeState.currentResume.personal.name}</div>
                    <div className={`${editorState.fontSize} text-blue-500 underline-offsite-2`} style={{ lineHeight: `${editorState.lineHeight}px` }}>
                        <span>{resumeState.currentResume.personal.phone}</span>
                        <span>{resumeState.currentResume.personal.email !== "" ? ` | ${resumeState.currentResume.personal.email}` : ""}</span>
                        <span>{resumeState.currentResume.personal.linkedin !== "" ? <a target="_blank" href={resumeState.currentResume.personal.linkedin} rel="noreferrer"> | {resumeState.currentResume.personal.linkedin}</a> : ""}</span>
                        <span>{resumeState.currentResume.personal.portofolio !== "" ? <a target="_blank" href={resumeState.currentResume.personal.portofolio} rel="noreferrer"> | {resumeState.currentResume.personal.portofolio}</a> : ""}</span>
                    </div>
                    <div className={`${editorState.fontSize} text-gray-400 mb-1.5`} style={{ lineHeight: `${editorState.lineHeight}px` }}>{resumeState.currentResume.personal.address}</div>
                    <div className={editorState.fontSize} style={{ lineHeight: `${editorState.lineHeight}px` }}>
                        {resumeState.currentResume.personal.summary}
                    </div>
                </div>
                <div className="mb-2">
                    {resumeState.currentResume.experiences.length > 0 ? <div className={`${editorState.fontSize === "text-sm" ? "text-base" : (editorState.fontSize === "text-base") ? "text-lg" : "text-xs"} font-semibold border-b border-black mb-1`}>Work Experience</div> : ""}
                    {resumeState.currentResume.experiences.map((experience, index) => {
                        return (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-1">
                                    <div style={{ lineHeight: `${editorState.lineHeight}px` }}>
                                        <span className={`${editorState.fontSize} font-semibold`}>{experience.company}</span> - <span className={`${editorState.fontSize} font-semibold text-gray-500`}>{experience.companyLocation}</span>
                                    </div>
                                    <div className={editorState.fontSize} style={{ lineHeight: `${editorState.lineHeight}px` }}>
                                        <span>{experience.startMonth}</span>
                                        <span> {experience.startYear}</span>
                                        <span>
                                            {experience.current === true ? " - Present" : <span> - {experience.endMonth} {experience.endYear}</span>}
                                        </span>
                                    </div>
                                </div>
                                <div className={`${editorState.fontSize} mb-1 italic`} style={{ lineHeight: `${editorState.lineHeight}px` }}>{experience.role}</div>
                                <div className={`${editorState.fontSize} px-4`} style={{ lineHeight: `${editorState.lineHeight}px` }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(experience.jobdesk) }}>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="mb-2">
                    {resumeState.currentResume.educations.length > 0 ? <div className={`${editorState.fontSize === "text-sm" ? "text-base" : (editorState.fontSize === "text-base") ? "text-lg" : "text-xs"} font-semibold border-b border-black mb-1`}>Education</div> : ""}
                    {resumeState.currentResume.educations.map((education, index) => {
                        return (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-1">
                                    <div style={{ lineHeight: `${editorState.lineHeight}px` }}>
                                        <span className={`${editorState.fontSize} font-semibold`}>{education.school}</span> - <span className={`${editorState.fontSize} font-semibold text-gray-500`}>{education.location}</span>
                                    </div>
                                    <div className={`${editorState.fontSize} text-right`} style={{ lineHeight: `${editorState.lineHeight}px` }}>
                                        <span>{education.startMonth}</span>
                                        <span> {education.startYear}</span>
                                        <span>
                                            {<span> - {education.endMonth} {education.endYear}</span>}
                                        </span>
                                        {education.endYear > (new Date()).getFullYear() ? <div>(Expexted)</div> : <div></div>}
                                    </div>
                                </div>
                                <div className={`${editorState.fontSize} mb-1 italic`} style={{ lineHeight: `${editorState.lineHeight}px` }}>
                                    <span>{education.educationLevel} </span>
                                    {education.description !== "" ? <span>in {education.description},</span> : ""}
                                    <span> {education.gpa !== "" ? education.gpa : ""}</span>
                                    {education.max !== "" ? <span>/{education.max}</span> : ""}
                                </div>
                                <div className={`${editorState.fontSize} px-4`} style={{ lineHeight: `${editorState.lineHeight}px` }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(education.achievment) }}>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="mb-2">
                    {resumeState.currentResume.organizations.length > 0 ? <div className={`${editorState.fontSize === "text-sm" ? "text-base" : (editorState.fontSize === "text-base") ? "text-lg" : "text-xs"} font-semibold border-b border-black mb-1`}>Oragnisational Experience</div> : ""}
                    {resumeState.currentResume.organizations.map((organization, index) => {
                        return (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-1">
                                    <div style={{ lineHeight: `${editorState.lineHeight}px` }}>
                                        <span className={`${editorState.fontSize} font-semibold`}>{organization.name}</span> - <span className={`${editorState.fontSize} font-semibold text-gray-500`}>{organization.location}</span>
                                    </div>
                                    <div className={`${editorState.fontSize} text-right`} style={{ lineHeight: `${editorState.lineHeight}px` }}>
                                        <span>{organization.startMonth}</span>
                                        <span> {organization.startYear}</span>
                                        <span>
                                            {organization.current === true ? " - Present" : <span> - {organization.endMonth} {organization.endYear}</span>}
                                        </span>
                                    </div>
                                </div>
                                <div className={`${editorState.fontSize} mb-1 italic`} style={{ lineHeight: `${editorState.lineHeight}px` }}>{organization.role}</div>
                                <div className={`${editorState.fontSize} px-4`} style={{ lineHeight: `${editorState.lineHeight}px` }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(organization.description) }}>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="mb-2">
                    {resumeState.currentResume.others.length > 0 ? <div className={`${editorState.fontSize === "text-sm" ? "text-base" : (editorState.fontSize === "text-base") ? "text-lg" : "text-xs"} font-semibold border-b border-black mb-1`}>Skills, Achievements, & Other Experience</div> : ""}
                    <div>
                        {resumeState.currentResume.others.map((other, index) => {
                            return (
                                <ul className={`${editorState.fontSize} list-disc pl-4`} key={index} style={{ lineHeight: `${editorState.lineHeight}px` }}>
                                    <li>
                                        <span className="font-semibold">{other.category}</span>
                                        {other.year !== "" ? <span> ({other.year}):</span> : ""}
                                        <span> {other.elaboration}</span>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumeView;