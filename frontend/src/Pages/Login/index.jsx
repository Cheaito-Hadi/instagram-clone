import React from "react";
import Input from "../../Components/Input";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleDataChang = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", credentials);
      const message = response.data.message;
      if (message ==='Logged in'){
        localStorage.setItem("token",response.data.authorization.token)
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="container">
      <div className="inputs-wrapper">
        <Input
          label="Email"
          placeholder="Email"
          name="email"
          value={credentials.email}
          onChange={handleDataChang}
          type="text"
        />
        <Input
          label="Password"
          placeholder="Password"
          name="password"
          value={credentials.password}
          onChange={handleDataChang}
          type="password"
        />
        <button className="login-btn" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
