import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import "./StudentDetail.scss";

const StudentDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, match } = location.state || {};

    if (!name) {
        return (
            <div className="student-wrapper">
                <TopNav />
                <h2>Student not found</h2>
            </div>
        );
    }

    return (
        <div className="student-wrapper">
            <TopNav />
            <h2 className="student-title">{name}</h2>
            <p className={`match-level ${match.toLowerCase()}`}>
                Match Level: {match}
            </p>
            <button className="back-button" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
};

export default StudentDetail;
