import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./App.css";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      Free the mind
      <Button>hello</Button>
    </div>
  );
}

export default App;
