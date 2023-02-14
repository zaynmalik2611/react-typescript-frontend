import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar";
import { getPosts } from "./loaders/posts";

export async function loader() {
  const posts = await getPosts();
  console.log("posts: ", posts);
  // return posts;
  return "abs";
}

function App() {
  const posts = useLoaderData() as string;
  return (
    <div className="App">
      <Navbar />
      <div>{posts}</div>

      <div className="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
