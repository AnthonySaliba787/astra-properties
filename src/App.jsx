import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import Nav from "./pages/Nav/Nav";

function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/properties" element={<Properties />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
