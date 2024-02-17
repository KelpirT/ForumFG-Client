import React, { useContext, createContext, useState } from "react";
import MainRoute from "../../../routes/router";
import MainHeader from "./MainHeader";
import { Layout, Flex } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100vw",
  height: "100vh"
};

const MainLayout = () => (
  <Layout style={layoutStyle}>
    <Header style={headerStyle}>
      <MainHeader></MainHeader>
    </Header>
    <Layout>
      <Sider width="18%" style={siderStyle}>
        Sider
      </Sider>
      <Content style={contentStyle}>
        {/* <MainHeader></MainHeader> */}
        <MainRoute />
      </Content>
      <Sider width="18%" style={siderStyle}>
        Sider
      </Sider>
    </Layout>
    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
);
export default MainLayout;
