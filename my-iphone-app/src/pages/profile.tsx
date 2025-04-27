import React, { useState, useEffect } from "react";
import "./Profile.scss";

const Profile = () => {
    const [profileData, setProfileData] = useState({
        major: "",
        preference: "",
        classification: "",
        homeState: "",
        distancePreference: "",
        description: "",
        interests: [] as string[],
    });

    useEffect(() => {
        const storedData = localStorage.getItem("profileData");
        if (storedData) {
            setProfileData(JSON.parse(storedData));
        }
    }, []);

    return (
        <div className="profile-wrapper">
            <div className="profile-header">
                <h2>{profileData.major || "My Profile"}</h2>
                <div className="profile-pic">
                    {/* Placeholder circle */}
                    <span>👤</span>
                </div>
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
                    <label>Distance Preference</label>
                    <p>{profileData.distancePreference || "Not provided"}</p>
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
                <button>Edit Profile</button>
            </div>
        </div>
    );
};

export default Profile;
