import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project-details" element={<ProjectDetails />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}