import { useEffect, useState } from "react";
import { URLS } from "../constants/constants";

const useRestaurants = ({ lat, lng }) => {
  const [resList, setResList] = useState([]);
  const isSeoHomepageEnabled = true;
  const pageType = "DESKTOP_WEB_LISTI";
  const url = `${URLS.RESTAURANT_LIST}lat=${lat}&lng=${lng}&is-seo-homepage-enabled=${isSeoHomepageEnabled}&page_type=${pageType}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        localStorage.setItem("csrfToken", json.csrfToken);
        localStorage.setItem("nextOffset", json?.data.pageOffset?.nextOffset);
        const restaurantData =
          json.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        setResList(restaurantData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { resList };
};

export default useRestaurants;
