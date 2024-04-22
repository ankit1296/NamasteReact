import React, { useEffect, useState, useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../hooks/useRestaurants";
import { LOCATION_DATA } from "../constants/constants";
import useFetchMoreRestaurants from "../hooks/useFetchMoreRestaurants";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const restoContainer = useRef(null);
  const [restoData, setRestoData] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [topRatedFilterOn, toggleTopRatedFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const lat = LOCATION_DATA.lat;
  const lng = LOCATION_DATA.lng;
  const { resList } = useRestaurants({ lat, lng });

  useEffect(() => {
    setRestoData(resList);
    setAllRestaurants(resList);
  }, [resList]);

  useEffect(() => {
    const handleRestoContainerScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = restoContainer.current;
      // if (Math.abs(scrollTop + clientHeight - scrollHeight) <= 5 && !loading) {
      //   console.log("scccc");
      //   // Trigger pagination when scrolled to the bottom
      //   setLoading(true);
      //   refetch
      //     .then((newData) => {
      //       setRestoData((prevData) => [...prevData, ...newData]);
      //     })
      //     .catch((error) => {
      //       console.error("Error fetching more restaurants:", error);
      //     })
      //     .finally(() => {
      //       setLoading(false);
      //     });
      // }
    };

    // setTimeout(() => {
    //   const restoContainerElement = restoContainer.current;
    //   if (restoContainerElement) {
    //     restoContainerElement.addEventListener(
    //       "scroll",
    //       handleRestoContainerScroll
    //     );
    //   }
    // }, 5000);

    return () => {
      if (restoContainerElement) {
        restoContainerElement.removeEventListener(
          "scroll",
          handleRestoContainerScroll
        );
      }
    };
  }, [lat, lng, loading]); // Include loading state in dependencies

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <div className="mr-94">
        <h3>
          Looks like you are offline, Please check your internet connection!!
        </h3>
      </div>
    );
  }
  return restoData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search"> </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            toggleTopRatedFilter(!topRatedFilterOn);
            setRestoData(
              !topRatedFilterOn
                ? restoData.filter((resto) => resto?.info?.avgRating >= 4.5)
                : allRestaurants
            );
          }}
        >
          {topRatedFilterOn ? (
            <span>
              Top Rated Restaurants <div className="remove-icon"></div>
            </span>
          ) : (
            <span>Top Rated Restaurants</span>
          )}
        </button>
      </div>
      <div className="resto-container" ref={restoContainer}>
        {restoData.map((restoData) => (
          <Link
            className="no-text-decoration"
            to={`menu/${restoData.info.id}`}
            key={restoData.info.id}
          >
            <RestaurantCard resData={restoData} />
          </Link>
        ))}
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default Body;
