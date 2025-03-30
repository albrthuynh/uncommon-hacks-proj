{ /* importing all the pages */ }
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
