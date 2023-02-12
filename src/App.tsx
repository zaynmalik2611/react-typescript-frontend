import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="detail"></div>
    </div>
  );
}

export default App;
