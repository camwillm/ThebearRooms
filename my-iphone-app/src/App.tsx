import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ScreenWrapper from "./components/ScreenWrapper";

function App() {
  return (
    <ScreenWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ScreenWrapper>
  );
}

export default App;
