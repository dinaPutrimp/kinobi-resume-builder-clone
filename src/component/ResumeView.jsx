import DOMPurify from "isomorphic-dompurify";
import { useContext } from "react";
import { ResumeContext } from "../contexts/ResumeContext";
import { StepperContext } from "../contexts/StepperContext";

const ResumeView = () => {
    const { personalInfo, worksExperience, educationBackground, organizationsExperience, othersAchievement, editor } = useContext(ResumeContext);
    const { pdfID } = useContext(StepperContext);

    return (
        <div className={`shadow-t-side rounded-lg bg-white h-fit ${editor.fontFamily} ${editor.textAlign} hidden md:block`}>
            <div id={pdfID} className="p-6">
                <div className="mb-3">
                    <div className="text-3xl font-bold uppercase mb-2">{personalInfo.name}</div>
                    <div className={`${editor.fontSize} text-blue-500 underline-offsite-2`} style={{ lineHeight: `${editor.lineHeight}px` }}>
                        <span>{personalInfo.phone}</span>
                        <span>{personalInfo.email !== "" ? ` | ${personalInfo.email}` : ""}</span>
                        <span>{personalInfo.linkedin !== "" ? <a target="_blank" href={personalInfo.linkedin}> | {personalInfo.linkedin}</a> : ""}</span>
                        <span>{personalInfo.portofolio !== "" ? <a target="_blank" href={personalInfo.portofolio}> | {personalInfo.portofolio}</a> : ""}</span>
                    </div>
                    <div className={`${editor.fontSize} text-gray-400 mb-1.5`} style={{ lineHeight: `${editor.lineHeight}px` }}>{personalInfo.address}</div>
                    <div className={editor.fontSize} style={{ lineHeight: `${editor.lineHeight}px` }}>
                        {personalInfo.summary}
                    </div>
                </div>
                <div className="mb-2">
                    {worksExperience.length > 0 ? <div className={`${editor.fontSize === "text-sm" ? "text-base" : (editor.fontSize === "text-base") ? "text-lg" : "text-xs"} font-semibold border-b border-black mb-1`}>Work Experience</div> : ""}
                    {worksExperience.map((experience, index) => {
                        return (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-1">
                                    <div style={{ lineHeight: `${editor.lineHeight}px` }}>
                                        <span className={`${editor.fontSize} font-semibold`}>{experience.company}</span> - <span className={`${editor.fontSize} font-semibold text-gray-500`}>{experience.companyLocation}</span>
                                    </div>
                                    <div className={editor.fontSize} style={{ lineHeight: `${editor.lineHeight}px` }}>
                                        <span>{experience.startMonth}</span>
                                        <span> {experience.startYear}</span>
                                        <span>
                                            {experience.current === true ? " - Present" : <span> - {experience.endMonth} {experience.endYear}</span>}
                                        </span>
                                    </div>
                                </div>
                                <div className={`${editor.fontSize} mb-1 italic`} style={{ lineHeight: `${editor.lineHeight}px` }}>{experience.role}</div>
                                <div className={`${editor.fontSize} px-4`} style={{ lineHeight: `${editor.lineHeight}px` }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(experience.jobdesk) }}>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="mb-2">
                    {educationBackground.length > 0 ? <div className={`${editor.fontSize === "text-sm" ? "text-base" : (editor.fontSize === "text-base") ? "text-lg" : "text-xs"} font-semibold border-b border-black mb-1`}>Education</div> : ""}
                    {educationBackground.map((education, index) => {
                        return (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-1">
                                    <div style={{ lineHeight: `${editor.lineHeight}px` }}>
                                        <span className={`${editor.fontSize} font-semibold`}>{education.school}</span> - <span className={`${editor.fontSize} font-semibold text-gray-500`}>{education.location}</span>
                                    </div>
                                    <div className={`${editor.fontSize} text-right`} style={{ lineHeight: `${editor.lineHeight}px` }}>
                                        <span>{education.startMonth}</span>
                                        <span> {education.startYear}</span>
                                        <span>
                                            {<span> - {education.endMonth} {education.endYear}</span>}
                                        </span>
                                        {education.endYear > (new Date()).getFullYear() ? <div>(Expexted)</div> : <div></div>}
                                    </div>
                                </div>
                                <div className={`${editor.fontSize} mb-1 italic`} style={{ lineHeight: `${editor.lineHeight}px` }}>
                                    <span>{education.educationLevel} </span>
                                    {education.description !== "" ? <span>in {education.description},</span> : ""}
                                    <span> {education.gpa !== "" ? education.gpa : ""}</span>
                                    {education.max !== "" ? <span>/{education.max}</span> : ""}
                                </div>
                                <div className={`${editor.fontSize} px-4`} style={{ lineHeight: `${editor.lineHeight}px` }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(education.achievment) }}>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="mb-2">
                    {organizationsExperience.length > 0 ? <div className={`${editor.fontSize === "text-sm" ? "text-base" : (editor.fontSize === "text-base") ? "text-lg" : "text-xs"} font-semibold border-b border-black mb-1`}>Oragnisational Experience</div> : ""}
                    {organizationsExperience.map((organization, index) => {
                        return (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-1">
                                    <div style={{ lineHeight: `${editor.lineHeight}px` }}>
                                        <span className={`${editor.fontSize} font-semibold`}>{organization.name}</span> - <span className={`${editor.fontSize} font-semibold text-gray-500`}>{organization.location}</span>
                                    </div>
                                    <div className={`${editor.fontSize} text-right`} style={{ lineHeight: `${editor.lineHeight}px` }}>
                                        <span>{organization.startMonth}</span>
                                        <span> {organization.startYear}</span>
                                        <span>
                                            {organization.current === true ? " - Present" : <span> - {organization.endMonth} {organization.endYear}</span>}
                                        </span>
                                    </div>
                                </div>
                                <div className={`${editor.fontSize} mb-1 italic`} style={{ lineHeight: `${editor.lineHeight}px` }}>{organization.role}</div>
                                <div className={`${editor.fontSize} px-4`} style={{ lineHeight: `${editor.lineHeight}px` }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(organization.description) }}>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="mb-2">
                    {othersAchievement.length > 0 ? <div className={`${editor.fontSize === "text-sm" ? "text-base" : (editor.fontSize === "text-base") ? "text-lg" : "text-xs"} font-semibold border-b border-black mb-1`}>Skills, Achievements, & Other Experience</div> : ""}
                    <div>
                        {othersAchievement.map((other, index) => {
                            return (
                                <ul className={`${editor.fontSize} list-disc pl-4`} key={index} style={{ lineHeight: `${editor.lineHeight}px` }}>
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