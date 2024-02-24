import { SearchOutlined } from "@ant-design/icons";
import { Card, Col, Input, Row, Select, Typography } from "antd";
import DefaultButton from "../../../Common/DefaultButton";
import { useEffect, useState } from "react";
import { ISelect } from "../../../../Data/Common/ISelect";
import { minList } from "../../../../Utils/SearchLists/MInList";
import { maxList } from "../../../../Utils/SearchLists/MaxList";
import { DistanceList } from "../../../../Utils/SearchLists/DistanceList";
import LinkButton from "../../../Common/LinkButton";
import { BaseOptionType } from "antd/es/select";

interface IProps {
  makesList: ISelect[];
  modelsList: ISelect[];
  handleGetMakesList: () => void;
  handleGetModelsListById: (id: string) => void;
}

const DashboardSearch: React.FC<IProps> = ({
  makesList,
  handleGetMakesList,
  handleGetModelsListById,
  modelsList,
}) => {
  const cols = { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 };
  const cols2 = { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 };
  const [makeValue, setMakeValue] = useState("");
  const [modelValue, setModelValue] = useState("");

  useEffect(() => {
    handleGetMakesList();
  }, []);

  return (
    <Card className="dashboard-search">
      <Typography.Title className="dashboard-search__title">
        Search for a car
      </Typography.Title>

      <Row gutter={[16, 16]} className="dashboard-search__options">
        <Col {...cols}>
          <Select
            className="dashboard-search__select"
            placeholder="Make"
            size="middle"
            options={[{ value: "", label: "All Makes" }, ...makesList]}
            onChange={(value, data:BaseOptionType) => {
              setModelValue("")
              setMakeValue(data.label)
              handleGetModelsListById(value)
            }}
            value={makeValue}
          />
        </Col>
        <Col {...cols}>
          <Select
            className="dashboard-search__select"
            placeholder="Model"
            size="middle"
            options={[{ value: "", label: "All Models" }, ...modelsList]}
            onChange={(value)=>{
              setModelValue(value)
            }}
            value={modelValue}
          />
        </Col>
        <Col {...cols}>
          <Row gutter={[8, 8]}>
            <Col {...cols2}>
              <Select
                className="dashboard-search__select"
                placeholder="Min Price"
                size="middle"
                options={minList}
              />
            </Col>
            <Col {...cols2}>
              <Select
                className="dashboard-search__select"
                placeholder="Max Price"
                size="middle"
                options={maxList}
              />
            </Col>
          </Row>
        </Col>
        <Col {...cols}>
          <Input placeholder="Zip Code" size="middle" />
        </Col>
        <Col {...cols}>
          <Select
            className="dashboard-search__select"
            placeholder="Distance"
            size="middle"
            options={DistanceList}
          />
        </Col>
        <Col {...cols}>
          <div className="dashboard-search__button">
            <DefaultButton title="Search" icon={<SearchOutlined />} />
            <LinkButton href="/advanced_search" title="Advanced Search" />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default DashboardSearch;
