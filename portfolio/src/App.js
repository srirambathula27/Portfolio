import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Port from "./components/Port/Port";
import Client from "./components/Client/Client";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Intro />
            <Skills />
          </>} />
          <Route path="/Port/Port" element={<Port />} />
          <Route path="/Client/Client" element={<Client />} />
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;