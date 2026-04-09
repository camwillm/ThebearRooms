import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import "./Groups.scss";

const allGroups = [
    "Biology Club Interest",
    "BANA Interest",
    "Sports Fans",
    "Art & Design",
    "Robotics Enthusiasts",
    "Coding Bootcamp",
    "Photography Lovers",
    "Chess Club",
    "Anime Watchers",
];

const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const Groups = () => {
    const [suggested, setSuggested] = useState<string[]>([]);
    const [joined, setJoined] = useState<string[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("joinedGroups");
        if (saved) setJoined(JSON.parse(saved));

        const preferences = localStorage.getItem("userPreferences");
        if (preferences) {
            const parsedPrefs = JSON.parse(preferences);
            const interestGroups = allGroups.filter((group) =>
                parsedPrefs.interests?.some((interest: string) =>
                    group.toLowerCase().includes(interest.toLowerCase())
                )
            );
            setSuggested(interestGroups.length > 0 ? interestGroups : shuffleArray(allGroups).slice(0, 4));
        } else {
            setSuggested(shuffleArray(allGroups).slice(0, 4));
        }
    }, []);

    const handleJoin = (group: string) => {
        setJoined((prev) => {
            const next = prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group];
            localStorage.setItem("joinedGroups", JSON.stringify(next));
            return next;
        });
    };

    const handleAiAssist = () => {
        if (search.trim()) {
            const results = allGroups.filter((g) =>
                g.toLowerCase().includes(search.toLowerCase())
            );
            setSuggested(results.length > 0 ? results : allGroups);
        } else {
            setSuggested(shuffleArray(allGroups).slice(0, 4));
        }
    };

    return (
        <div className="groups-wrapper">
            <TopNav />
            <h1>Groups</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search groups..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAiAssist()}
                />
                <button className="ai-assist" onClick={handleAiAssist}>
                    AI Assist
                </button>
            </div>

            <div className="suggested-groups">
                <h2>Suggested Groups</h2>
                <div className="group-list">
                    {suggested.map((group) => (
                        <div key={group} className="group-card">
                            <span>{group}</span>
                            <button
                                className={`join-btn ${joined.includes(group) ? "joined" : ""}`}
                                onClick={() => handleJoin(group)}
                            >
                                {joined.includes(group) ? "Joined ✓" : "Join"}
                            </button>
                        </div>
                    ))}
                    {suggested.length === 0 && <p className="no-results">No groups found.</p>}
                </div>
            </div>

            <div className="my-groups">
                <h2>My Groups</h2>
                {joined.length === 0 ? (
                    <p>You haven't joined any groups yet.</p>
                ) : (
                    <div className="group-list">
                        {joined.map((group) => (
                            <div key={group} className="group-card">
                                <span>{group}</span>
                                <button className="join-btn joined" onClick={() => handleJoin(group)}>
                                    Leave
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Groups;
