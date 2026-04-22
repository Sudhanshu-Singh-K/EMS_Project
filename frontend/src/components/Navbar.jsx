// import React from "react";

// function Navbar() {
//   const logout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <div style={{ padding: "10px", background: "#eee" }}>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// }

// export default Navbar;



import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // better than window.location
  };

  return (
    <div className="navbar">
      <h3 style={{ margin: 0 }}>Student Dashboard</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;