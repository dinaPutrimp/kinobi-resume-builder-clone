import { useContext } from "react";
import { deleteResume } from "../../actions/resumeActions";
import { AuthContext } from "../../contexts/AuthContext";
import { FirebaseResumeContext } from "../../contexts/FirebaseResumeContext";

const ResumeDropdown = (props) => {
    const { authState } = useContext(AuthContext);
    const { resumeState, dispatchResume } = useContext(FirebaseResumeContext);

    const handleRename = (e) => {
        e.stopPropagation();
        e.preventDefault();
        props.close();
        dispatchResume({
            type: "FETCH_CURRENT_RESUME",
            payload: resumeState.resume.filter(resume => resume.id === props.id)[0]
        })
        dispatchResume({
            type: "TOGGLE_MODAL",
            payload: true
        })
    }

    const handleDownload = (e) => {
        e.stopPropagation();
        e.preventDefault();
        props.close();
        dispatchResume({
            type: "FETCH_CURRENT_RESUME",
            payload: resumeState.resume.filter(resume => resume.id === props.id)[0]
        })
        const docu = document.getElementById("resume");
        const option = {
            margin: 0.2,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(option).from(docu).save();
    }

    const handleDelete = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        props.close();
        try {
            await deleteResume(authState.user.uid, props.id)
            dispatchResume({
                type: "DELETE_RESUME",
                payload: props.id
            })
            dispatchResume({
                type: "FETCH_CURRENT_RESUME",
                payload: {}

            });
        } catch (err) {
            dispatchResume({
                type: "FETCH_ERROR",
                payload: err.message
            })
        }
    }


    return (
        <div className={`${props.id === props.toggleMenu.id && props.toggleMenu.toggle ? "flex" : "hidden"} flex-col w-32 h-fit rounded shadow-xl absolute -bottom-4 -right-8 bg-white z-10`}>
            <div className="flex py-2 px-3 justify-between items-center text-slate-600 mb-2 cursor-pointer hover:bg-sky-50" onClick={handleRename}>
                <i className="fa fa-edit"></i>
                <p className="text-sm">Rename</p>
            </div>
            <div className="flex py-2 px-3 justify-between items-center text-slate-600 mb-2 cursor-pointer hover:bg-sky-50" onClick={handleDownload}>
                <i className="fa fa-download"></i>
                <p className="text-sm">Download</p>
            </div>
            {/* <div className="flex py-2 px-3 justify-between items-center text-slate-600 mb-2 cursor-pointer hover:bg-sky-50">
                <i className="fa fa-share-alt"></i>
                <p className="text-sm">Share</p>
            </div> */}
            <div className="flex py-2 px-3 justify-between items-center text-slate-600 cursor-pointer hover:bg-sky-50" onClick={handleDelete}>
                <i className="fa fa-trash"></i>
                <p className="text-sm">Delete</p>
            </div>
        </div>
    );
}

export default ResumeDropdown;