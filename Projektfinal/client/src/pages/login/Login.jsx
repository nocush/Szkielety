import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    axios.post("/auth/login", {
      username: userRef.current.value,
      password: passwordRef.current.value,
    }).then((res) => {
      //if there were any errors in the login process, display them
      //if error 404, display wrong username or password
      if (res.status !== 200) {
        setError(true);
        dispatch({ type: "LOGIN_FAILURE" });
    }
      //if there were no errors, log the user in
      else {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        window.location.replace("/");
      }
    }).catch((err) => {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
    );
  };
   

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      {error && <span className="failure">Wrong username or password</span>}      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}