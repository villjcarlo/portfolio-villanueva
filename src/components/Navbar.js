import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
    return (
        <nav className="navbar border-bottom">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
