import React from "react";
import TopNav from "../components/TopNav";
import { useLocation } from "react-router-dom";
import "./Calendar.scss";

const days = ["S", "M", "T", "W", "T", "F", "S"];

const Calendar = () => {
    const location = useLocation();
    const student1 = "You";
    const student2 = location.state?.name || "Roommate";

    const getChoreAbbreviation = (chore: string) => {
        switch (chore) {
            case "Garbage":
                return "G";
            case "Clean":
                return "C";
            case "Cook":
                return "K";
            case "Grocery":
                return "Gr";
            default:
                return "?";
        }
    };

    const generateAssignments = () => {
        const week = [];

        const schedule = [
            { name: "Garbage", days: [1, 5] },
            { name: "Clean", days: [2, 6] },
            { name: "Cook", days: [0, 1, 2, 3, 4, 5] },
            { name: "Grocery", days: [0] },
        ];

        for (let i = 0; i < schedule.length; i++) {
            const row = [];
            for (let day = 0; day < days.length; day++) {
                if (schedule[i].days.includes(day)) {
                    const assignedTo = (i + day) % 2 === 0 ? student1 : student2;
                    row.push({ assignedTo, choreName: schedule[i].name });
                } else {
                    row.push(null);
                }
            }
            week.push(row);
        }

        return week;
    };

    const weekAssignments = generateAssignments();

    return (
        <div className="calendar-wrapper">
            <TopNav />
            <h2 className="calendar-title">{`You + ${student2}'s Calendar`}</h2>

            <div className="calendar-container">
                <div className="calendar-grid">
                    <div className="header-row">
                        {days.map((day, idx) => (
                            <div key={idx} className="day-header">{day}</div>
                        ))}
                    </div>

                    {weekAssignments.map((row, choreIdx) => (
                        <div key={choreIdx} className="chore-row">
                            {row.map((cell, dayIdx) => (
                                <div
                                    key={dayIdx}
                                    className={`chore-cell ${cell ? (cell.assignedTo === student1 ? "student1" : "student2") : "empty"}`}
                                >
                                    {cell ? getChoreAbbreviation(cell.choreName) : ""}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="legend">
                <div className="legend-item">
                    <span className="dot student1"></span> You
                </div>
                <div className="legend-item">
                    <span className="dot student2"></span> {student2}
                </div>
            </div>

            <div className="chore-legend">
                <h3 className="legend-title">Chore Key:</h3>
                <ul>
                    <li><strong>G</strong> = Garbage</li>
                    <li><strong>C</strong> = Clean</li>
                    <li><strong>K</strong> = Cook</li>
                    <li><strong>Gr</strong> = Grocery</li>
                </ul>
            </div>
        </div>
    );
};

export default Calendar;
