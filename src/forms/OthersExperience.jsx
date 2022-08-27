const OthersExperience = () => {
    return (
        <div className="p-3 shadow-t-side rounded-lg bg-white">
            <div className="p-1 md:p-5 mb-2">
                <p className="font-semibold mb-4 text-lg">Others Experience</p>
                <small>Only write things that help you catch recruiters' eyes.</small>
            </div>
            <div className="border border-stone-200 rounded px-5 py-5 mb-4 md:px-8 md:mb-3">
                <div></div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="category" className="block text-xs mb-2">Category/Project/Activity</label>
                    <select name="category" id="category" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 overflow-y-scroll">
                        <option value=""></option>
                        <option value="Projects">Projects</option>
                        <option value="Modules Taken">Modules Taken</option>
                        <option value="Webinars Attended">Webinars Attended</option>
                        <option value="Soft Skills">Soft Skills</option>
                        <option value="Hard Skills">Hard Skills</option>
                        <option value="Interest">Interest</option>
                    </select>
                    <small className="text-xs italic">Write down the name/title if it indicates project/activity.</small>
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="year" className="block mb-2 text-xs">Year</label>
                    <select name="year" id="year" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900">
                        <option value=""></option>
                    </select>
                    <small className="text-xs italic">Only needed if you indicates projects</small>
                </div>
                <div>
                    <label htmlFor="elaboration" className="block mb-2 text-xs">Elaboration</label>
                    <input type="text" name="elaboration" id="elaboration" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" />
                </div>
            </div>
            <button className="block w-full border border-2 border-dashed border-blue-900 bg-white p-2 rounded mb-4 flex items-center hover:bg-blue-100 cursor-pointer">
                <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 fill-blue-900"><path d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero" /></svg>
                <span className="text-sm text-blue-900 font-semibold">Add experience</span>
            </button>
            <div className="flex flex-row justify-end mb-4">
                <button className="block w-auto py-1.5 px-4 bg-white border border-2 border-blue-900 text-blue-800 rounded uppercase font-medium self-end mr-3">Back</button>
                <button className="block w-auto py-2 px-4 bg-blue-900 text-white rounded uppercase font-medium">Save & Continue</button>
            </div>
        </div>
    );
}

export default OthersExperience;