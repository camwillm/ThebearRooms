import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-screen">
            <div className="app-icon" onClick={() => navigate('/bear-room')}>
                🐻
                <span>The Bear Room</span>
            </div>
        </div>
    );
};

export default Home;
