import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const loginData = {
            firstName,
            lastName,
            username,
            password,
            rememberMe,
        };

        localStorage.setItem("loginData", JSON.stringify(loginData));
        navigate("/welcome");
    };

    return (
        <div className="login-wrapper">
            <div className="login-header">
                THE 🐻 ROOM
            </div>

            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="remember-me">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    Remember me on this device
                </div>

                <button type="submit" className="login-button">
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default Login;
