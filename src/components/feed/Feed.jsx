import { useEffect, useState } from "react";

import axios from "../../axios";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`posts/profile/${username}`)
        : await axios.get("posts/timeline/60b15ea947492076b4dc9b6a");
      setPosts(response.data);
    };

    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
