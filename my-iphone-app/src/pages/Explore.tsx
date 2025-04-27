import React from "react";
import TopNav from "../components/TopNav";
import { useNavigate } from "react-router-dom";
import "./Explore.scss";

const Explore = () => {
    const navigate = useNavigate();

    return (
        <div className="explore-wrapper">
            <TopNav />

            <div className="explore-header">
                Morgan State University
            </div>

            <div className="explore-sections">
                <div className="explore-section" onClick={() => navigate('/housing')}>
                    Explore Morgan - Housing
                </div>
                <div className="explore-section" onClick={() => navigate('/groups')}>
                    Explore Morgan - Groups
                </div>
                <div className="explore-section" onClick={() => navigate('/events')}>
                    Social Events
                </div>
                <div className="explore-section" onClick={() => navigate('/map')}>
                    Campus Map
                </div>
                <div className="explore-section" onClick={() => navigate('/settings')}>
                    Settings
                </div>
            </div>
        </div>
    );
};

export default Explore;
