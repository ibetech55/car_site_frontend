import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row, Select, Typography } from "antd";
import DefaultButton from "../../../Common/DefaultButton";
import { useEffect, useState } from "react";
import { ISelect } from "../../../../Data/Common/ISelect";
import { minList } from "../../../../Utils/SearchLists/MInList";
import { maxList } from "../../../../Utils/SearchLists/MaxList";
import { DistanceList } from "../../../../Utils/SearchLists/DistanceList";
import LinkButton from "../../../Common/LinkButton";

interface IProps {
  makesList: ISelect[];
  modelsList: ISelect[];
  handleGetMakesList: () => void;
  handleGetModelsListById: (id: string) => void;
}

const HomeSearch: React.FC<IProps> = ({
  makesList,
  handleGetMakesList,
  handleGetModelsListById,
  modelsList,
}) => {
  const cols = { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 };
  const cols2 = { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 };
  const [modelId, setModelId] = useState('');
  const handleChangeMake = (id:string) => {
    handleGetModelsListById(id);
    setModelId("")
  }

  const handleChangeModel = (id:string) => {
    setModelId(id)
  }

  useEffect(() => {
    handleGetMakesList();
  }, []);

  return (
    <div className="home-search">
      <Typography.Title className="home-search__title">
        Search for a car
      </Typography.Title>

      <Row gutter={[16, 16]} className="home-search__options">
        <Col {...cols}>
          <Select
            className="home-search__select"
            placeholder="Make"
            size="large"
            options={[{ value: null, label: "All Makes" }, ...makesList]}
            onChange={(value) => handleChangeMake(value)}
          />
        </Col>
        <Col {...cols}>
          <Select
            className="home-search__select"
            placeholder="Model"
            size="large"
            options={[{ value: "", label: "All Models" }, ...modelsList]}
            onChange={(value) => handleChangeModel(value)}
            value={modelId}
          />
        </Col>
        <Col {...cols}>
          <Row gutter={[8, 8]}>
            <Col {...cols2}>
              <Select
                className="home-search__select"
                placeholder="Min Price"
                size="large"
                options={minList}
              />
            </Col>
            <Col {...cols2}>
              <Select
                className="home-search__select"
                placeholder="Max Price"
                size="large"
                options={maxList}
              />
            </Col>
          </Row>
        </Col>
        <Col {...cols}>
          <Input placeholder="Zip Code" size="large" />
        </Col>
        <Col {...cols}>
          <Select
            className="home-search__select"
            placeholder="Distance"
            size="large"
            options={DistanceList}
          />
        </Col>
        <Col {...cols}>
          <div className="home-search__button">
            <DefaultButton title="Search" icon={<SearchOutlined />} />
            <LinkButton href="/advanced_search" title="Advanced Search" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeSearch;
