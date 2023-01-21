import "./../App.css";
import { Outlet } from 'react-router-dom';
import Editor from "../component/Editor";
import ResumeView from "../component/ResumeView";
import StepBar from "../component/StepBar";
import DownloadButton from "../component/DownloadButton";
import Modal from "./popup/ModalProject";

const Resume = () => {
    return (
        <div>
            <div className="App max-w-full bg-violet-100 grid md:grid-cols-2 gap-4 mt-4">
                <div>
                    <StepBar />
                    <DownloadButton />
                    <Outlet />
                </div>
                <div>
                    <Editor />
                    <ResumeView />
                </div>
                <Modal />
            </div>
        </div>
    );
}

export default Resume;