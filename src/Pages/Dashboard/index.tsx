import DashboardSearch from "../../Components/Site/Dashboard/DashboardSearch";
import { WithAuth } from "../../Components/Template/WithAuth";
import useBrand from "../../Hooks/UseBrand";

const DashboardPage = () => {
  const { handleGetMakesList, makesList, handleGetModelsListById, modelsList } =
    useBrand();
  return (
    <div className="dashboard-page">
      <div className="dashboard-page__search">
        <DashboardSearch
          makesList={makesList}
          handleGetMakesList={handleGetMakesList}
          handleGetModelsListById={handleGetModelsListById}
          modelsList={modelsList}
        />
      </div>
    </div>
  );
};

export const Dashboard = WithAuth(DashboardPage);
