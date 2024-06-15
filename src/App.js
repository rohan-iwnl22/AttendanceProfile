import './App.css';
import FacultyProfile from './Profile/MentorProfile/FacultyProfile';
import Studentprofile from './Profile/StudentProfile/Studentprofile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SUP from './Profile/SuperUserProfile/SUP';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Studentprofile />} />
        <Route path='/mentorProfile' element={<FacultyProfile />} />
        <Route path='/supProfile' element={<SUP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
