import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Social App</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Social App
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input
              type="text"
              className="registerInput"
              placeholder="Username"
            />
            <input type="email" className="registerInput" placeholder="Email" />
            <input
              type="password"
              className="registerInput"
              placeholder="Password"
            />
            <input
              type="password"
              className="registerInput"
              placeholder="Confirm Password"
            />
            <button className="registerButton">Sign up</button>
            <button className="registerRegisterButton">Login to Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
