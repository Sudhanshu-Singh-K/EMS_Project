import React, { useState } from "react";
import API from "../api";
import Navbar from "../components/Navbar.jsx";

function Dashboard() {
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [course, setCourse] = useState("");

  const updatePassword = async () => {
    try {
      await API.put("/update-password", passwords);
      alert("Password Updated");
    } catch {
      alert("Error updating password");
    }
  };

  const updateCourse = async () => {
    try {
      await API.put("/update-course", { course });
      alert("Course Updated");
    } catch {
      alert("Error updating course");
    }
  };

  return (
    <div className="dashboard">
      <Navbar />
      <h2>Dashboard</h2>

      <h3>Update Password</h3>
      <input placeholder="Old Password" onChange={(e)=>setPasswords({...passwords,oldPassword:e.target.value})}/>
      <input placeholder="New Password" onChange={(e)=>setPasswords({...passwords,newPassword:e.target.value})}/>
      <button onClick={updatePassword}>Update Password</button>

      <h3>Update Course</h3>
      <input placeholder="New Course" onChange={(e)=>setCourse(e.target.value)}/>
      <button onClick={updateCourse}>Update Course</button>
    </div>
  );
}

export default Dashboard;