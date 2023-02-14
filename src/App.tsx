import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar";

export async function loader() {}

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
