import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import "./TopNav.scss";

const TopNav: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="top-nav">
            <FaHome className="nav-icon" onClick={() => navigate("/explore")} />
            <FaUser className="nav-icon" onClick={() => navigate("/profile")} />
        </div>
    );
};

export default TopNav;
