import { Component, createContext } from "react";

export const StepperContext = createContext();

class StepperContextProvider extends Component {
    state = {
        routes: [
            { route: 'personal', name: 'Personal Information', value: 1 },
            { route: 'experience', name: 'Experience', value: 2 },
            { route: 'education', name: 'Education', value: 3 },
            { route: 'organisational', name: 'Organisational', value: 4 },
            { route: 'others', name: 'Others', value: 5 },
            { route: 'complete', name: 'Complete', value: 6 },
        ],
        pdfID: "resume",
    }

    render() {
        return (
            <StepperContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </StepperContext.Provider>
        )
    }
}

export default StepperContextProvider;