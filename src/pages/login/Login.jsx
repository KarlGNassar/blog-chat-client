import { useRef } from "react";
import "./login.css";
import { login } from "../../api";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    login({ email, password }, dispatch);
  };
  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social App
          </span>
        </div>
        <form className="loginRight" onSubmit={handleSubmit}>
          <div className="loginBox">
            <input
              type="email"
              required
              className="loginInput"
              placeholder="Email"
              ref={emailRef}
            />
            <input
              type="password"
              required
              minLength={6}
              className="loginInput"
              placeholder="Password"
              ref={passwordRef}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="25px" />
              ) : (
                "Login"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="25px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
