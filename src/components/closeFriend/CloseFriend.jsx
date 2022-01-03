import "./closeFriend.css";

function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img
        src={user.profilePicture}
        alt="Profile Pic"
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}

export default CloseFriend;
