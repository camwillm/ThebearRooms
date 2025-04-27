import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Groups = () => {
    const navigate = useNavigate();
    const [groups, setGroups] = useState<string[]>([]);

    const handleGroupClick = (groupName: string) => {
        console.log(`Clicked on group: ${groupName}`);
    };

    useEffect(() => {
        const preferences = localStorage.getItem("userPreferences");

        if (preferences) {
            const parsedPrefs = JSON.parse(preferences);
            const interestGroups = allGroups.filter((group) =>
                parsedPrefs.interests?.some((interest: string) =>
                    group.toLowerCase().includes(interest.toLowerCase())
                )
            );
            setGroups(interestGroups.length > 0 ? interestGroups : shuffleArray(allGroups).slice(0, 3));
        } else {
            setGroups(shuffleArray(allGroups).slice(0, 3));
        }
    }, []);

    const shuffleArray = (array: string[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    return (
        <div className="groups-wrapper">
            <TopNav />
            <h1>Groups</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search groups..." />
                <button className="ai-assist">AI Assist</button>
            </div>
            <div className="suggested-groups">
                <h2>Suggested Groups</h2>
                <div className="group-list">
                    {groups.map((group) => (
                        <div
                            key={group}
                            className="group-card"
                            onClick={() => handleGroupClick(group)}
                        >
                            {group}
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-groups">
                <h2>My Groups</h2>
                <p>You haven't joined any groups yet.</p>
            </div>
        </div>
    );
};

export default Groups;
