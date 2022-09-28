import { fireEvent, render, screen } from "@testing-library/react";
import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ResumeContextProvider from "../../contexts/ResumeContext";
import Experience from "../../forms/Experience";
import ExperienceReducer from "../../reducers/ExperienceReducer";

describe("Experience", () => {
    const initialState = [
        {
            company: 'DKI',
            role: '',
            companyLocation: '',
            description: '',
            startMonth: '',
            startYear: '',
            endMonth: '',
            endYear: '',
            current: false,
            jobdesk: '<ul><li class=\"list-disc\"></li></ul>',
        }
    ];

    const ExpContext = () => {
        const [state, dispatch] = useReducer(ExperienceReducer, initialState)
        return (
            <BrowserRouter>
                <ResumeContextProvider value={{ state, dispatch }}>
                    <Experience />
                </ResumeContextProvider>
            </BrowserRouter>
        )
    }

    describe("ExpTest", () => {
        it("should render an input item and typa value", () => {
            render(<ExpContext />);
            const inputElement = screen.getByPlaceholderText(/Kinobi/i);
            expect(inputElement).toBeInTheDocument();
            fireEvent.change(inputElement, { target: { value: "Google Indonesia" } });
            expect(inputElement.value).toBe("Google Indonesia");
        });

        it("should be able to choose select option value", () => {
            render(<ExpContext />);
            const selectElement = screen.getByTestId("select-month");
            expect(selectElement).toBeInTheDocument();
            fireEvent.change(selectElement, { target: { value: "Feb" } });
            expect(selectElement.value).toBe("Feb");
        });

        it("should return an update state", () => {
            const actionValue = {
                type: "ADD_EXPERIENCE",
                payload: {
                    experience: {
                        company: '',
                        role: '',
                        companyLocation: '',
                        description: '',
                        startMonth: '',
                        startYear: '',
                        endMonth: '',
                        endYear: '',
                        current: false,
                        jobdesk: '<ul><li class=\"list-disc\"></li></ul>',
                    }
                }
            };
            const updateState = ExperienceReducer(initialState, actionValue);
            expect(updateState.length).toEqual(2);
        });

        it("should return an update name of company", () => {
            const actionValue = {
                type: "CHANGE_EXPERIENCE",
                payload: { name: "company", value: "Kinobi", index: 0 }
            };
            const updateState = ExperienceReducer(initialState, actionValue);
            expect(updateState[0].company).toEqual("Kinobi");
        });

        it("should remove an object or a card", () => {
            const actionValue = { type: "REMOVE_FORM_EXPERIENCE", payload: { index: 0 } };
            const updateState = ExperienceReducer(initialState, actionValue);
            expect(updateState.length).toEqual(0);
        });

        it("should return change job content", () => {
            const actionValue = {
                type: "CHANGE_JOBS",
                payload: { name: "jobdesk", value: "<ul><li class=\"list-disc\">Colaborate with team members</li></ul>", index: 0 }
            };
            const updateState = ExperienceReducer(initialState, actionValue);
            expect(updateState[0].jobdesk).toEqual("<ul><li class=\"list-disc\">Colaborate with team members</li></ul>");
        });

        it("should disable endmonth and endyear when the checkbox checked", () => {
            render(<ExpContext />);
            const checkboxElement = screen.getByRole("checkbox");
            expect(checkboxElement).toBeInTheDocument();
            fireEvent.click(checkboxElement, { target: { value: true } });
            const endMonth = screen.getByTestId("endmonth");
            const endYear = screen.getByTestId("endyear");
            expect(endMonth).toBeDisabled();
            expect(endYear).toBeDisabled();
            fireEvent.click(checkboxElement, { target: { value: false } });
            expect(endMonth).not.toBeDisabled();
            expect(endYear).not.toBeDisabled();
        });

    })
})