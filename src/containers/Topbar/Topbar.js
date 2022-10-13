import { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Menu, Layout, Modal } from "antd";
import {
  CaretDownOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import UserIcon from "@assets/images/user-icon.png";
import { variables } from "@assets/styles/variables";
import { loadState } from "@lib/helpers/localStorage";
import authAction from "@redux/auth/actions";
import appActions from "@redux/app/actions";
import TopbarWrapper from "./Topbar.styles";

const { Header } = Layout;

const { logout } = authAction;
const { toggleCollapsed, hideSideMenu } = appActions;

export default function Topbar() {
  const history = useHistory();

  const { collapsed, openDrawer } = useSelector((state) => state.App);
  const { currentUser } = useSelector((state) => state.Auth);
  const storedUser = loadState("currentUser");
  const activeUser = currentUser.employee_name ? currentUser : storedUser;
  const dispatch = useDispatch();

  const handleToggle = useCallback(
    () => dispatch(toggleCollapsed()),
    [dispatch]
  );

  const isCollapsed = collapsed && !openDrawer;
  const styling = {
    position: "fixed",
    width: "100%",
    height: 80,
    minHeight: 80,
  };

  const logOut = () => {
    dispatch(logout(history));
  };

  const confirm = () => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure you want to Logout?",
      okText: "Yes",
      onOk: logOut,
      cancelText: "No",
    });
  };

  const menuRight = (
    <Menu style={{ top: 15 }}>
      <Menu.Item key="0" onClick={confirm}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <TopbarWrapper
      style={{
        height: 100,
        minHeight: 100,
      }}
    >
      <Header
        style={styling}
        className={isCollapsed ? "topbar collapsed" : "topbar"}
      >
        <div className="left">
          <button
            className={
              isCollapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
            }
            style={{
              color: variables.WHITE_COLOR,
              cursor: "pointer",
            }}
            onClick={handleToggle}
          />
          <Link
            className="topbarLogo"
            to="/dashboard"
            onClick={() => {
              dispatch(hideSideMenu());
            }}
          >
            <span className="dashboardTitle">FAMILY DIRECTORY</span>
          </Link>
        </div>
        <ul className="right">
          <li className="userDetails" style={{ cursor: "default" }}>
            <div className="userName">{activeUser.employee_name}</div>
          </li>
          <li className="user" style={{ cursor: "default" }}>
            <div className="imgWrapper">
              <img alt="user" src={UserIcon} />
            </div>
          </li>
          <Dropdown overlay={menuRight} trigger={["click"]}>
            <li className="caretDown">
              <CaretDownOutlined />
            </li>
          </Dropdown>
        </ul>
      </Header>
    </TopbarWrapper>
  );
}
