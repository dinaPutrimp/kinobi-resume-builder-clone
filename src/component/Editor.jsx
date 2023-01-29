/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import { EditorContext } from "../contexts/EditorContext";
import { StepperContext } from "../contexts/StepperContext";

const Editor = () => {
    const { editorState, dispatchEditor } = useContext(EditorContext);
    const { pdfID } = useContext(StepperContext);
    const generatePDF = () => {
        const element = document.getElementById(pdfID);
        html2pdf().from(element).save();
    }

    return (
        <div className="shadow-t-side rounded-lg bg-white p-5 mb-3 flex-wrap hidden md:block">
            <div className="flex flex-wrap flex-initial items-center mr-3 m-2">
                <div className="mr-4">
                    <i className="fa fa-font mr-2"></i>
                    <select className="text-xs w-22 outline-none cursor-pointer" name="fontFamily" onChange={(e) => dispatchEditor({ type: "EDIT_TEXT", payload: { name: e.target.name, value: e.target.value } })} value={editorState.fontFamily}>
                        <option value="font-sans">Arial</option>
                        <option value="font-serif">Times New Roman</option>
                    </select>
                </div>
                <div className="flex mr-4 items-center">
                    <div className="mr-2">
                        <i className="fa fa-font"></i>
                        <i className="fa fa-font text-xs"></i>
                    </div>
                    <select className="text-xs w-22 outline-none cursor-pointer" name="fontSize" onChange={(e) => dispatchEditor({ type: "EDIT_TEXT", payload: { name: e.target.name, value: e.target.value } })} value={editorState.fontSize}>
                        <option value="text-xs">Small</option>
                        <option value="text-sm">Medium</option>
                        <option value="text-base">Large</option>
                    </select>
                </div>
                <div className="mr-4">
                    <i className="fa fa-text-height mr-2"></i>
                    <input className="w-12 text-sm outline-none border" type="number" name="lineHeight" min={14} max={30} onChange={(e) => dispatchEditor({ type: "EDIT_TEXT", payload: { name: e.target.name, value: e.target.value } })} value={editorState.lineHeight} />
                </div>
                <div>

                </div>
                <div>
                    <i className="fa fa-align-left mr-2"></i>
                    <select className="text-xs w-22 outline-none cursor-pointer" name="textAlign" onChange={(e) => dispatchEditor({ type: "EDIT_TEXT", payload: { name: e.target.name, value: e.target.value } })} value={editorState.textAlign}>
                        <option value="text-left">Left</option>
                        <option value="text-justify">Justify</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-row items-end">
                <a className="block px-6 py-2 rounded bg-blue-500 text-white text-sm cursor-pointer" onClick={generatePDF}>Download <i className="fa fa-download ml-1"></i></a>
            </div>
        </div>
    );
}

export default Editor;