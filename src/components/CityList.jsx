/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CityItem from "./CityItem";
import style from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { CitiesProvider, useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;
  return (
    <ul className={style.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
