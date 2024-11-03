import { useState, useEffect } from "react";
import { SWIGGY_MENU_URL } from "../utils/constants";

const useRestaurantsMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_MENU_URL + resId);
    const json = await data.json();
    setresInfo(json.data);
    console.log("this is json data of resMenu",json.data)
  };
  return resInfo;
};
export default useRestaurantsMenu;
