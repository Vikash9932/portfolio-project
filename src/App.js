import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mine from "./components/Mine";
import Home from "./components/Home";
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from "./components/Contact";

function App() {
    return (
        <BrowserRouter>
            <Mine />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
