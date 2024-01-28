import Navbar from "../../Components/Common/Navbar";
import HomeHeader from "../../Components/Site/Home/HomeHeader";
import HomeSearch from "../../Components/Site/Home/HomeSearch";
// import HomeSearch from "../../Components/Site/Home/HomeSearch";
import "./HomePage.scss";

const Home = () => {
  return (
    <div className="home-page-container">
      <div className="home-page">
        <section>
          <div className="diagonal-shape"></div>
          <div className="home-page__header">
            <Navbar />
            <HomeHeader />
          </div>
        </section>

        <div id="section3">
          <div className="home-page__header2" id="header2">
            <HomeSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
