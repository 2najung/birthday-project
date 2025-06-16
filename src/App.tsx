import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LockScreen from "./pages/LockScreen";
import BirthdayPage from "./pages/BirthdayPage";

function App() {
  const basename = import.meta.env.DEV ? "" : "/birthday-project";

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/birthday" element={<BirthdayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
