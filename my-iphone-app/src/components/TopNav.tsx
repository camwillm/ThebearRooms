import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import './TopNav.scss';

const TopNav = () => {
    const navigate = useNavigate();

    return (
        <div className="top-nav">
            <FaHome className="nav-icon left" onClick={() => navigate('/explore')} />
            <FaUser className="nav-icon right" onClick={() => navigate('/profile')} />
        </div>
    );
};

export default TopNav;
