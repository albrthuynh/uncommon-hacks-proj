{ /* importing all the pages */ }
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import SelectRolePage from "./pages/SelectRole";
import PatientSignupPage from "./pages/PatientSignupPage";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path = "/select-signup" element = {<SelectRolePage/>}/>
          <Route path = "/patient-signup" element = {<PatientSignupPage/>}/>
          <Route path = "/patient-dashboard" element = {<PatientDashboard/>}/>
          <Route path = "/doctor-dashboard" element = {<DoctorDashboard/>}/>
          <Route path = "/doctor-dashboard" element = {<DoctorDashboard/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
