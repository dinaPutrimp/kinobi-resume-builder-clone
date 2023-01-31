/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { updateCompleteData } from '../../actions/resumeActions';
import { AuthContext } from '../../contexts/AuthContext';
import { FirebaseResumeContext } from '../../contexts/FirebaseResumeContext';
import { StepperContext } from '../../contexts/StepperContext';

function Complete() {
    const location = useLocation();
    const { authState } = useContext(AuthContext);
    const { resumeState, dispatchResume } = useContext(FirebaseResumeContext);
    const { pdfID } = useContext(StepperContext);
    const generatePDF = async (resume) => {
        try {
            await updateCompleteData(authState.user.uid, resume);
            dispatchResume({
                type: 'UPDATE_FETCH_RESUME',
                payload: resume,
            });
        } catch (err) {
            dispatchResume({
                type: 'UPDATE_ERROR',
                payload: err.message,
            });
        }
        const element = document.getElementById(pdfID);
        html2pdf().from(element).save();
    };

    return (
        <div className="p-3 shadow-t-side rounded-lg bg-white">
            <div className="h-40 bg-white" />
            <div className="flex flex-row justify-end mb-4">
                <Link to={`/resume/${location.pathname.split('/').at(2)}/others`} className="block w-auto py-1.5 px-4 bg-white border-2 border-blue-900 text-blue-800 rounded uppercase font-medium self-end mr-3">Back</Link>
                <button className="block w-auto py-2 px-4 bg-blue-900 text-white rounded uppercase font-medium" onClick={() => generatePDF(resumeState.currentResume)}>Complete & Download</button>
            </div>
        </div>
    );
}

export default Complete;
