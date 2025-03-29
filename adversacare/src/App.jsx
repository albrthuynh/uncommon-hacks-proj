import { Routes, Route } from "react-router-dom";

{ /* importing all the pages */ }
import Layout from './Layout'
import HomePage from "./Home/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Layout/>}>
          <Route index element = {<HomePage/>}/>
        
        </Route>
      </Routes>
    </>
  )
}

export default App
