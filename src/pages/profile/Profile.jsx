import { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useParams } from "react-router";
import "./profile.css";
import axios from "../../axios";

const Profile = () => {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    console.log(PF);
    const fetchUser = async () => {
      const response = await axios.get(`users?username=${username}`);
      setUser(response.data);
    };

    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />

      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? `${PF}/${user.coverPicture}`
                    : `${PF}/person/noCover.png`
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? `${PF}/${user.profilePicture}`
                    : `${PF}/person/noAvatar.png`
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
