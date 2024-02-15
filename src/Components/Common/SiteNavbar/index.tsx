import { Dropdown, MenuProps, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import useAuth from "../../../Hooks/UseAuth";

const SiteNavbar = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Profile",
    },
    {
      label: "Logout",
      key: "2",
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "2") {
      handleLogout();
    } else if (e.key === "1") {
      navigate("/profile");
    }
  };
  return (
    <div className="site-navbar-container">
      <nav className="site-navbar">
        <div className="site-navbar__logo">
          <img src="./assets/logo.png" alt="logo" />
        </div>
        <div className="site-navbar__items">
          <Link to="#">
            <Typography>Cars for Sale</Typography>
          </Link>
          <Link to="#">
            <Typography>New Cars</Typography>
          </Link>
          <Link to="#">
            <Typography>Reviews</Typography>
          </Link>
          <Link to="#">
            <Typography>News & Videos</Typography>
          </Link>
          <Link to="#">
            <Typography>Sell Your Car</Typography>
          </Link>
          <Link to="#">
            <Typography>Financing</Typography>
          </Link>
        </div>
        <div className="site-navbar__button">
          <Dropdown
            menu={{ items, onClick: handleMenuClick }}
            trigger={["click"]}
            placement="bottomRight"
            overlayClassName="site-navbar__dropdown"
          >
            <MenuOutlined />
          </Dropdown>
        </div>
      </nav>
    </div>
  );
};

export default SiteNavbar;
