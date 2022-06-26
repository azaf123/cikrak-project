import logo from './logo.svg';
import './App.css';
import HomeEdu from './education/homeEducation';
import FirstEdu from './education/edu1';
import SecondEdu from './education/edu2';
import ThirdEdu from './education/edu3';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeEdu />} />
          <Route path="/edu1" element={<FirstEdu />} />
          <Route path="/edu2" element={<SecondEdu />} />
          <Route path="/edu3" element={<ThirdEdu />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
