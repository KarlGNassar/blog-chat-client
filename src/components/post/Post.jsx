import "./post.css";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { format } from "timeago.js";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const { user: currentUser } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id.$oid));
  }, [post.likes, currentUser._id.$oid]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`users?userId=${post.userId}`);
      setUser(response.data);
    };

    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put(`posts/${post._id}/like`, { userId: currentUser._id.$oid });
    } catch (error) {
      console.error(error);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? `${PF}/${user.profilePicture}`
                    : `${PF}/person/noAvatar.png`
                }
                alt="Profile Pic"
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          {post.img && (
            <img src={`${PF}/${post.img}`} alt="Post Pic" className="postImg" />
          )}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${PF}/like.png`}
              alt="Like"
              className="likeIcon"
              onClick={likeHandler}
            />
            <img
              src={`${PF}/heart.png`}
              alt="Heart"
              className="likeIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
