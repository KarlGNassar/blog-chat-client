import { useRef } from "react";
import "./register.css";
import axios from "../../axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (confirmPassword !== password) {
      confirmPasswordRef.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username,
        email,
        password,
      };
      try {
        await axios.post("auth/register", user);
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    }
  };

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
          <form className="registerBox" onSubmit={handleSubmit}>
            <input
              type="text"
              className="registerInput"
              placeholder="Username"
              required
              ref={usernameRef}
            />
            <input
              type="email"
              className="registerInput"
              placeholder="Email"
              required
              ref={emailRef}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="Password"
              required
              minLength={6}
              ref={passwordRef}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="Confirm Password"
              required
              ref={confirmPasswordRef}
            />
            <button className="registerButton" type="submit">
              Sign up
            </button>
            <Link to="/login">
              <button className="registerRegisterButton">
                Login to Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
