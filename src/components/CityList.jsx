import { useEffect, useState } from "react";
import style from "./CityList.module.css";

function CityList() {
  const [cities, setCities] = useState([]);
  useEffect(function () {
    async function getCities() {
      const res = await fetch(`http://localhost:9000/cities`);
      const data = await res.json();
      setCities(data);
    }
    getCities();
  }, []);
  return <ul className={style.cityList}>List</ul>;
}

export default CityList;
