import { Routes, Route } from 'react-router-dom';
import ScreenWrapper from './components/ScreenWrapper';
import Home from './pages/Home';
import BearRoom from './pages/BearRoom';

function App() {
  return (
    <ScreenWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bear-room" element={<BearRoom />} />
      </Routes>
    </ScreenWrapper>
  );
}

export default App;
