import DefaultButton from "../../Components/Common/DefaultButton";
import { WithAuth } from "../../Components/Template/WithAuth";
import { removeCookie } from "../../Utils/HandleCookie";

const DashboardPage = () => {
  return (
    <div>
      Dashboard
      <DefaultButton
        title="Log off"
        onClick={() => {
          removeCookie("login_token");
          removeCookie("auth_token");
          window.location.href = "/";
        }}
      />
    </div>
  );
};

export const Dashboard = WithAuth(DashboardPage)
