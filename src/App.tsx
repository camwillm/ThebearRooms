import { Routes, Route } from 'react-router-dom';
import ScreenWrapper from './components/ScreenWrapper';
import Home from './pages/Home';
import Login from './pages/Login';
import Welcome from './pages/welcome';
import PreferencesForm from './pages/referencesForm';
import Profile from './pages/profile';
import Explore from './pages/Explore';
import Groups from './pages/Groups';
import Housing from './pages/Housing';
import StudentDetail from './pages/StudentDetail';
import Calendar from './pages/Calendar';
import MapPage from './pages/Map';
import Events from './pages/Events';
import Settings from './pages/Settings';

function App() {
  return (
    <ScreenWrapper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/preferences" element={<PreferencesForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/Housing" element={<Housing />} />
        <Route path="/StudentDetail" element={<StudentDetail />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </ScreenWrapper>
  );
}

export default App;
