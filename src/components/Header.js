import { NavLink } from "react-router-dom";

const Header = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "grey",
    borderRight: isActive ? "5px solid black" : "5px solid white",
  });

  return (
    <>
      <div className="header-navlinks">
        <NavLink style={getActiveStyle} className="navlink" to="/">
          Inbox
        </NavLink>
        <NavLink style={getActiveStyle} className="navlink" to="/spam">
          {" "}
          Spam
        </NavLink>
        <NavLink style={getActiveStyle} className="navlink" to="/trash">
          {" "}
          Trash
        </NavLink>
      </div>
    </>
  );
};

export default Header;
