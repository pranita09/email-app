import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Inbox</NavLink> ||
        <NavLink to="/spam"> Spam</NavLink> ||
        <NavLink to="/trash"> Trash</NavLink>
      </nav>
    </>
  );
};

export default Header;
