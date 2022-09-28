import { BrowserRouter } from "react-router-dom";
import StepperContextProvider, { StepperContext } from "../../contexts/StepperContext";
import StepBar from "../StepBar";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const CloneStepper = () => {
    return (
        <BrowserRouter>
            <StepperContextProvider value={StepperContext}>
                <StepBar />
            </StepperContextProvider>
        </BrowserRouter>
    )
}


describe("Stepper", () => {
    // it("should render progress step bar with the same length", () => {
    //     render(<CloneStepper />);
    //     const linkElement = screen.getAllByTestId(/step/i);
    //     expect(linkElement.length).toBe(6);
    // });

    it("should render step item", () => {
        render(<CloneStepper />);
        const linkElement = screen.getByTestId("step-1");
        expect(linkElement).toBeInTheDocument();
    });

    it("should add active class", () => {
        render(<CloneStepper />);
        const linkElement = screen.getByTestId("step-1");
        fireEvent.click(linkElement);
        expect(linkElement).toHaveClass("active");
    });

    it("should have 2 class", () => {
        const { container } = render(<CloneStepper />);
        const linkElement = screen.getByTestId("step-1");
        fireEvent.click(linkElement);
        const activeLinks = container.getElementsByClassName("active");
        expect(activeLinks.length).toBe(2);
    });

    // it("should have the same path", () => {
    //     render(<CloneStepper />);
    //     const linkElement = screen.getByTestId("step-1");
    //     fireEvent.click(linkElement);
    //     const pathname = screen.getByTestId("location");
    //     expect(pathname).toHaveTextContent("/experience");
    // });
})