import React, { useState } from "react";
import TopNav from "../components/TopNav";
import "./Events.scss";

const allEvents = [
    { id: 1, title: "Welcome Week Mixer", date: "Apr 14", location: "Student Center", category: "Social", going: 42 },
    { id: 2, title: "STEM Career Fair", date: "Apr 17", location: "Murphy Hall", category: "Academic", going: 118 },
    { id: 3, title: "Bears vs. Howard Basketball", date: "Apr 19", location: "Hill Field House", category: "Sports", going: 203 },
    { id: 4, title: "Art Gallery Opening", date: "Apr 21", location: "Fine Arts Building", category: "Arts", going: 31 },
    { id: 5, title: "Open Mic Night", date: "Apr 23", location: "Student Lounge", category: "Social", going: 67 },
    { id: 6, title: "Coding Hackathon", date: "Apr 25", location: "Tech Center", category: "Academic", going: 54 },
    { id: 7, title: "Campus Cookout", date: "Apr 26", location: "Quad", category: "Social", going: 185 },
    { id: 8, title: "Graduate School Info Night", date: "Apr 28", location: "Jenkins Hall", category: "Academic", going: 39 },
];

const categories = ["All", "Social", "Academic", "Sports", "Arts"];

const Events = () => {
    const [filter, setFilter] = useState("All");
    const [going, setGoing] = useState<Set<number>>(new Set());

    const filtered = filter === "All" ? allEvents : allEvents.filter((e) => e.category === filter);

    const toggleGoing = (id: number) => {
        setGoing((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    return (
        <div className="events-wrapper">
            <TopNav />
            <div className="events-header">
                <h2>Social Events</h2>
                <p>What's happening at Morgan State</p>
            </div>

            <div className="events-filters">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-chip ${filter === cat ? "active" : ""}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="events-list">
                {filtered.map((event) => (
                    <div key={event.id} className="event-card">
                        <div className="event-date">{event.date}</div>
                        <div className="event-info">
                            <h3>{event.title}</h3>
                            <p>{event.location}</p>
                            <span className="event-category">{event.category}</span>
                        </div>
                        <div className="event-actions">
                            <span className="going-count">{event.going + (going.has(event.id) ? 1 : 0)} going</span>
                            <button
                                className={`going-btn ${going.has(event.id) ? "active" : ""}`}
                                onClick={() => toggleGoing(event.id)}
                            >
                                {going.has(event.id) ? "Going ✓" : "Going?"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
