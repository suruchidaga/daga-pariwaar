import { useSelector } from "react-redux";
import LayoutWrapper from "@components/utility/layoutWrapper";
import Loader from "@components/utility/loader";
import DefaultDashboard from "./DefaultDashboard";

export default function Widgets() {
  const { isFetching } = useSelector((state) => state.Dashboard);

  return (
    <LayoutWrapper>
      <div
        style={{
          padding: 20,
        }}
      >
        {isFetching ? <Loader /> : <DefaultDashboard />}
      </div>
    </LayoutWrapper>
  );
}
