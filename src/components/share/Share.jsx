import "./share.css";

import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRef, useState } from "react";
import axios from "../../axios";

function Share() {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const descriptionRef = useRef();

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const description = descriptionRef.current.value;
    const newPost = {
      userId: user._id.$oid,
      description,
    };

    try {
      await axios.post("posts", newPost);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? `${PF}/${user.profilePicture}`
                : `${PF}/person/noAvatar.png`
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder={`What's on your mind ${user.username}?`}
            className="shareInput"
            ref={descriptionRef}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={handleSubmit}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
