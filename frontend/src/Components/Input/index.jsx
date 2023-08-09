import React from "react";
import "./Input.css";

const Input = ({label, placeholder, value, onChange, type, name}) => {
  return (
    <div className="input-wrapper">    
      <label>{label}</label>
      <input placeholder={placeholder} value={value} onChange={onChange} type={type} name={name}/>
    </div>
  );
};

export default Input;
