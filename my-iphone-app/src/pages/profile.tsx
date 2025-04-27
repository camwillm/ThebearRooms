import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import "./Profile.scss";

const Profile = () => {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        major: "",
        preference: "",
        classification: "",
        homeState: "",
        Commuting: "",
        description: "",
        interests: [] as string[],
    });
    const [fullName, setFullName] = useState("");

    useEffect(() => {
        const storedProfileData = localStorage.getItem("profileData");
        if (storedProfileData) {
            setProfileData(JSON.parse(storedProfileData));
        }

        const storedLoginData = localStorage.getItem("loginData");
        if (storedLoginData) {
            const parsedLoginData = JSON.parse(storedLoginData);
            const firstName = parsedLoginData.firstName || "";
            const lastName = parsedLoginData.lastName || "";
            setFullName(`${firstName} ${lastName}`.trim());
        }
    }, []);

    const handleEditClick = () => {
        navigate("/preferences");
    };

    return (
        <div className="profile-wrapper">
            <TopNav />
            <div className="profile-header">
                <h2>{fullName || "My Profile"}</h2>
                <div className="profile-pic">👤</div>
            </div>

            <div className="profile-info">
                <div className="info-card">
                    <label>Major</label>
                    <p>{profileData.major || "Not provided"}</p>
                </div>
                <div className="info-card">
                    <label>Morning/Night Preference</label>
                    <p>{profileData.preference || "Not provided"}</p>
                </div>
                <div className="info-card">
                    <label>Classification</label>
                    <p>{profileData.classification || "Not provided"}</p>
                </div>
                <div className="info-card">
                    <label>Home State</label>
                    <p>{profileData.homeState || "Not provided"}</p>
                </div>
                <div className="info-card">
                    <label>Commuting</label>
                    <p>{profileData.Commuting || "Not provided"}</p>
                </div>
                <div className="info-card">
                    <label>Interests</label>
                    <p>{profileData.interests.length > 0 ? profileData.interests.join(", ") : "None selected"}</p>
                </div>
                <div className="info-card">
                    <label>About Me</label>
                    <p>{profileData.description || "No description yet."}</p>
                </div>
            </div>

            <div className="edit-button">
                <button onClick={handleEditClick}>Edit Profile</button>
            </div>
        </div>
    );
};

export default Profile;
