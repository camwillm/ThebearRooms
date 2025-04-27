import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/welcome");
    };

    return (
        <div className="login-page">
            <div className="header">
                <div className="logo">
                    <span>THE</span>
                    <span role="img" aria-label="bear">🐻</span>
                    <span>ROOM</span>
                </div>
            </div>

            <div className="login-form">
                <h2>Sign in using your school credentials</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <div className="remember-me">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me on this device</label>
                </div>
                <button onClick={handleSignIn}>Sign In</button>
            </div>
        </div>
    );
};

export default Login;
