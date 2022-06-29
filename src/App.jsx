import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Routing from "./route/route";
// pages
import Profile from "./pages/Profile";
import History from "./pages/History";
import ChangePassword from "./pages/ChangePassword";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Routes>
        </Router>
        {/* <Routing /> */}
      </Provider>
    </div>
  );
}

export default App;
