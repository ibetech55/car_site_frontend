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
          <Typography>Home</Typography>
        </Link>
        <Link to="#">
          <Typography>About Us</Typography>
        </Link>
        <Link to="#">
          <Typography>Services</Typography>
        </Link>
        <Link to="#">
          <Typography>Inventory</Typography>
        </Link>
        <Link to="#">
          <Typography>Blog</Typography>
        </Link>
        <Link to="#">
          <Typography>Shop</Typography>
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
