import CreatePost from "../components/posts/CreatePost";
import Posts from "../components/posts/Posts";

export default function Home() {
  return (
    <div className="mt-4">
      <CreatePost />
      <Posts />
    </div>
  );
}
