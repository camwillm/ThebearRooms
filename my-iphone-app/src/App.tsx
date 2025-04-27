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

function App() {
  return (
    <ScreenWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/preferences" element={<PreferencesForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/Housing" element={<Housing />} />
        <Route path="/StudentDetail" element={<StudentDetail />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </ScreenWrapper>
  );
}

export default App;
