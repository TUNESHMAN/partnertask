import React, { useState } from "react";
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button, Modal } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import Favorites from "../components/Favorites"
import { NavLink } from "react-router-dom";


const { Header, Sider, Content, Footer } = Layout;

function Board(props) {
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: "10px", backgroundColor: "white" }}>
          <Avatar icon="user" style={{ float: "left" }} />
          <Title style={{ color: "white", marginLeft: "900px" }} level={3}>
          </Title>
        </Header>
        <Layout>
          <Sider style={{ background: "teal" }}>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">Dashboard</Menu.Item>

              <Menu.Item key="home">
                <NavLink to="/" className="add-btn1">
                  <Icon type="home" />
                  <span>Home</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>
                  <h1 className="fav-header">These are your favorites</h1>
                </Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  background: "#fff",
                  padding: 24,
                  minHeight: 580,
                  width: "100%",
                }}
              >
                <Favorites />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              <p className="base">&copy;2020. NASA. All right reserved</p>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Board;
