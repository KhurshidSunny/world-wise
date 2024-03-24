import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import style from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={style.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
