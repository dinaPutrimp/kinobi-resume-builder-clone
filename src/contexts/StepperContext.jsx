/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/state-in-constructor */
/* eslint-disable indent */
import { Component, createContext } from 'react';

export const StepperContext = createContext();

class StepperContextProvider extends Component {
    state = {
        routes: [
            { route: '/', name: 'Personal Information', value: 1 },
            { route: '/experience', name: 'Experience', value: 2 },
            { route: '/education', name: 'Education', value: 3 },
            { route: '/organisational', name: 'Organisational', value: 4 },
            { route: '/others', name: 'Others', value: 5 },
            { route: '/complete', name: 'Complete', value: 6 },
        ],
        pdfID: 'resume',
    };

    render() {
        return (
            <StepperContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </StepperContext.Provider>
        );
    }
}

export default StepperContextProvider;
