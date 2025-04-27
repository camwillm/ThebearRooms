import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './referencesForm.scss';

const interestsList = ["Football", "Anime", "Cooking", "Fashion", "Fitness", "Photography"];

const PreferencesForm = () => {
    const navigate = useNavigate();

    const [major, setMajor] = useState("");
    const [preference, setPreference] = useState("");
    const [classification, setClassification] = useState("");
    const [homeState, setHomeState] = useState("");
    const [distancePreference, setDistancePreference] = useState("");
    const [description, setDescription] = useState("");
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const toggleInterest = (interest: string) => {
        setSelectedInterests((prev) =>
            prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
        );
    };

    const handleSubmit = () => {
        const profileData = {
            major,
            preference,
            classification,
            homeState,
            distancePreference,
            description,
            interests: selectedInterests, // ✅ corrected this field
        };

        localStorage.setItem("profileData", JSON.stringify(profileData));
        navigate("/profile"); // ✅ go to Profile page after submit
    };

    return (
        <div className="preferences-form">
            <h2>Profile Setup</h2>

            <div className="form-group">
                <label>What is your major?</label>
                <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} placeholder="e.g., Accounting" />
            </div>

            <div className="form-group">
                <label>Morning person or night owl?</label>
                <input type="text" value={preference} onChange={(e) => setPreference(e.target.value)} placeholder="e.g., Morning Person" />
            </div>

            <div className="form-group">
                <label>Classification?</label>
                <input type="text" value={classification} onChange={(e) => setClassification(e.target.value)} placeholder="e.g., Freshman" />
            </div>

            <div className="form-group">
                <label>Home State?</label>
                <input type="text" value={homeState} onChange={(e) => setHomeState(e.target.value)} placeholder="e.g., Maryland" />
            </div>

            <div className="form-group">
                <label>Commute to School?</label>
                <input type="text" value={distancePreference} onChange={(e) => setDistancePreference(e.target.value)} placeholder="e.g., Closer" />
            </div>

            <div className="form-group">
                <label>Select Interests:</label>
                <div className="interests-grid">
                    {interestsList.map((interest) => (
                        <button
                            type="button"
                            key={interest}
                            className={`interest-chip ${selectedInterests.includes(interest) ? "selected" : ""}`}
                            onClick={() => toggleInterest(interest)}
                        >
                            {interest}
                        </button>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label>Description / Hobbies</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Tell us about yourself..." />
            </div>

            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default PreferencesForm;
