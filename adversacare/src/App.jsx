{ /* importing all the pages */ }
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import SelectRolePage from "./pages/SelectPage/SelectRole";
import PatientSignupPage from "./pages/PatientSignup/PatientSignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path = "/select-signup" element = {<SelectRolePage/>}/>
          <Route path = "/patient-signup" element = {<PatientSignupPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
