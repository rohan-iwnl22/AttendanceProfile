import './App.css';
import FacultyProfile from './Profile/MentorProfile/FacultyProfile';
import Studentprofile from './Profile/StudentProfile/Studentprofile';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/studentProfile' element={<Studentprofile />} />
        <Route path='/mentorProfile' element={<FacultyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
