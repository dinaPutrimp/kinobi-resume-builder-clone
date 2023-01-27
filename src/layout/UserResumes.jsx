import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FirebaseResumeContext } from "../contexts/FirebaseResumeContext";
import ResumeDropdown from "./popup/ResumeDropdown";
import UpdatedDate from "./UpdatedDateTime";
import noData from "../assets/undraw_no_data.svg";


const UserResumes = () => {
    const { resumeState, dispatchResume } = useContext(FirebaseResumeContext);
    const [toggleMenu, setToggleMenu] = useState({
        id: "",
        toggle: false
    });

    const handleClick = (resume) => {
        dispatchResume({
            type: "FETCH_CURRENT_RESUME",
            payload: resume
        })
        dispatchResume({
            type: "TOGGLE_MODAL",
            payload: false
        })
    }

    const handleToggle = (e, resume) => {
        e.stopPropagation();
        e.preventDefault();
        dispatchResume({
            type: "FETCH_CURRENT_RESUME",
            payload: resume
        })
        setToggleMenu({
            id: resume.id,
            toggle: !toggleMenu.toggle
        });
    }

    return (
        <div className="p-6 max-w-full" onClick={() => setToggleMenu({ id: "", toggle: false })}>
            <p className="text-2xl font-medium">My Resume</p>
            {resumeState.resume.length > 0 ?
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {resumeState && resumeState.resume && resumeState.resume.map(resume => {
                        return (
                            <Link to={`/resume/${resume.id}`} onClick={() => handleClick(resume)} key={resume.id}>
                                <div className="bg-white w-44 p-2 h-fit relative">
                                    <div className="bg-white">
                                        <div className="flex justify-center bg-gray-100">
                                            <img src="https://img.freepik.com/free-vector/elegant-resume-template_1435-1245.jpg?t=st=1673445750~exp=1673446350~hmac=3ee4a1f73ca3a17c3a94f617298e12b9bdd4318b07fc88bfb6c422ad642efa05" className="w-full bg-cover bg-top" alt="" />
                                        </div>
                                        <div className="bg-slate-100 p-2 rounded flex justify-between">
                                            <div>
                                                <p className="font-medium text-zinc-800 text-sm mb-6">{resume.projectName}</p>
                                                <p className="text-xs text-gray-700 italic">
                                                    Updated <UpdatedDate date={resume.modifiedAt} /> ago
                                                </p>
                                            </div>
                                            <div className="w-8 h-8 hover:bg-zinc-200 flex justify-center items-center rounded-full" onClick={(e) => handleToggle(e, resume)}>
                                                <ul>
                                                    <li className="h-1 w-1 rounded-full bg-zinc-600"></li>
                                                    <li className="h-1 w-1 rounded-full my-px bg-zinc-600"></li>
                                                    <li className="h-1 w-1 rounded-full bg-zinc-600"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <ResumeDropdown key={resume.id} id={resume.id} toggleMenu={toggleMenu} close={() => setToggleMenu({ id: "", toggle: false })} />
                                </div>
                            </Link>
                        )
                    })
                    }
                </div>
                :
                <div className="grid place-items-center md:pt-6 pt-3">
                    <img src={noData} className="w-28 bg-violet-50 p-5" />
                    <p className="text-xl text-gray-300">no resume</p>
                </div>
            }
        </div>
    );
}

export default UserResumes;