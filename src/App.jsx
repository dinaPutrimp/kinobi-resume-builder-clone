/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ResumeView from './component/ResumeView';
import StepBar from './component/StepBar';
import Complete from './forms/Complete';
import Education from './forms/Education';
import Experience from './forms/Experience';
import OrganisationalExperience from './forms/OrganisationalExperience';
import OthersExperience from './forms/OthersExperience';
import PersonalInfoForm from './forms/PersonalInfoForm';
import StepperContextProvider from './contexts/StepperContext';
import ResumeContextProvider from './contexts/ResumeContext';
import Editor from './component/Editor';
import DownloadButton from './component/DownloadButton';

function App() {
  return (
    <Router>
      <StepperContextProvider>
        <ResumeContextProvider>
          <div className="App max-w-full bf-violet-100 grid md:grid-cols-2 gap-4">
            <div>
              <StepBar />
              <DownloadButton />
              <Routes>
                <Route path="/" element={<PersonalInfoForm />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/education" element={<Education />} />
                <Route path="/organisational" element={<OrganisationalExperience />} />
                <Route path="/others" element={<OthersExperience />} />
                <Route path="/complete" element={<Complete />} />
              </Routes>
            </div>
            <div>
              <Editor />
              <ResumeView />
            </div>
          </div>
        </ResumeContextProvider>
      </StepperContextProvider>
    </Router>
  );
}

export default App;
