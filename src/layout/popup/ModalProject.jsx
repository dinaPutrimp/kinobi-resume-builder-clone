/* eslint-disable react/react-in-jsx-scope */
import { useContext, useRef } from "react";
import { updateProjectName } from "../../actions/resumeActions";
import { AuthContext } from "../../contexts/AuthContext";
import { FirebaseResumeContext } from "../../contexts/FirebaseResumeContext";

const Modal = () => {
    const { authState } = useContext(AuthContext);
    const { resumeState, dispatchResume } = useContext(FirebaseResumeContext);
    const ref = useRef(null);

    const handleChange = (e) => {
        dispatchResume({
            type: "UPDATE_TITLE_RESUME",
            payload: { value: e.target.value }
        })
    }

    const handleCloseModal = () => {
        dispatchResume({
            type: "TOGGLE_MODAL",
            payload: false
        })
        ref.current.value = ""
    }

    const handleTitleUpdate = async (resume) => {
        try {
            await updateProjectName(authState.user.uid, resume);
            dispatchResume({
                type: "UPDATE_FETCH_RESUME",
                payload: resume
            })
        } catch (err) {
            dispatchResume({
                type: "UPDATE_ERROR",
                payload: err.message
            })
        }
        dispatchResume({
            type: "TOGGLE_MODAL",
            payload: false
        })
        ref.current.value = ""
    }

    return (
        <div className={`${resumeState.modal ? "" : "hidden"} fixed inset-0 flex justify-center items-center text-center bg-modal`} onClick={handleCloseModal} >
            <div className="w-2/5 bg-white relative text-center p-6" onClick={(e) => e.stopPropagation()}>
                <i className="fa fa-times absolute top-4 right-4 text-xl cursor-pointer" onClick={handleCloseModal}></i>
                <p className="text-2xl mb-4">Give your resume a title</p>
                <div className="px-3 text-left">
                    <div className="mb-3">
                        <label htmlFor="projectName" className="text-base">Resume Title</label>
                        <input type="text" ref={ref} name="projectName" placeholder={resumeState.currentResume.projectName} className="block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900" onChange={handleChange} />
                    </div>
                    <p className="mb-3 text-base">Write down a meaningfull title for your resume</p>
                    <button onClick={() => handleTitleUpdate(resumeState.currentResume)} className="block w-full py-2 px-4 bg-blue-900 text-white rounded uppercase font-medium">save</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;