import AboutMe from "./pages/AboutMe";  //page one(About Me )
import GlobalStyle from "../src/components/GlobalStyle";
import Navbar from './components/Navbar';
import MyProjects from "./pages/MyProjects";
import ContactMe from "./pages/ContactMe";
import {Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';



function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <GlobalStyle />
      
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key = {location.pathname}>
          <Route path="/" element = {<AboutMe/>}>
           
          </Route>
          <Route path="/projects" element = {<MyProjects/>}>
            
          </Route>
          <Route path="/contact" element = {<ContactMe/>}>
          
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
