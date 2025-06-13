import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LockScreen from "./pages/LockScreen";
import BirthdayPage from "./pages/BirthdayPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/birthday" element={<BirthdayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
