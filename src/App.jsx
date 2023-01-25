import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Resume from "./layout/Resume";
import NavBar from "./layout/Navbar";
import SignUp from "./forms/auth/SignUp";
import Login from "./forms/auth/Login";
import Dashboard from "./layout/PrivateDashboard";
import PublicDashboard from "./layout/PublicDashboard";
import PersonalInfoForm from "./forms/resumes/PersonalInfoForm";
import Experience from "./forms/resumes/Experience";
import Education from "./forms/resumes/Education";
import OrganisationalExperience from "./forms/resumes/OrganisationalExperience";
import OthersExperience from "./forms/resumes/OthersExperience";
import Complete from "./forms/resumes/Complete";
import StepperContextProvider from "./contexts/StepperContext";
import FirebaseResumeContextProvider from "./contexts/FirebaseResumeContext";
import EditorContextProvider from "./contexts/EditorContext";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <FirebaseResumeContextProvider>
      <StepperContextProvider>
        <EditorContextProvider>
          <Router>
            <div className="App max-w-full bf-violet-100" onClick={() => setToggle(false)}>
              <NavBar toggle={() => setToggle(!toggle)} toggleValue={toggle} />
              <div>
                <Routes>
                  <Route path="/" element={<PublicDashboard />} />
                  <Route path="user" element={<Dashboard />} />
                  <Route path="resume/:resumeId" element={<Resume />}>
                    <Route index element={<PersonalInfoForm />} />
                    <Route path="personal" element={<PersonalInfoForm />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="education" element={<Education />} />
                    <Route path="organisational" element={<OrganisationalExperience />} />
                    <Route path="others" element={<OthersExperience />} />
                    <Route path="complete" element={<Complete />} />
                  </Route>
                  <Route path="signup" element={<SignUp />} />
                  <Route path="login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </Router>
        </EditorContextProvider>
      </StepperContextProvider>
    </FirebaseResumeContextProvider>
  )
}

export default App
