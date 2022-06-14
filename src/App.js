
import './App.css';
import Home from "./components/home/home";
import Createpage from './components/createPage/createPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpage" element={<Createpage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
