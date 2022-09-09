import { useContext } from "react";
import { Link } from "react-router-dom";
import { ResumeContext } from "../contexts/ResumeContext";


const PersonalInfoForm = () => {
    const { personalInfo, dispatch } = useContext(ResumeContext);

    const handleChange = (e) => {
        dispatch({
            type: "CHANGE_PERSONAL",
            payload: { name: e.target.name, value: e.target.value }
        });
    }

    return (
        <div className="p-3 shadow-t-side rounded-lg bg-white">
            <div className="p-1 md:px-5 md:py-2">
                <p className="font-semibold mb-6 text-lg">Fill In Your Personal Information</p>
                <span className="text-sm text-slate-800">Help recruiters to get in touch with you.</span>
            </div>
            <div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="name" className="block mb-2 text-xs">Name</label>
                    <input type="text" name="name" id="name" placeholder="e.g. Joshua Tay" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={personalInfo.name} onChange={handleChange} />
                </div>
                <div className="mb-4 grid gap-4 md:grid-cols-2 md:mb-6">
                    <div>
                        <label htmlFor="phone" className="block text-xs mb-2">Phone Number (Mobile)</label>
                        <input type="text" name="phone" id="phone" placeholder="+624717" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={personalInfo.phone} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="emal" className="block text-xs mb-2">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="joshua.tay@gmail.com" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={personalInfo.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="linkedin" className="block text-xs mb-2">Linkedin Profile</label>
                    <input type="text" name="linkedin" id="linkedin" placeholder="https://www.linkedin.com/in/joshua" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={personalInfo.linkedin} onChange={handleChange} />
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="portofolio" className="block text-xs mb-2">Portofolio/Website URL (Optional)</label>
                    <input type="text" name="portofolio" id="portofolio" placeholder="https://github.com/joshua-tay" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={personalInfo.portofolio} onChange={handleChange} />
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="address" className="block text-xs mb-2">Address (Optional)</label>
                    <input type="text" name="address" id="address" placeholder="Jl Kramat Jati, DKI Jakarta" className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={personalInfo.address} onChange={handleChange} />
                </div>
                <div className="mb-4 md:mb-6">
                    <label htmlFor="summary" className="block text-xs mb-2">Short description about yourself</label>
                    <textarea name="summary" id="summary" cols="30" rows="5" placeholder="Example: A fresh graduate in Information Systems, who has 2 years experiences as Software Engineer." className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" value={personalInfo.summary} onChange={handleChange}>{personalInfo.summary}</textarea>
                    <small className="text-xs">Recomended: 100 to 150 characters</small>
                </div>
                <div className="flex flex-col text-center">
                    <Link to='/experience' className="block w-full py-2 px-4 bg-blue-900 text-white rounded uppercase font-medium md:w-auto md:self-end">Save & Continue</Link>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfoForm;