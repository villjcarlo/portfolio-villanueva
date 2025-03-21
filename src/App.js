import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoorPage from './pages/DoorPage'
import BodyPage from './pages/BodyPage'
import Navbar from './components/Navbar'
import "./App.css";

// App Component (Router Setup)
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<DoorPage />} />
                <Route path="/body" element={<BodyPage />} />
            </Routes>
        </Router>
    );
}

export default App;