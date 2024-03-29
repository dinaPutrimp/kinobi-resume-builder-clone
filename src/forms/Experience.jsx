/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
import { useRef, useContext } from 'react';
import ContentEditable from 'react-contenteditable';
import { Link } from 'react-router-dom';
import { ResumeContext } from '../contexts/ResumeContext';

function Experience() {
    const years = Array.from(new Array(40), (_, index) => (new Date()).getFullYear() - index);
    const { worksExperience, dispatch } = useContext(ResumeContext);
    const dragCardIndex = useRef();
    const dragOverCardIndex = useRef();

    const addExperience = () => {
        dispatch({
            type: 'ADD_EXPERIENCE',
            payload: {
                experience: {
                    company: '',
                    role: '',
                    companyLocation: '',
                    description: '',
                    startMonth: '',
                    startYear: '',
                    endMonth: '',
                    endYear: '',
                    current: false,
                    jobdesk: '<ul><li class=\\"list-disc\\"></li></ul>',
                },
            },
        });
    };

    const handleChange = (e, idx) => {
        dispatch({
            type: 'CHANGE_EXPERIENCE',
            payload: { name: e.target.name, value: e.target.value, index: idx },
        });
    };

    const handleChangeContent = (e, idx) => {
        dispatch({
            type: 'CHANGE_JOBS',
            payload: { name: 'jobdesk', value: e.target.value, index: idx },
        });
    };

    const handleDragStart = (e, idx) => {
        // e.stopPropagation();
        dragCardIndex.current = idx;
    };

    const handleDragEnter = (e, idx) => {
        dragOverCardIndex.current = idx;
    };

    const handleDropCard = (e) => {
        const listOfCards = [...worksExperience];
        const theDragTarget = listOfCards[dragCardIndex.current];
        listOfCards.splice(dragCardIndex.current, 1);
        listOfCards.splice(dragOverCardIndex.current, 0, theDragTarget);
        dragCardIndex.current = null;
        dragOverCardIndex.current = null;
        dispatch({
            type: 'DRAG_AND_DROP_CARD_EXPERIENCE',
            payload: listOfCards,
        });
    };

    return (
        <div className="p-3 shadow-t-side rounded-lg bg-white">
            <div>
                <div className="p-1 md:p-5 mb-4">
                    <p className="font-semibold mb-6 text-lg">Work Experience</p>
                    <small>Start with your most recent (newest) experiences.</small>
                </div>
                <div className="accordion" id="accordionCard">
                    {worksExperience && worksExperience.map((experience, index) => (
                        <div key={index} className="accordion-item shadow bg-white mb-4 md:px-4 md:mb-3" id={`heading${index}`} onDragStart={(e) => handleDragStart(e, index)} onDragEnter={(e) => handleDragEnter(e, index)} onDragEnd={handleDropCard} draggable>
                            <label className="flex items-center justify-between accordion-button py-4 px-5" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                <div className="flex items-center">
                                    <span className="mr-2">
                                        {experience.role}
                                        {' '}
                                        -
                                        {' '}
                                        {experience.company}
                                    </span>
                                    <i className="fa fa-trash text-xl text-red-500 cursor-pointer" onClick={() => dispatch({ type: 'REMOVE_FORM_EXPERIENCE', payload: { index } })} />
                                </div>
                            </label>
                            <div className="accordion-collapse collapse show" id={`collapse${index}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionCard">
                                <div className="accordion-body py-4 px-5">
                                    <div className="mb-4 mt-4 md:mt-4 md:mb-6 grid md:grid-cols-2 md:gap-4">
                                        <div className="mb-4 md:mb-0">
                                            <label htmlFor="company" className="block mb-2 text-xs">Company Name</label>
                                            <input type="text" name="company" id="company" placeholder="Kinobi" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={experience.company} onChange={(e) => handleChange(e, index)} />
                                        </div>
                                        <div>
                                            <label htmlFor="role" className="block mb-2 text-xs">Job/Internship/Role Title</label>
                                            <input type="text" name="role" id="role" placeholder="Customer Success Manager" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={experience.role} onChange={(e) => handleChange(e, index)} />
                                        </div>
                                    </div>
                                    <div className="mb-4 md:mb-6">
                                        <label htmlFor="companyLocation" className="block mb-2 text-xs">Company Location (City, Country)</label>
                                        <input type="text" name="companyLocation" id="companyLocation" placeholder="New Delhi, India" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={experience.companyLocation} onChange={(e) => handleChange(e, index)} />
                                    </div>
                                    <div className="mb-4 md:mb-6">
                                        <label htmlFor="description" className="block mb-2 text-xs">Company Description (Optional)</label>
                                        <textarea name="description" id="description" cols="30" rows="5" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={experience.description} onChange={(e) => handleChange(e, index)}>{experience.description}</textarea>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4 mb-4 md:mb-6">
                                        <div>
                                            <label htmlFor="startMonth" className="block mb-2 text-xs">Start Date (Month)</label>
                                            <select
                                                name="startMonth"
                                                id="startMonth"
                                                className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 overflow-y-scroll"
                                                value={experience.startMonth}
                                                onChange={(e) => handleChange(e, index)}
                                            >
                                                <option value="" />
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
                                        <div>
                                            <label htmlFor="startYear" className="block mb-2 text-xs">Start Date (Year)</label>
                                            <select
                                                name="startYear"
                                                id="startYear"
                                                className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                                                value={experience.startYear}
                                                onChange={(e) => handleChange(e, index)}
                                            >
                                                <option value="" />
                                                {years.map((year, idx) => <option key={idx} value={year}>{year}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="endMonth" className="block mb-2 text-xs">End Date (Month)</label>
                                            <select
                                                name="endMonth"
                                                id="endMonth"
                                                className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 overflow-y-scroll"
                                                disabled={experience.current}
                                                value={experience.endMonth}
                                                onChange={(e) => handleChange(e, index)}
                                            >
                                                <option value="" />
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
                                        <div>
                                            <label htmlFor="endYear" className="block mb-2 text-xs">End Date (Year)</label>
                                            <select
                                                name="endYear"
                                                id="endYear"
                                                className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                                                disabled={experience.current}
                                                value={experience.endYear}
                                                onChange={(e) => handleChange(e, index)}
                                            >
                                                <option value="" />
                                                {years.map((year, idx) => <option key={idx} value={year}>{year}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-4 md:mb-6 flex flex-wrap content-center">
                                        <input type="checkbox" value={experience.current} name="current" id="current" className="block border border-gray-400 mr-3" onChange={(e) => handleChange(e, index)} />
                                        <label htmlFor="current" className="block text-sm self-center">I am currently working here</label>
                                    </div>
                                    <div>
                                        <label htmlFor="jobdesk" className="block mb-2 text-xs">Work Portofolio and Achievments</label>
                                        <ContentEditable
                                            className="block w-full py-2 px-8 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 font-sans text-base font-normal"
                                            tagName="ul"
                                            html={experience.jobdesk} // innerHTML of the editable div
                                            disabled={false} // use true to disable edition
                                            onChange={(e) => handleChangeContent(e, index)}
                                        />
                                        <small className="block mb-2 text-xs italic">e.g. Led a mentoring sohort spanning more than 200 individuals in span of less then</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="w-full border-2 border-dashed border-blue-900 bg-white p-2 rounded mb-4 flex items-center hover:bg-blue-100 cursor-pointer"
                onClick={addExperience}
            >
                <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 fill-blue-900"><path d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero" /></svg>
                <span className="text-sm text-blue-900 font-semibold">Add experience</span>
            </button>
            <div className="flex flex-row justify-end mb-4">
                <Link to="/" className="block w-auto py-1.5 px-4 bg-white border-2 border-blue-900 text-blue-800 rounded uppercase font-medium self-end mr-3">Back</Link>
                <Link to="/education" className="block w-auto py-2 px-4 bg-blue-900 text-white rounded uppercase font-medium">Save & Continue</Link>
            </div>
        </div>
    );
}

export default Experience;
