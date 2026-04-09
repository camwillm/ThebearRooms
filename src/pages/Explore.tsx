import React from "react";
import TopNav from "../components/TopNav";
import { useNavigate } from "react-router-dom";
import "./Explore.scss";

const Explore = () => {
    const navigate = useNavigate();

    return (
        <>
            <TopNav />
            <div className="explore-wrapper">
                <div className="explore-header-wrapper">
                    <div className="explore-header">
                        Morgan State University
                    </div>
                </div>

                <div className="explore-sections">
                    <div className="explore-section" onClick={() => navigate('/housing')}>
                        Housing
                    </div>
                    <div className="explore-section" onClick={() => navigate('/groups')}>
                        Groups
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
        </>
    );
};

export default Explore;
