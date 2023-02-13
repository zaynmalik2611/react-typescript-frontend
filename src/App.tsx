import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar";
import { getContacts } from "./loaders/contacts";

export async function loader() {
  const contacts = await getContacts();
  return contacts;
}

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
