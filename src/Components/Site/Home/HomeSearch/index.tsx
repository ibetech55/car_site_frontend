import { SearchOutlined } from "@ant-design/icons";
import { Col, Row, Select, Typography } from "antd";
import DefaultButton from "../../../Common/DefaultButton";

const HomeSearch = () => {
  const yearsData = () => {
    const yrs: { value: string; label: string }[] = [];
    for (let i = 2024; i >= 1950; i--) {
      yrs.push({ value: i.toString(), label: i.toString() });
    }
    return yrs;
  };
  const cols = { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 };
  return (
    <div className="home-search">
      <Typography.Title className="home-search__title">
        Search for a car
      </Typography.Title>
      <Row gutter={[16, 16]} className="home-search__options">
        <Col {...cols}>
          <Select
            className="home-search__select"
            placeholder="Year"
            options={yearsData()}
            size="large"
          />
        </Col>

        <Col {...cols}>
          <Select
            className="home-search__select"
            placeholder="Make"
            size="large"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Col>
        <Col {...cols}>
          <Select
            className="home-search__select"
            placeholder="Model"
            size="large"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </Col>
        <Col {...cols}>
          <Select
            className="home-search__select"
            placeholder="Price"
            size="large"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </Col>
        <Col {...cols}>
          <Select
            className="home-search__select"
            placeholder="Zip Code"
            size="large"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </Col>
        <Col {...cols}>
          <Select
            className="home-search__select"
            placeholder="Distance"
            size="large"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </Col>
        <Col {...cols}>
          <div className="home-search__button">
            <DefaultButton title="Search" icon={<SearchOutlined />} />
            <DefaultButton title="Advanced Search" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeSearch;
