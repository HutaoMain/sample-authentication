import "./Login.css";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import logo from "../../assets/logo.png";

const Login: React.FC = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    // remove this part of authenticating
    // const passwordRegex =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    // if (!passwordRegex.test(password)) {
    //   setError(
    //     "Password must have at least 8 characters with at least 1 uppercase, 1 lowercase, and 1 special character."
    //   );
    //   return;
    // }
    // until here

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    dispatch({ type: "LOGIN_START" });

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            username: data.username,
            name: data.firstName + data.lastName,
          },
        });

        localStorage.setItem("token", data.token);
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: "An error occurred during login.",
        });
        setError("An error occurred during login.");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: "LOGIN_FAILURE",
        payload: "An error occurred during login.",
      });

      const errorString = JSON.stringify(error);
      setError(errorString);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <img src={logo} alt="Login Visual" className="login-photo" />
        <div className="login-details-container">
          <h2>Login</h2>
          {error && <p className="login-error">{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={state.loading}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={state.loading}
          />
          <button onClick={handleLogin} disabled={state.loading}>
            <span className="button-text">
              {state.loading ? "Logging in..." : "Login"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
