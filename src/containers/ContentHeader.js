import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const styles = {
  widgetPageStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    overflow: "hidden",
  },
};

export default function ContentHeader({ headerTitle }) {
  const history = useHistory();

  return (
    <div
      style={{
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={styles.widgetPageStyle}>
        <ArrowLeftOutlined
          onClick={() => {
            localStorage.removeItem("selectedMember");
            history.push("/dashboard");
          }}
          style={{
            marginTop: 7,
            fontSize: 20,
            color: "blue",
            marginLeft: 5,
            marginRight: 10,
          }}
        />
        <h4 style={{ color: "#454647", marginTop: 2 }}>{headerTitle}</h4>
      </div>
      <div>
        <Button
          className="stepsButtonInActive"
          style={{
            background: "transparent",
            color: "#02599C",
            border: "none",
            boxShadow: "none",
          }}
          onClick={() => {
            localStorage.removeItem("selectedMember");
            history.push("/dashboard");
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
