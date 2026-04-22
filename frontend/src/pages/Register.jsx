import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/register", form);
      alert("Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} required />
        <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} required />
        <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})} required />
        <input placeholder="Course" onChange={(e)=>setForm({...form,course:e.target.value})} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;