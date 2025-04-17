import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Desktop from "./pages/Desktop";
import Desktop1 from "./pages/Desktop1";
import Desktop2 from "./pages/Desktop2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Desktop/>}/>
            <Route path="/desktop" element={<Desktop1/>}/>
            <Route path="/desktop-3" element={<Desktop2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;