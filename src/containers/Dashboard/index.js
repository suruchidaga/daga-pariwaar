import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";
import useWindowSize from "@lib/hooks/useWindowSize";
import appActions from "@redux/app/actions";
import { variables } from "@assets/styles/variables";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import DashboardRoutes from "./DashboardRoutes";
import { DashboardContainer, DashboardGlobalStyles } from "./Dashboard.styles";

const { Content, Footer } = Layout;
const { toggleAll } = appActions;

const styles = {
  layout: { flexDirection: "row", overflowX: "hidden" },
  content: {
    flexShrink: "0",
    background: "#F8FBFF",
    position: "relative",
  },
  footer: {
    background: variables.PRIMARY_BLUE,
    textAlign: "center",
    borderTop: "1px solid #ededed",
    color: "#4F7796",
    fontWeight: "bold",
  },
  links: {
    width: "100%",
    display: "flex",
    backgroundColor: "#62a5cdf2",
    height: "100px",
  },
  buttons: {
    fontSize: 14,
    fontWeight: "500",
    height: "100%",
    width: "180px",
    borderWidth: "0px",
    backgroundColor: "#023760",
    color: "#fff",
    textTransform: "uppercase",
  },
};

export default function Dashboard() {
  const dispatch = useDispatch();
  const { width, height } = useWindowSize();
  const history = useHistory();

  useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height, dispatch]);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      history.go(1);
    });
  }, []);

  return (
    <DashboardContainer>
      <DashboardGlobalStyles />
      <Layout style={{ height: height }}>
        <Topbar />
        <Layout style={styles.layout}>
          <Sidebar />
          <Layout className="contentMainLayout">
            <Content className="dashboardontent" style={styles.content}>
              <DashboardRoutes />
            </Content>
            <Footer style={styles.footer}>
              DESIGNED AND DEVELOPED BY{" "}
              <span style={{ color: "#C8527A" }}>TUCIT</span>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
}
