import "./referencesForm.scss";
import { useState } from "react";

const interestsList = ["Football", "Anime", "Cooking", "Fashion", "Fitness", "Photography"];

const PreferencesForm = () => {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const toggleInterest = (interest: string) => {
        setSelectedInterests(prev =>
            prev.includes(interest)
                ? prev.filter(i => i !== interest)
                : [...prev, interest]
        );
    };

    return (
        <div className="preferences-form">
            <h2>Profile Setup</h2>

            <div className="form-group">
                <label>What is your major?</label>
                <input type="text" placeholder="e.g., Accounting" />
            </div>

            <div className="form-group">
                <label>Morning person or night owl?</label>
                <input type="text" placeholder="e.g., Morning Person" />
            </div>

            <div className="form-group">
                <label>Classification?</label>
                <input type="text" placeholder="e.g., Freshman" />
            </div>

            <div className="form-group">
                <label>Home State?</label>
                <input type="text" placeholder="e.g., Maryland" />
            </div>

            <div className="form-group">
                <label>Closer or farther roommate?</label>
                <input type="text" placeholder="e.g., Closer" />
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
                <textarea placeholder="Tell us about yourself..." />
            </div>

            <button className="submit-btn">Submit</button>
        </div>
    );
};

export default PreferencesForm;
