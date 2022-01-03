import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="Birthday" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ralph Nassar</b> and <b>3 other friends</b> have a birtday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="Ad" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
