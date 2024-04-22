import { useEffect, useState } from "react";
import { URLS } from "../constants/constants";

const useFetchMoreRestaurants = ({ lat, lng }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resList, setResList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(URLS.FETCH_MORE_RESTAURANTS, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lat,
            lng,
            nextOffset: localStorage.getItem("nextOffset") || "",
            filters: {},
            seoParams: {
              seoUrl: "https://www.swiggy.com/",
              pageType: "FOOD_HOMEPAGE",
              apiName: "FoodHomePage",
            },
            page_type: "DESKTOP_WEB_LISTING",
            _csrf: localStorage.getItem("csrfToken") || "",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        console.log("fdff", json);
        // setResList(restaurantData);
        // setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  }, []);

  return {
    resList,
    loading,
    error,
    refetch: () => fetchData(),
  };
};

export default useFetchMoreRestaurants;
