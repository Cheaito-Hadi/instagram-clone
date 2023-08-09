import React from "react";
import Input from "../../Components/Input";
import { useState } from "react";
import axios from "axios";
import "./Signup.css";

function SignUp() {
  const [info, setInfo] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  const handleDataChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submitUser = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/register", info);
      console.log(info);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <div className="inputs-wrapper">
        <Input
          label="Email"
          placeholder="Email"
          name="email"
          value={info.email}
          onChange={handleDataChange}
          type="text"
        />
        <Input
          label="Full name"
          placeholder="Full Name"
          name="name"
          value={info.full_name}
          onChange={handleDataChange}
          type="text"
        />
        <Input
          label="Username"
          placeholder="Username"
          name="username"
          value={info.username}
          onChange={handleDataChange}
          type="text"
        />
        <Input
          label="Password"
          placeholder="Password"
          name="password"
          value={info.password}
          onChange={handleDataChange}
          type="password"
        />
        <button className="signup-btn" onClick={submitUser}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
