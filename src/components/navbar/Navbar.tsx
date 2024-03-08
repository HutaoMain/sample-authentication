import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import "./Navbar.css";

const Navbar = () => {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar-container">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
