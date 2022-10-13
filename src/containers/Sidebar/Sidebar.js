import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";
import options from "./options";
import Scrollbars from "@components/utility/customScrollBar";
import Menu from "@components/uielements/menu";
import appActions from "@redux/app/actions";
import Logo from "@components/utility/logo";
import SidebarWrapper from "./Sidebar.styles";
import SidebarMenu from "./SidebarMenu";

const { Sider } = Layout;

const { changeOpenKeys, changeCurrent, toggleCollapsed } = appActions;

export default function Sidebar() {
  const dispatch = useDispatch();
  const { view, openKeys, collapsed, openDrawer, current, height } =
    useSelector((state) => state.App);
  const customizedTheme = useSelector(
    (state) => state.ThemeSwitcher.sidebarTheme
  );

  const handleClick = (e) => {
    dispatch(changeCurrent([e.key]));
    if (view === "MobileView") {
      setTimeout(() => {
        dispatch(toggleCollapsed());
      }, 100);
    }
  };

  const onOpenChange = (newOpenKeys) => {
    const latestOpenKey = newOpenKeys.find(
      (key) => !(openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = openKeys.find(
      (key) => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey);
    }
    dispatch(changeOpenKeys(nextOpenKeys));
  };

  const getAncestorKeys = (key) => {
    const map = {
      sub3: ["sub2"],
    };
    return map[key] || [];
  };

  const isCollapsed = collapsed && !openDrawer;
  const mode = isCollapsed === true ? "vertical" : "inline";
  const styling = {
    backgroundColor: customizedTheme.backgroundColor,
  };

  return (
    <SidebarWrapper>
      <Sider
        trigger={null}
        collapsible={true}
        collapsed={isCollapsed}
        width={245}
        className="sidebar"
        style={styling}
      >
        <Logo collapsed={isCollapsed} />
        <Scrollbars style={{ height: height - 70 }}>
          <Menu
            onClick={handleClick}
            theme="dark"
            className="dashboardMenu"
            mode={mode}
            openKeys={isCollapsed ? [] : openKeys}
            selectedKeys={current}
            onOpenChange={onOpenChange}
          >
            {options.map((singleOption) => (
              <SidebarMenu key={singleOption.key} singleOption={singleOption} />
            ))}
          </Menu>
        </Scrollbars>
      </Sider>
    </SidebarWrapper>
  );
}
