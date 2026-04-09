import React, { useState } from "react";
import TopNav from "../components/TopNav";
import { useNavigate } from "react-router-dom";
import "./Settings.scss";

const Settings = () => {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [locationAccess, setLocationAccess] = useState(true);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="settings-wrapper">
            <TopNav />
            <div className="settings-header">
                <h2>Settings</h2>
            </div>

            <div className="settings-list">
                <div className="settings-section">
                    <h3>Preferences</h3>
                    <div className="settings-row">
                        <span>Push Notifications</span>
                        <label className="toggle">
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={() => setNotifications(!notifications)}
                            />
                            <span className="slider" />
                        </label>
                    </div>
                    <div className="settings-row">
                        <span>Dark Mode</span>
                        <label className="toggle">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={() => setDarkMode(!darkMode)}
                            />
                            <span className="slider" />
                        </label>
                    </div>
                    <div className="settings-row">
                        <span>Location Access</span>
                        <label className="toggle">
                            <input
                                type="checkbox"
                                checked={locationAccess}
                                onChange={() => setLocationAccess(!locationAccess)}
                            />
                            <span className="slider" />
                        </label>
                    </div>
                </div>

                <div className="settings-section">
                    <h3>Account</h3>
                    <div className="settings-row clickable" onClick={() => navigate("/preferences")}>
                        <span>Edit Profile</span>
                        <span className="chevron">›</span>
                    </div>
                    <div className="settings-row clickable" onClick={() => navigate("/profile")}>
                        <span>View Profile</span>
                        <span className="chevron">›</span>
                    </div>
                </div>

                <button className="logout-btn" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Settings;
