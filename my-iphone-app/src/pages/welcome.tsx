import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.scss";

const Welcome = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");

    useEffect(() => {
        const storedData = localStorage.getItem("loginData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setFirstName(parsedData.firstName || "");
        }
    }, []);

    const handlePreferencesClick = () => {
        navigate("/preferences");
    };

    return (
        <div className="welcome-page">
            <h1>Welcome, {firstName}</h1>
            <p>Please complete your profile introduction to continue</p>
            <button className="preferences-button" onClick={handlePreferencesClick}>
                Preferences <span className="arrow">➔</span>
            </button>
        </div>
    );
};

export default Welcome;
