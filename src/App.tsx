import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import Docs from "./pages/Docs";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/feature/*" element={<Main />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
