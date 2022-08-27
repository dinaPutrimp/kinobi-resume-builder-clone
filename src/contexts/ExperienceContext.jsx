import { Component, createContext } from "react";

export const ExperienceContext = createContext();

class ExperienceContextProvider extends Component {
    state = {
        experiences: [
            {
                company: '',
                role: '',
                companyLocation: '',
                description: '',
                startMonth: '',
                startYear: '',
                endMonth: '',
                endYear: '',
                current: false,
                jobdesk: '',
            }
        ],
    }

    // toggleCard = (index) => {
    //     this.setState({
    //         experiences: this.state.experiences.map((experience, idx) => Number(idx) === Number(index) ? { ...experience, isCardOpen: !experience.isCardOpen } : experience)
    //     })
    // }

    addExperience = () => {
        let newExperience = {
            company: '',
            role: '',
            companyLocation: '',
            description: '',
            startMonth: '',
            startYear: '',
            endMonth: '',
            endYear: '',
            current: false,
            jobdesk: '',
        }

        this.setState({ experiences: [...this.state.experiences, newExperience] })
    }

    render() {
        return (
            <ExperienceContext.Provider value={{ ...this.state, addExperience: this.addExperience }}>
                {this.props.children}
            </ExperienceContext.Provider>
        )
    }
}

export default ExperienceContextProvider;