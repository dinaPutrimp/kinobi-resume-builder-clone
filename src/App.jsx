/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import NavBar from './layout/Navbar';
import PublicDashboard from './layout/PublicDashboard';
import StepperContextProvider from './contexts/StepperContext';
import FirebaseResumeContextProvider from './contexts/FirebaseResumeContext';
import EditorContextProvider from './contexts/EditorContext';
import PersonalSkeleton from './layout/skeleton-ui/PersonalSkeleton';
import ExperienceSkeleton from './layout/skeleton-ui/ExperienceSkeleton';
import OthersSkeleton from './layout/skeleton-ui/OthersSkeleton';
import CompleteSkeleton from './layout/skeleton-ui/CompleteSkeleton';
import PrivateDashboardSkeleton from './layout/skeleton-ui/PrivateDashSkeleton';
import AuthSkeleton from './layout/skeleton-ui/AuthSkeleton';

const SignUp = lazy(() => import('./forms/auth/SignUp'));
const Login = lazy(() => import('./forms/auth/Login'));
const ResetPassword = lazy(() => import('./forms/resumes/ResetPassword'));
const Dashboard = lazy(() => import('./layout/PrivateDashboard'));
const Resume = lazy(() => import('./layout/Resume'));
const PersonalInfoForm = lazy(() => import('./forms/resumes/PersonalInfoForm'));
const Experience = lazy(() => import('./forms/resumes/Experience'));
const Education = lazy(() => import('./forms/resumes/Education'));
const OrganisationalExperience = lazy(() => import('./forms/resumes/OrganisationalExperience'));
const OthersExperience = lazy(() => import('./forms/resumes/OthersExperience'));
const Complete = lazy(() => import('./forms/resumes/Complete'));

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
                  <Route path="user" element={<Suspense fallback={<PrivateDashboardSkeleton />}><Dashboard /></Suspense>} />
                  <Route path="resume/:resumeId" element={<Suspense fallback={<div>Loading...</div>}><Resume /></Suspense>}>
                    <Route index element={<Suspense fallback={<PersonalSkeleton />}><PersonalInfoForm /></Suspense>} />
                    <Route path="personal" element={<Suspense fallback={<PersonalSkeleton />}><PersonalInfoForm /></Suspense>} />
                    <Route path="experience" element={<Suspense fallback={<ExperienceSkeleton />}><Experience /></Suspense>} />
                    <Route path="education" element={<Suspense fallback={<ExperienceSkeleton />}><Education /></Suspense>} />
                    <Route path="organisational" element={<Suspense fallback={<ExperienceSkeleton />}><OrganisationalExperience /></Suspense>} />
                    <Route path="others" element={<Suspense fallback={<OthersSkeleton />}><OthersExperience /></Suspense>} />
                    <Route path="complete" element={<Suspense fallback={<CompleteSkeleton />}><Complete /></Suspense>} />
                  </Route>
                  <Route path="signup" element={<Suspense fallback={<AuthSkeleton />}><SignUp /></Suspense>} />
                  <Route path="login" element={<Suspense fallback={<AuthSkeleton />}><Login /></Suspense>} />
                  <Route path="reset-password" element={<Suspense fallback={<AuthSkeleton />}><ResetPassword /></Suspense>} />
                </Routes>
              </div>
            </div>
          </Router>
        </EditorContextProvider>
      </StepperContextProvider>
    </FirebaseResumeContextProvider>
  );
}

export default App;
