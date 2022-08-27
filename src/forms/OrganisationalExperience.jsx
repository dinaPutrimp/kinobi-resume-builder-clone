const OrganisationalExperience = () => {
    return (
        <div className="p-3 shadow-t-side rounded-lg bg-white">
            <div className="p-1 md:p-5 mb-2">
                <p className="font-semibold mb-4 text-lg">Organisational Experience</p>
                <small>Start with your most recent (newest) experiences.</small>
            </div>
            <div className="border border-stone-200 rounded px-5 py-5 mb-4 md:px-8 md:mb-3">
                <div></div>
                <div className="grid md:grid-cols-2 gap-4 mb-4 md:mb-6">
                    <div>
                        <label htmlFor="name" className="block text-xs mb-2">Organization/Event Name</label>
                        <input type="text" name="name" id="name" placeholder="SongKids" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-xs mb-2">Your Role/Position Name</label>
                        <input type="text" name="role" id="role" placeholder="Project Office; Head of PR" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" />
                    </div>
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="location" className="block text-xs mb-2">Activity/Event/Organization Location</label>
                    <input type="text" name="location" id="location" placeholder="New Delhi, India" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4 md:mb-6">
                    <div>
                        <label htmlFor="startMonth" className="block mb-2 text-xs">Start Date (Month)</label>
                        <select name="startMonth" id="startMonth" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 overflow-y-scroll">
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
                    <div>
                        <label htmlFor="startYear" className="block mb-2 text-xs">Start Date (Year)</label>
                        <select name="startYear" id="startYear" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900">
                            <option value=""></option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="endMonth" className="block mb-2 text-xs">End Date (Month)</label>
                        <select name="endMonth" id="endMonth" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 overflow-y-scroll">
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
                    <div>
                        <label htmlFor="endYear" className="block mb-2 text-xs">End Date (Year)</label>
                        <select name="endYear" id="endYear" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900">
                            <option value=""></option>
                        </select>
                    </div>
                </div>
                <div className="mb-4 md:mb-6 flex flex-wrap content-center">
                    <input type="checkbox" name="current" id="current" className="block border border-gray-400 mr-3" />
                    <label htmlFor="current" className="block text-sm self-center">I am currently working here</label>
                </div>
                <div>
                    <label htmlFor="description" className="block mb-2 text-xs">Description</label>
                    <input type="text" name="description" id="description" placeholder="." className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" />
                    <small className="block mb-2 text-xs italic">e.g. Supervised the club's first undergraduate mentoring initiative, impacting 30+ students</small>
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

export default OrganisationalExperience;