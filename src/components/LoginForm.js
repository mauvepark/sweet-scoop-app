import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayStatus from "./DisplayStatus";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (messageType === "success") {
      const timer = setTimeout(() => {
        navigate("/flavors");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [messageType, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Username and password cannot be empty.");
      setMessageType("error");
      return;
    }

    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();

      const matchedUser = users.find(
        (user) => user.username === username && user.email === password
      );

      if (matchedUser) {
        setMessage("Login successful");
        setMessageType("success");
      } else {
        setMessage("Invalid username or password.");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("An error occurred while logging in.");
      setMessageType("error");
    }
  };

  return (
    <div className="login-page-section">
      <h2>Login</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            placeholder="Bret"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <div className="forgot-link">
          <a href="#!">Forgot Password?</a>
        </div>

        {message && <DisplayStatus type={messageType} message={message} />}
      </form>
    </div>
  );
}

export default LoginForm;