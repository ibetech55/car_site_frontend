import DefaultButton from "../../Components/Common/DefaultButton";
import { WithAuth } from "../../Components/Template/WithAuth";
import useAuth from "../../Hooks/UseAuth";

const DashboardPage = () => {
  const { handleLogout } = useAuth();
  return (
    <div>
      Dashboard
      <DefaultButton title="Log off" onClick={() => handleLogout()} />
    </div>
  );
};

export const Dashboard = WithAuth(DashboardPage);
