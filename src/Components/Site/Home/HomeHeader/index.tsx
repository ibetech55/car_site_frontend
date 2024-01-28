import { Typography } from "antd";
import LinkButton from "../../../Common/LinkButton";

const HomeHeader = () => {
  return (
    <div className="home-header">
      <div className="home-header__content">
        <div className="home-header__content-info">
          <Typography className="home-header__content-info__text1">
            Search for 1000s of cars
          </Typography>
          <Typography className="home-header__content-info__text2">
            Save <span>big</span> with our <br />
            Car rentals
          </Typography>
          <Typography className="home-header__content-info__text3">
            To contribute to positive change and achieve our sustainability
            <br /> goals with many extraordinary
          </Typography>
          <div className="home-header__content-info__buttons">
            <LinkButton
              href="#header2"
              title="View Cars"
              id="view-cars"
              outline
            />
            <LinkButton href="#header2" title="Learn More" id="learn-more" />
          </div>
        </div>
        <div className="home-header__content-image">
          <div className="home-header__content-image-car">
            <img src="/assets/header_image.png" alt="header_car" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
