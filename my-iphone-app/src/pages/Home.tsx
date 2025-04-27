import { useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaSnapchatGhost } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import "./Home.scss";

const apps = [
    { icon: <GiBearFace />, name: "The Bear Room", route: "/login", className: "bear" },
    { icon: <FaInstagram />, name: "Instagram", route: "#", className: "instagram" },
    { icon: <FaTwitter />, name: "Twitter", route: "#", className: "twitter" },
    { icon: <FaTiktok />, name: "TikTok", route: "#", className: "tiktok" },
    { icon: <FaFacebook />, name: "Facebook", route: "#", className: "facebook" },
    { icon: <FaSnapchatGhost />, name: "Snapchat", route: "#", className: "snapchat" }
];

const Home = () => {
    const navigate = useNavigate();

    const handleAppClick = (route: string) => {
        if (route !== "#") {
            navigate(route);
        }
    };

    return (
        <div className="home-screen">
            <div className="apps-grid">
                {apps.map((app, index) => (
                    <div
                        key={index}
                        className={`app-icon ${app.className}`}
                        onClick={() => handleAppClick(app.route)}
                    >
                        <div className="icon">{app.icon}</div>
                        <span>{app.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
