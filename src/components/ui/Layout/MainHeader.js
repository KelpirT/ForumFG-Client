import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Col, Row } from "antd";
const items = [
  {
    label: "Categories",
    key: "categories",
  },
  {
    label: "Categories",
    key: "categories",
    icon: <MailOutlined />,
  },
  {
    label: "Trending",
    key: "Trending",
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
];
const MainHeader = () => {
  const [current, setCurrent] = useState("alipay");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Row>
      <Col xs={0} sm={4} md={4} lg={4} xl={4}>
        Col
      </Col>
      <Col xs={24} sm={16} md={16} lg={16} xl={16}>
        <Menu onClick={onClick} mode="horizontal" items={items} />;
      </Col>
      <Col xs={0} sm={4} md={4} lg={4} xl={4}>
        Col
      </Col>
    </Row>
  );
};
export default MainHeader;
