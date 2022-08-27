import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ResumeView from './component/ResumeView';
import StepBar from './component/StepBar';
import Complete from './forms/Complete';
import Education from './forms/Education';
import Experience from './forms/Experience';
import OrganisationalExperience from './forms/OrganisationalExperience';
import OthersExperience from './forms/OthersExperience';
import PersonalInfoForm from './forms/PersonalInfoForm';
import ExperienceContextProvider from './contexts/ExperienceContext';
import MergeContextProvider from './contexts/MergeContext';

function App() {

  return (
    <Router>
      <div className="App max-w-full bf-violet-100 grid md:grid-cols-2 gap-4">
        <div>
          <StepBar />
          <ExperienceContextProvider>
            <MergeContextProvider>
              <Routes>
                <Route path='/' element={<PersonalInfoForm />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/education' element={<Education />} />
                <Route path='/organisational' element={<OrganisationalExperience />} />
                <Route path='/others' element={<OthersExperience />} />
                <Route path='/complete' element={<Complete />} />
              </Routes>
            </MergeContextProvider>
          </ExperienceContextProvider>
        </div>
        <ResumeView />
      </div>
    </Router>
  )
}

export default App
