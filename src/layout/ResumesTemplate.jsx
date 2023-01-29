/* eslint-disable no-prototype-builtins */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from "react-router-dom";
import addFileSvg from "../assets/undraw_add_files.svg";
import resumeSvg from "../assets/undraw_hiring.svg";
import { createNewResume } from "../actions/resumeActions";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FirebaseResumeContext } from "../contexts/FirebaseResumeContext";

const ResumesTemplate = () => {
    const { authState } = useContext(AuthContext);
    const { dispatchResume } = useContext(FirebaseResumeContext);
    const navigate = useNavigate();

    const handleBlankDocument = async () => {
        const newBlankResume = {
            projectName: `${authState.currentUser.firstName} ${authState.currentUser.lastName} resume`,
            personal: {
                name: `${authState.currentUser.firstName} ${authState.currentUser.lastName}`,
                phone: "",
                email: "",
                linkedin: "",
                portofolio: "",
                address: "",
                summary: "",
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
                    achievment: '<ul><li class=\\"list-disc\\">Lead team for web development project</li></ul>',
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
                    description: '<ul><li class=\\"list-disc\\">Lead team for web development project</li></ul>'
                }
            ],
            others: [
                {
                    category: '',
                    year: '',
                    elaboration: ''
                }
            ],
            createdAt: new Date(),
            modifiedAt: new Date()
        }
        try {
            const response = await createNewResume(authState.user.uid, newBlankResume);
            dispatchResume({
                type: "ADD_NEW_RESUME",
                payload: {
                    id: response,
                    ...newBlankResume
                }
            })
            dispatchResume({
                type: "FETCH_CURRENT_RESUME",
                payload: {
                    id: response,
                    ...newBlankResume
                }
            })
            navigate('/resume/' + response);
            dispatchResume({
                type: "TOGGLE_MODAL",
                payload: true
            })
        } catch (err) {
            dispatchResume({
                type: "CREATE_ERROR",
                payload: err.message
            })
        }
    }

    return (
        <div className="max-w-full p-6 bg-violet-100">
            <div className="flex flex-wrap grid-rows-1">
                <div className="border-2 border-dashed border-blue-500 text-center p-10 rounded md:mr-4 mb-6">
                    <div className="flex justify-center mb-10">
                        <img src={addFileSvg} className="w-32" alt="add_files_illustration" />
                    </div>
                    <button onClick={handleBlankDocument} className="uppercase font-medium tracking-wider bg-gray-300 text-blue-500 p-3">new blank</button>
                </div>
                <div className="flex justify-between items-center flex-wrap">
                    <div className="bg-white mb-2 md:mr-4 md:mb-0 w-44 p-2 h-fit">
                        <div className="bg-white">
                            <div className="p-3 flex justify-center bg-gray-100">
                                <img src={resumeSvg} className="w-28 z-0" alt="" />
                            </div>
                            <div className="bg-blue-900 p-2 rounded-br-2xl">
                                <p className="font-medium text-xs text-white mb-6">Advertising Resume</p>
                                <p className="text-xs text-white">Subscribe to any plan unlock</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white md:mr-4 w-44 p-2 h-fit">
                        <div className="bg-white">
                            <div className="p-3 flex justify-center bg-gray-100">
                                <img src={resumeSvg} className="w-28 z-0" alt="" />
                            </div>
                            <div className="bg-blue-900 p-2 rounded-br-2xl">
                                <p className="font-medium text-xs text-white mb-6">Advertising Resume</p>
                                <p className="text-xs text-white">Subscribe to any plan unlock</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white md:mr-4 w-44 p-2 h-fit">
                        <div className="bg-white">
                            <div className="p-3 flex justify-center bg-gray-100">
                                <img src={resumeSvg} className="w-28 z-0" alt="" />
                            </div>
                            <div className="bg-blue-900 p-2 rounded-br-2xl">
                                <p className="font-medium text-xs text-white mb-6">Advertising Resume</p>
                                <p className="text-xs text-white">Subscribe to any plan unlock</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white md:mr-4 w-44 p-2 h-fit">
                        <div className="bg-white">
                            <div className="p-3 flex justify-center bg-gray-100">
                                <img src={resumeSvg} className="w-28 z-0" alt="" />
                            </div>
                            <div className="bg-blue-900 p-2 rounded-br-2xl">
                                <p className="font-medium text-xs text-white mb-6">Advertising Resume</p>
                                <p className="text-xs text-white">Subscribe to any plan unlock</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ResumesTemplate;