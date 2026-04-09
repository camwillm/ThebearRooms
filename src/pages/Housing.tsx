import React, { useState } from "react";
import TopNav from "../components/TopNav";
import { useNavigate } from "react-router-dom";
import "./Housing.scss";

const Housing = () => {
    const navigate = useNavigate();
    const [visibleCount, setVisibleCount] = useState(5);

    const matches = [
        { name: "Aaliyah Jackson", match: "Green" },
        { name: "Malik Robinson", match: "Green" },
        { name: "Imani Walker", match: "Green" },
        { name: "Darius Carter", match: "Green" },
        { name: "Nia Harris", match: "Green" },
        { name: "Jalen Brooks", match: "Yellow" },
        { name: "Ayanna Mitchell", match: "Yellow" },
        { name: "DeShawn Lewis", match: "Yellow" },
        { name: "Zuri Scott", match: "Yellow" },
        { name: "Tyrone Jenkins", match: "Red" },
        { name: "Shanice Evans", match: "Red" },
        { name: "Kofi Johnson", match: "Green" },
        { name: "Aminah Brown", match: "Yellow" },
        { name: "Xavier King", match: "Green" },
        { name: "Sanaa Wright", match: "Red" },
        { name: "DeAndre Clark", match: "Yellow" },
        { name: "Imani Moore", match: "Green" },
        { name: "Tariq Richardson", match: "Red" },
        { name: "Asha Price", match: "Yellow" },
        { name: "Omari Reed", match: "Green" },
        { name: "Kiana Simmons", match: "Yellow" },
        { name: "Malachi Foster", match: "Green" },
        { name: "Brielle Hayes", match: "Green" },
        { name: "Sekou Banks", match: "Red" },
        { name: "Jamila Bennett", match: "Yellow" },
        { name: "Nasir Washington", match: "Green" },
        { name: "Nyla Bryant", match: "Yellow" },
    ];

    const handleSelectStudent = (student: { name: string; match: string }) => {
        navigate("/calendar", { state: student }); // ⬅️ Now goes to calendar
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 5);
    };

    return (
        <div className="housing-wrapper">
            <TopNav />
            <h2 className="housing-title">AI Assistant has found matches</h2>

            <div className="housing-table">
                {matches.slice(0, visibleCount).map((match, index) => (
                    <div
                        key={index}
                        className="housing-row"
                        onClick={() => handleSelectStudent(match)}
                    >
                        <div className="student-name">{match.name}</div>
                        <div className="dot-container">
                            <span className={`dot ${match.match === "Green" ? "green" : "gray"}`}></span>
                            <span className={`dot ${match.match === "Yellow" ? "yellow" : "gray"}`}></span>
                            <span className={`dot ${match.match === "Red" ? "red" : "gray"}`}></span>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < matches.length && (
                <button className="load-more-button" onClick={handleLoadMore}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default Housing;
