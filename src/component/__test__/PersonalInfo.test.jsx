import { fireEvent, render, screen } from "@testing-library/react";
import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ResumeContextProvider from "../../contexts/ResumeContext";
import PersonalInfoForm from "../../forms/PersonalInfoForm";
import PersonalReducer from "../../reducers/PersonalReducer";
import StepBar from "../StepBar";
import StepperContextProvider, { StepperContext } from "../../contexts/StepperContext";

describe("PersonalInfo", () => {
    const initialState = {
        name: '',
        phone: '',
        email: '',
        linkedin: '',
        portofolio: '',
        address: '',
        summary: '',
    }

    const Context = () => {
        const [state, dispatch] = useReducer(PersonalReducer, initialState);
        return (
            <BrowserRouter>
                <ResumeContextProvider value={{ state, dispatch }}>
                    <PersonalInfoForm />
                </ResumeContextProvider>
            </BrowserRouter>
        )
    }


    it("should render input name item", () => {
        render(<Context />);
        const element = screen.getByTestId("input-name");
        expect(element).toBeInTheDocument();
    });

    it("should be able to type value", () => {
        render(<Context />);
        const nameInputElement = screen.getByPlaceholderText(/e.g. Joshua Tay/i);
        expect(nameInputElement).toBeInTheDocument();
        fireEvent.change(nameInputElement, { target: { value: "Winny" } });
        expect(nameInputElement.value).toBe("Winny");
    });

    it("should be able to type summary value", () => {
        render(<Context />);
        const summaryArea = screen.getByTestId("input-summary");
        expect(summaryArea).toBeInTheDocument();
        fireEvent.change(summaryArea, { target: { value: "Im a fresh graduate" } });
        expect(screen.getByText("Im a fresh graduate")).toBeInTheDocument();
    });

    // it("should redirect to experience page", () => {
    //     render(<Context />);
    //     const buttonSave = screen.getByText("Save & Continue");
    //     expect(buttonSave).toBeInTheDocument();
    //     fireEvent.click(buttonSave);
    //     render(
    //         <BrowserRouter>
    //             <StepperContextProvider value={StepperContext}>
    //                 <StepBar />
    //             </StepperContextProvider>
    //         </BrowserRouter>
    //     );
    //     const pathname = screen.getByTestId("location");
    //     expect(pathname).toHaveTextContent("/experience");
    // });

})