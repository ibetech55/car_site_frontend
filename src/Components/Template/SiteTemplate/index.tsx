import { Outlet } from "react-router-dom";
import SiteNavbar from "../../Common/SiteNavbar";

export const SiteTemplate = () => {
  return (
    <div className="site-template">
      <div className="site-template__navbar">
        <div className="site-template__navbar-inner">
          <SiteNavbar />
        </div>
      </div>
      <div className="site-template__content">
        <Outlet />
      </div>
    </div>
  );
};
