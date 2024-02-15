import { WithAuth } from "../../Components/Template/WithAuth";

const DashboardPage = () => {
  return (
    <div>
      Dashboard
    </div>
  );
};

export const Dashboard = WithAuth(DashboardPage);
