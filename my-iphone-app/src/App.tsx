import { Routes, Route } from 'react-router-dom';
import ScreenWrapper from './components/ScreenWrapper';
import Home from './pages/Home';
import Login from './pages/Login';
import Welcome from './pages/welcome';
import PreferencesForm from './pages/referencesForm';

function App() {
  return (
    <ScreenWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/preferences" element={<PreferencesForm />} />
      </Routes>
    </ScreenWrapper>
  );
}

export default App;
