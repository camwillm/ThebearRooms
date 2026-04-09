import { useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaSnapchatGhost } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import "./Home.scss";

const apps = [
    { icon: <GiBearFace />, name: "The Bear Room", route: "/welcome", external: false, className: "bear" },
    { icon: <FaInstagram />, name: "Instagram", route: "https://www.instagram.com", external: true, className: "instagram" },
    { icon: <FaTwitter />, name: "Twitter", route: "https://www.twitter.com", external: true, className: "twitter" },
    { icon: <FaTiktok />, name: "TikTok", route: "https://www.tiktok.com", external: true, className: "tiktok" },
    { icon: <FaFacebook />, name: "Facebook", route: "https://www.facebook.com", external: true, className: "facebook" },
    { icon: <FaSnapchatGhost />, name: "Snapchat", route: "https://www.snapchat.com", external: true, className: "snapchat" }
];

const Home = () => {
    const navigate = useNavigate();

    const handleAppClick = (route: string, external: boolean) => {
        if (external) {
            window.open(route, "_blank", "noopener,noreferrer");
        } else {
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
                        onClick={() => handleAppClick(app.route, app.external)}
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
