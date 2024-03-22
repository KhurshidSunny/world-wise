import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import style from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={style.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
