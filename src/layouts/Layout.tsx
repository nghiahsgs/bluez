import React, { PropsWithChildren, useEffect, useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import { EMenu, items } from "./Menu";
import { useRouter } from "next/router";
import { ROUTES } from "@/constants/route";
import { LocalStorageService } from "@/utils/storage";

const { Header, Content, Footer, Sider } = Layout;

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const route = useRouter();
  const pathName = route.pathname.replace("/", "");

  const [selected, setSelected] = useState<[EMenu]>([EMenu.WAITING_ORDER]);

  useEffect(() => {
    if (pathName !== "waiting-order") {
      handleNavigateWhenMount(pathName);
    }
  }, []);

  const handleNavigateWhenMount = (path?: string) => {
    let pathToEnum: EMenu;
    switch (path) {
      case "history-order":
        pathToEnum = EMenu.HISTORY_ORDER;
        break;
      case "balance":
        pathToEnum = EMenu.BALANCE;
        break;
      case "settings":
        pathToEnum = EMenu.SETTINGS;
        break;
      default:
        pathToEnum = EMenu.WAITING_ORDER;
    }
    setSelected([pathToEnum]);
  };

  const handleLogout = () => {
    route.push(ROUTES.LOGIN);
    LocalStorageService.deleteAccessToken();
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selected}
          onSelect={(selected) => setSelected(selected.selectedKeys as [EMenu])}
          items={items}
        />
      </Sider>
      <Layout style={{ marginLeft: 200, minHeight: "100vh" }}>
        <Header
          style={{
            padding: "16px",
            background: colorBgContainer,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button type="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: "calc(100vh - 178px)",
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Bot trade ©{new Date().getFullYear()} Created by Nate&Andie
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
