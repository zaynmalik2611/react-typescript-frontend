import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="detail">
        <Routes>
          <Route path="/" element={<Posts />} errorElement={<div>Error</div>} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
