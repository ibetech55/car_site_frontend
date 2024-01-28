import { Typography } from "antd";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="./assets/logo.png" alt="logo" />
      </div>
      <div className="navbar__items">
        <Link to="#">
          <Typography.Link>Home</Typography.Link>
        </Link>
        <Link to="#">
          <Typography.Link>About Us</Typography.Link>
        </Link>
        <Link to="#">
          <Typography.Link>Services</Typography.Link>
        </Link>
        <Link to="#">
          <Typography.Link>Inventory</Typography.Link>
        </Link>
        <Link to="#">
          <Typography.Link>Blog</Typography.Link>
        </Link>
        <Link to="#">
          <Typography.Link>Shop</Typography.Link>
        </Link>
        {/* <Link to="#">
          <Typography.Link>FAQ</Typography.Link>
        </Link> */}
        {/* <Link to="#">
          <Typography.Link>Contacts</Typography.Link>
        </Link> */}
      </div>
      <div className="navbar__buttons">
        <LinkButton href="/signin" title="Sign In" id="sign-in" />
        <LinkButton href="/signup" title="Sign Up" id="sign-up" />
      </div>
    </nav>
  );
};

export default Navbar;
