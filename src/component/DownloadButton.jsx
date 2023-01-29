/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import { StepperContext } from "../contexts/StepperContext";

const DownloadButton = () => {
    const { pdfID } = useContext(StepperContext);
    const generatePDF = () => {
        const element = document.getElementById(pdfID);
        const option = {
            margin: 0.2,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(option).from(element).save();
    }

    return (
        <div className="flex">
            <button className="w-full py-2 px-4 bg-blue-900 text-white rounded uppercase font-medium block md:hidden mb-3 md:mb-0 hover:opacity-90" onClick={generatePDF}><i className="fa fa-download mr-2"></i> Download</button>
        </div>
    );
}

export default DownloadButton;