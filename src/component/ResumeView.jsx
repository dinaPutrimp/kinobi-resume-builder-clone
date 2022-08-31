import { useContext } from "react";
import { ResumeContext } from "../contexts/ResumeContext";

const ResumeView = () => {
    // const { personalInfo, experiences } = useContext(ResumeContext);
    // console.log(personal);

    return (
        <div className="p-5 shadow-t-side rounded-lg bg-white">
            <div className="mb-3">
                <div className="text-3xl font-bold uppercase mb-2"></div>
                <div className="text-xs text-blue-500 underline-offsite-2">081380231866 | yeehsin1@gmail.com | https://twitter.com/home | https://twitter.com/home</div>
                <div className="text-xs text-gray-400 mb-1.5">Singapore</div>
                <div className="text-xs">
                    Michael Wong is a person who is interested in joining an organization to realize his passion for working together with people from diverse backgrounds. He has analytical skills, strategic thinking, and negotiation.
                </div>
            </div>
            <div className="mb-2">
                <div className="text-sm font-semibold border-b border-black mb-1">Work Experience</div>
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <div>
                            <span className="font-semibold text-xs">PT Karya Indonesia Cerdas</span> - <span className="font-semibold text-xs text-gray-500">DKI Jakarta, Indonesia</span>
                        </div>
                        <div className="text-xs">Mar 2019 - Present</div>
                    </div>
                    <div className="mb-1 text-xs italic">Frontend Web Developer</div>
                    <ul className="text-xs list-disc pl-4">
                        <li>President of the Student Ambassadors</li>
                        <li>Accelerated Leader, Accelerated Leaders’ Board</li>
                    </ul>
                </div>
            </div>
            <div className="mb-2">
                <div className="text-sm font-semibold border-b border-black mb-1">Education</div>
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <div>
                            <span className="font-semibold text-xs">National University of Singapore</span> - <span className="font-semibold text-xs text-gray-500">Singapore</span>
                        </div>
                        <div className="text-xs text-right">
                            <div>Mar 2019 - Jan 2023</div>
                            <div>(Expexted)</div>
                        </div>
                    </div>
                    <div className="mb-1 text-xs italic">Bachelor Degree in Finance, 3.70/4.00</div>
                    <ul className="text-xs list-disc pl-4">
                        <li>President of the Student Ambassadors</li>
                        <li>Accelerated Leader, Accelerated Leaders’ Board</li>
                    </ul>
                </div>
            </div>
            <div className="mb-2">
                <div className="text-sm font-semibold border-b border-black mb-1">Oragnisational Experience</div>
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <div>
                            <span className="font-semibold text-xs">Developer in Crime</span> - <span className="font-semibold text-xs text-gray-500">Singapore</span>
                        </div>
                        <div className="text-xs text-right">Mar 2019 - Present</div>
                    </div>
                    <div className="mb-1 text-xs italic">Fullstack Developer</div>
                    <ul className="text-xs list-disc pl-4">
                        <li>President of the Student Ambassadors</li>
                        <li>Accelerated Leader, Accelerated Leaders’ Board</li>
                    </ul>
                </div>
            </div>
            <div className="mb-2">
                <div className="text-sm font-semibold border-b border-black mb-1">Skills, Achievements, & Other Experience</div>
                <div>
                    <ul className="text-xs list-disc pl-4">
                        <li>
                            <span className="font-semibold">Class Project</span> (2022):
                            <span> Create business plan for cookies business, assignment from Introduction to Business module</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ResumeView;