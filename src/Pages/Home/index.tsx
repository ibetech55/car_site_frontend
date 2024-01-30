import Navbar from "../../Components/Common/Navbar";
import HomeHeader from "../../Components/Site/Home/HomeHeader";
import HomeSearch from "../../Components/Site/Home/HomeSearch";
import useBrand from "../../Hooks/UseBrand";
import "./HomePage.scss";

const Home = () => {
  const { handleGetMakesList, makesList, handleGetModelsListById, modelsList } =
    useBrand();

  return (
    <div className="home-page-container">
      <div className="home-page">
        <section className="home-page__section">
          <div className="home-page__diagonal-shape"></div>
          <div className="home-page__header">
            <Navbar />
            <HomeHeader />
          </div>
        </section>

        <section className="home-page__search-section">
          <div className="home-page__search" id="home-search">
            <HomeSearch
              makesList={makesList}
              handleGetMakesList={handleGetMakesList}
              handleGetModelsListById={handleGetModelsListById}
              modelsList={modelsList}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
