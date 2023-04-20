import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>tanaypratap's mail box</h1>
      <nav>
        <NavLink to="/">Inbox</NavLink> ||
        <NavLink to="/spam"> Spam</NavLink> ||
        <NavLink to="/trash"> Trash</NavLink>
      </nav>
    </>
  );
};

export default Header;
