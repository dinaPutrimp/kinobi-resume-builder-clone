import { useContext, useReducer } from "react";
import ContentEditable from "react-contenteditable";
import { Link } from "react-router-dom";
import { ResumeContext } from "../contexts/ResumeContext";

const Education = () => {
    const years = Array.from(new Array(40), (val, index) => (new Date()).getFullYear() - index);
    const { educationBackground, dispatch } = useContext(ResumeContext);

    const addEducation = () => {
        dispatch({
            type: "ADD_EDUCATION",
            payload: {
                education: {
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
                    achievment: '<ul><li class=\"list-disc\"></li></ul>',
                }
            }
        });
    }

    const handleChange = (e, idx) => {
        dispatch({
            type: "CHANGE_EDUCATION",
            payload: { name: e.target.name, value: e.target.value, index: idx }
        })
    }

    const handleChangeContent = (e, idx) => {
        dispatch({
            type: "CHANGE_JOBS",
            payload: { name: "achievment", value: e.target.value, index: idx }
        })
    }

    return (
        <div className="p-3 shadow-t-side rounded-lg bg-white">
            <div className="p-1 md:p-5 mb-4">
                <p className="font-semibold mb-4 text-lg">Education</p>
                <small className="mb-2">Start with your most recent education.</small>
                <div>
                    <label className="flex items-center text-base text-gray-500">
                        <input type="checkbox" name="switch" id="switch" className="appearance-none peer" />
                        <span className="w-9 h-4 flex items-center flex-shrink-0 ml-0 bg-gray-300 rounded-full after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:hover:ring-8 after:hover:ring-stone-400/40 peer-checked:bg-blue-400 peer-checked:after:bg-blue-700 duration-300 peer-checked:after:hover:ring-blue-500/50 ease-in-out after:duration-300 peer-checked:after:translate-x-4 mr-4"></span>
                        Switch to First Section
                    </label>
                </div>
            </div>
            <div className="accordion" id="accordionCard">
                {educationBackground.map((education, index) => {
                    return (
                        <div key={index} className="accordion-item shadow bg-white mb-4 md:px-4 md:mb-3" id={`heading${index}`}>
                            <label className="flex items-center justify-between accordion-button py-4 px-5" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                <div className="flex items-center">
                                    <div className="mr-2">- {education.school}</div>
                                    <svg className="fill-red-500 cursor-pointer" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" onClick={() => dispatch({ type: "REMOVE_FORM", payload: { index: index } })}><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z" /></svg>
                                </div>
                            </label>
                            <div className="accordion-collapse collapse show" id={`collapse${index}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionCard">
                                <div className="accordion-body py-4 px-5">
                                    <div className="mb-4 mt-4 md:mt-4 md:mb-6">
                                        <label htmlFor="school" className="block text-xs mb-2">School (University) Name</label>
                                        <input type="text" name="school" id="school" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={education.school} onChange={(e) => handleChange(e, index)} />
                                    </div>
                                    <div className="mb-4 mt-4 md:mt-4 md:mb-6">
                                        <label htmlFor="location" className="block text-xs mb-2">School Location (City, Country)</label>
                                        <input type="text" name="location" id="location" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={education.location} onChange={(e) => handleChange(e, index)} />
                                    </div>
                                    <div className="grid md:grid-cols-2 mb-4 mt-4 md:mt-4 md:mb-6 md:gap-4">
                                        <div className="mb-4 md:mb-0">
                                            <label htmlFor="startMonth" className="block mb-2 text-xs">Start Date (Month)</label>
                                            <select name="startMonth" id="startMonth" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 overflow-y-scroll" value={education.startMonth} onChange={(e) => handleChange(e, index)}>
                                                <option value=""></option>
                                                <option value="Jan">Jan</option>
                                                <option value="Feb">Feb</option>
                                                <option value="Mar">Mar</option>
                                                <option value="Apr">Apr</option>
                                                <option value="May">May</option>
                                                <option value="Jun">Jun</option>
                                                <option value="Jul">Jul</option>
                                                <option value="Aug">Aug</option>
                                                <option value="Sep">Sep</option>
                                                <option value="Oct">Oct</option>
                                                <option value="Nov">Nov</option>
                                                <option value="Des">Des</option>
                                            </select>
                                        </div>
                                        <div className="mb-4 md:mb-0">
                                            <label htmlFor="startYear" className="block mb-2 text-xs">Start Date (Year)</label>
                                            <select name="startYear" id="startYear" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={education.startYear} onChange={(e) => handleChange(e, index)}>
                                                <option value=""></option>
                                                <option value="">{(new Date()).getFullYear() + 3}</option>
                                                <option value="">{(new Date()).getFullYear() + 2}</option>
                                                <option value="">{(new Date()).getFullYear() + 1}</option>
                                                {years.map((year, idx) => {
                                                    return <option key={idx} value={year}>{year}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="mb-4 md:mb-0">
                                            <label htmlFor="endMonth" className="block mb-2 text-xs">End Date (Month)</label>
                                            <select name="endMonth" id="endMonth" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 overflow-y-scroll" value={education.endMonth} onChange={(e) => handleChange(e, index)}>
                                                <option value=""></option>
                                                <option value="Jan">Jan</option>
                                                <option value="Feb">Feb</option>
                                                <option value="Mar">Mar</option>
                                                <option value="Apr">Apr</option>
                                                <option value="May">May</option>
                                                <option value="Jun">Jun</option>
                                                <option value="Jul">Jul</option>
                                                <option value="Aug">Aug</option>
                                                <option value="Sep">Sep</option>
                                                <option value="Oct">Oct</option>
                                                <option value="Nov">Nov</option>
                                                <option value="Des">Des</option>
                                            </select>
                                        </div>
                                        <div className="mb-4 md:mb-0">
                                            <label htmlFor="endYear" className="block mb-2 text-xs">End Date (Year)</label>
                                            <select name="endYear" id="endYear" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={education.endYear} onChange={(e) => handleChange(e, index)}>
                                                <option value=""></option>
                                                <option value={(new Date()).getFullYear() + 3}>{(new Date()).getFullYear() + 3}</option>
                                                <option value={(new Date()).getFullYear() + 2}>{(new Date()).getFullYear() + 2}</option>
                                                <option value={(new Date()).getFullYear() + 1}>{(new Date()).getFullYear() + 1}</option>
                                                {years.map((year, idx) => {
                                                    return <option key={idx} value={year}>{year}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="mb-4 md:mb-0">
                                            <label htmlFor="educationLevel" className="block mb-2 text-xs">Education Level</label>
                                            <select name="educationLevel" id="educationLevel" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 overflow-y-scroll" value={education.educationLevel} onChange={(e) => handleChange(e, index)}>
                                                <option value=""></option>
                                                <option value="Associate">Associate</option>
                                                <option value="Bachelor">Bachelor</option>
                                                <option value="Masters">Masters</option>
                                                <option value="Ph.D">Ph.D</option>
                                                <option value="Diploma">Diploma</option>
                                                <option value="Undergraduate">Undergraduate</option>
                                                <option value="High School Diploma">High School Diploma</option>
                                                <option value="GCE O-Level">GCE O-Level</option>
                                                <option value="GCE N-Level">GCE N-Level</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="description" className="block mb-2 text-xs">Description</label>
                                            <input type="text" name="description" id="description" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={education.description} onChange={(e) => handleChange(e, index)} />
                                        </div>
                                    </div>
                                    <div className="mb-4 mt-4 md:mt-4 md:mb-6">
                                        <label htmlFor="gpa" className="block mb-2 text-xs">GPA (Optional but Strongly Recomended)</label>
                                        <input type="number" name="gpa" id="gpa" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={education.gpa} onChange={(e) => handleChange(e, index)} />
                                    </div>
                                    <div className="mb-4 mt-4 md:mt-4 md:mb-6">
                                        <label htmlFor="max" className="block mb-2 text-xs">Max GPA</label>
                                        <input type="text" name="max" id="max" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={education.max} onChange={(e) => handleChange(e, index)} />
                                    </div>
                                    <div>
                                        <label htmlFor="achievment" className="block mb-2 text-xs">Elaboration and Achievment</label>
                                        <ContentEditable
                                            className="block w-full py-2 px-8 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 font-sans text-base font-normal"
                                            tagName="ul"
                                            html={education.achievment} // innerHTML of the editable div
                                            disabled={false} // use true to disable edition
                                            onChange={(e) => handleChangeContent(e, index)} // handle innerHTML change
                                        />
                                        <small className="italic">e.g. Appointed the head of AIESEC Business Immersion Program, Impacting 20+ US/EU students.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className="block w-full border border-2 border-dashed border-blue-900 bg-white p-2 rounded mb-4 flex items-center hover:bg-blue-100 cursor-pointer" onClick={addEducation}>
                <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 fill-blue-900"><path d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero" /></svg>
                <span className="text-sm text-blue-900 font-semibold">Add experience</span>
            </button>
            <div className="flex flex-row justify-end mb-4">
                <Link to='/experience' className="block w-auto py-1.5 px-4 bg-white border border-2 border-blue-900 text-blue-800 rounded uppercase font-medium self-end mr-3">Back</Link>
                <Link to='/organisational' className="block w-auto py-2 px-4 bg-blue-900 text-white rounded uppercase font-medium">Save & Continue</Link>
            </div>
        </div>
    );
}

export default Education;