import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// DoorPage (HomePage with animated doors)
export default function DoorPage() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                navigate("/body"); // Navigate after animation
            }, 2000); // Matches transition duration
        }
    }, [isOpen, navigate]);

    return (
        <div className={`door-container ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(true)}>
            <div className={`door-text1 ${isOpen ? "fade-out" : ""}`}>
                JOHN CARLO P. VILLANUEVA
            </div>
            <div className={`door-text2 ${isOpen ? "fade-out" : ""}`}>
                Full-Stack Web Developer
            </div>
            <div className={`door-text3 ${isOpen ? "fade-out" : ""}`}>
                Click to Explore my Space
            </div>
            <div className="door door-left"></div>
            <div className="door door-right"></div>
        </div>
    );
}
