/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResumeView from "../component/ResumeView";
import { AuthContext } from "../contexts/AuthContext";
import { FirebaseResumeContext } from "../contexts/FirebaseResumeContext";
import Modal from "./popup/ModalProject";
import ResumesTemplate from "./ResumesTemplate";
import UserResumes from "./UserResumes";

const Dashboard = () => {
    const { authState } = useContext(AuthContext);
    const { resumeState } = useContext(FirebaseResumeContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authState.user.uid) return navigate("/login");
    }, [authState.user.uid])

    const embeded = Object.keys(resumeState.currentResume).length ? <ResumeView /> : <></>;

    return (
        <div className="grid grid-rows-2 gap-4">
            <ResumesTemplate />
            <UserResumes />
            <Modal />
            <div className="hidden">
                {embeded}
            </div>
        </div>
    );
}

export default Dashboard;