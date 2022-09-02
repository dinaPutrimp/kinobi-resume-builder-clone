import DOMPurify from "isomorphic-dompurify";
import { useContext } from "react";
import { ResumeContext } from "../contexts/ResumeContext";
import { StepperContext } from "../contexts/StepperContext";

const ResumeView = () => {
    const { personalInfo, worksExperience, educationBackground, organizationsExperience, othersAchievement } = useContext(ResumeContext);
    const { pdfID } = useContext(StepperContext);

    return (
        <div className="shadow-t-side rounded-lg bg-white h-fit">
            <div id={pdfID} className="p-6">
                <div className="mb-3">
                    <div className="text-3xl font-bold uppercase mb-2">{personalInfo.name}</div>
                    <div className="text-xs text-blue-500 underline-offsite-2">
                        <span>{personalInfo.phone}</span>
                        <span>{personalInfo.email !== "" ? ` | ${personalInfo.email}` : ""}</span>
                        <span>{personalInfo.linkedin !== "" ? <a target="_blank" href={personalInfo.linkedin}> | {personalInfo.linkedin}</a> : ""}</span>
                        <span>{personalInfo.portofolio !== "" ? <a target="_blank" href={personalInfo.portofolio}> | {personalInfo.portofolio}</a> : ""}</span>
                    </div>
                    <div className="text-xs text-gray-400 mb-1.5">{personalInfo.address}</div>
                    <div className="text-xs">
                        {personalInfo.summary}
                    </div>
                </div>
                <div className="mb-2">
                    {worksExperience.length > 0 ? <div className="text-sm font-semibold border-b border-black mb-1">Work Experience</div> : ""}
                    {worksExperience.map((experience, index) => {
                        return (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-1">
                                    <div>
                                        <span className="font-semibold text-xs">{experience.company}</span> - <span className="font-semibold text-xs text-gray-500">{experience.companyLocation}</span>
                                    </div>
                                    <div className="text-xs">
                                        <span>{experience.startMonth}</span>
                                        <span> {experience.startYear}</span>
                                        <span>
                                            {experience.current === true ? " - Present" : <span> - {experience.endMonth} {experience.endYear}</span>}
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-1 text-xs italic">{experience.role}</div>
                                <div className="px-4 text-xs" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(experience.jobdesk) }}>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="mb-2">
                    {educationBackground.length > 0 ? <div className="text-sm font-semibold border-b border-black mb-1">Education</div> : ""}
                    {educationBackground.map((education, index) => {
                        return (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-1">
                                    <div>
                                        <span className="font-semibold text-xs">{education.school}</span> - <span className="font-semibold text-xs text-gray-500">{education.location}</span>
                                    </div>
                                    <div className="text-xs text-right">
                                        <span>{education.startMonth}</span>
                                        <span> {education.startYear}</span>
                                        <span>
                                            {<span> - {education.endMonth} {education.endYear}</span>}
                                        </span>
                                        {education.endYear > (new Date()).getFullYear() ? <div>(Expexted)</div> : <div></div>}
                                    </div>
                                </div>
                                <div className="mb-1 text-xs italic">
                                    <span>{education.educationLevel} </span>
                                    {education.description !== "" ? <span>in {education.description},</span> : ""}
                                    <span> {education.gpa !== "" ? education.gpa : ""}</span>
                                    {education.max !== "" ? <span>/{education.max}</span> : ""}
                                </div>
                                <div className="px-4 text-xs" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(education.achievment) }}>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="mb-2">
                    {organizationsExperience.length > 0 ? <div className="text-sm font-semibold border-b border-black mb-1">Oragnisational Experience</div> : ""}
                    {organizationsExperience.map((organization, index) => {
                        return (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-1">
                                    <div>
                                        <span className="font-semibold text-xs">{organization.name}</span> - <span className="font-semibold text-xs text-gray-500">{organization.location}</span>
                                    </div>
                                    <div className="text-xs text-right">
                                        <span>{organization.startMonth}</span>
                                        <span> {organization.startYear}</span>
                                        <span>
                                            {organization.current === true ? " - Present" : <span> - {organization.endMonth} {organization.endYear}</span>}
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-1 text-xs italic">{organization.role}</div>
                                <div className="px-4 text-xs" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(organization.description) }}>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="mb-2">
                    {othersAchievement.length > 0 ? <div className="text-sm font-semibold border-b border-black mb-1">Skills, Achievements, & Other Experience</div> : ""}
                    <div>
                        {othersAchievement.map((other, index) => {
                            return (
                                <ul className="text-xs list-disc pl-4" key={index}>
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