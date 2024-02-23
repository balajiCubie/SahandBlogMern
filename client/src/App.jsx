import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import DashBoard from "./pages/DashBoard";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignOut" element={<SignOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
