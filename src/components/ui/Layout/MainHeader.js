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
    key: "alipay",
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
        <Menu onClick={onClick} mode="horizontal" items={items} />
  );
};
export default MainHeader;
