import "./welcome.scss";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    const handlePreferencesClick = () => {
        navigate("/preferences");
    };

    return (
        <div className="welcome-page">
            <h1>Welcome, Cameron</h1>
            <p>Please complete your profile introduction to continue</p>
            <button className="preferences-button" onClick={handlePreferencesClick}>
                Preferences
                <span className="arrow">➔</span>
            </button>
        </div>
    );
};

export default Welcome;
